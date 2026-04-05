export async function getGithubTokenFromAuth0(userId: string): Promise<string | null> {
  const domain = process.env.AUTH0_ISSUER_BASE_URL;

  if (!domain || !process.env.AUTH0_M2M_CLIENT_ID || !process.env.AUTH0_M2M_CLIENT_SECRET) {
    console.error("Auth0 Management API credentials are not set in .env");
    return null;
  }


  const tokenRes = await fetch(`${domain}oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.AUTH0_M2M_CLIENT_ID,
      client_secret: process.env.AUTH0_M2M_CLIENT_SECRET,
      audience: `${domain}api/v2/`,
      grant_type: 'client_credentials'
    })
  });

  if (!tokenRes.ok) {
    console.error("Failed to fetch Auth0 M2M token", await tokenRes.text());
    return null;
  }

  const { access_token } = await tokenRes.json();


  const urlUserId = encodeURIComponent(userId);
  const userRes = await fetch(`${domain}api/v2/users/${urlUserId}`, {
    headers: { 'Authorization': `Bearer ${access_token}` }
  });

  if (!userRes.ok) {
    console.error("Failed to fetch user from Auth0 Management API", await userRes.text());
    return null;
  }

  const userData = await userRes.json();
  const githubIdentity = userData.identities?.find((id: any) => id.provider === 'github');

  return githubIdentity?.access_token || null;
}
