# ZT-API-Demo
Deployed with Wrangler: https://developers.cloudflare.com/workers/get-started/guide/

UI Interface:
Fetch Account IDs (First API call)
Create GW rule (Rule Name + IP address to block + Select Account ID (fetched in step 1)

![image](https://github.com/user-attachments/assets/834e44fb-2899-41b6-9a77-e643068dbea6)
![image](https://github.com/user-attachments/assets/31b06e5f-3905-494c-bf27-17b1efc943d0)
![image](https://github.com/user-attachments/assets/d201763b-13c4-438f-9950-15166e23e741)




1. Within script.js change the domain name to your own domain
2. Add to your Pages App build the environment variables
3. wrangler.toml → Account ID: 
      account_id = "##ACCOUNT_ID##"
      blockIp.js → create ENV variables for your API token and API email
      const apiToken = context.env.CLOUDFLARE_API_TOKEN;
      const apiEmail = context.env.CLOUDFLARE_API_EMAIL

      fetchAccounts.js → use ENV variables for your API token and API email, created in step 2
      const apiToken = context.env.CLOUDFLARE_API_TOKEN;

      const apiEmail = context.env.CLOUDFLARE_API_EMAIL

