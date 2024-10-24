export async function onRequest(context) {
    const request = context.request;

    const { ip, accountId, ruleName } = await request.json();
    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/gateway/rules`;
    const apiToken = context.env.CLOUDFLARE_API_TOKEN;
    const apiEmail = context.env.CLOUDFLARE_API_EMAIL;

    const payload = {
        "name": ruleName,
        "description": "Created via nourAPI Script 2 ",
        "enabled": false,
        "action": "block",
        "filters": [
        "l4"
        ],
        "traffic": "net.dst.ip ==" + ip,
        "version": 1,
        "rule_settings": {
        "block_page_enabled": false,
        "block_reason": "",
        }
        }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiToken}`,
            'X-Auth-Email': `${apiEmail}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
        })

    const result = await response.json();

    return new Response(JSON.stringify(result), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}