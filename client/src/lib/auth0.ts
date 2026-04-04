import { Auth0Client } from '@auth0/nextjs-auth0/server';

const issuerUrl = process.env.AUTH0_ISSUER_BASE_URL || '';
const domain = issuerUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

export const auth0 = new Auth0Client({
    appBaseUrl: process.env.AUTH0_BASE_URL,
    domain: domain,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: process.env.AUTH0_SECRET,

    routes: {
        callback: '/callback',
        login: '/login',
        logout: '/logout'
    }
});
