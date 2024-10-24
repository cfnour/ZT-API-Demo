export async function onRequest(context) {
    const url = 'https://api.cloudflare.com/client/v4/accounts';
    const apiToken = context.env.CLOUDFLARE_API_TOKEN;
    const apiEmail = context.env.CLOUDFLARE_API_EMAIL;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'X-Auth-Email': `${apiEmail}`,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    return new Response(JSON.stringify(data.result), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}