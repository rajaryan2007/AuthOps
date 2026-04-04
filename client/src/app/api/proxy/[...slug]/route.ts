import { auth0 } from '@/lib/auth0';
import { NextRequest, NextResponse } from 'next/server';

const INTERNAL_SECRET = process.env.AUTH0_CLIENT_SECRET || '';

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string[] }> }
) {
    return handleProxyMethod(req, 'GET', params);
}

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string[] }> }
) {
    const body = await req.json();
    return handleProxyMethod(req, 'POST', params, body);
}

async function handleProxyMethod(
    req: NextRequest,
    method: string,
    params: Promise<{ slug: string[] }>,
    body?: unknown
) {
    try {
        const session = await auth0.getSession();

        if (!session?.user) {
            return NextResponse.json(
                { error: 'Not authenticated' },
                { status: 401 }
            );
        }

        const { slug } = await params;
        const path = slug.join('/');
        const expressUrl = `http://localhost:3001/${path}`;

        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'X-Internal-Secret': INTERNAL_SECRET,
                'X-User-Sub': session.user.sub || '',
                'X-User-Email': session.user.email || '',
                'X-User-Name': session.user.name || '',
            },
        };

        if (body) {
            fetchOptions.body = JSON.stringify(body);
        }

        const response = await fetch(expressUrl, fetchOptions);
        const data = await response.json();
        return NextResponse.json(data, { status: response.status });

    } catch (error: unknown) {
        console.error('Proxy Error:', error);
        const message = error instanceof Error ? error.message : 'Unknown error';
        const status = (error as Record<string, unknown>)?.status;
        return NextResponse.json(
            { error: 'Backend Connection Failed', message },
            { status: typeof status === 'number' ? status : 500 }
        );
    }
}