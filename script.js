document.getElementById('fetchAccounts').addEventListener('click', fetchAccounts);
document.getElementById('blockIpForm').addEventListener('submit', blockIp);

async function fetchAccounts() {
    try {
        const response = await fetch('https://apidemo.##DOMAIN##.com/fetchAccounts', {
            method: 'GET', mode: 'cors'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        populateAccountsDropdown(data);
    } catch (error) {
        console.error('Error fetching accounts:', error);
    }
}

function populateAccountsDropdown(accounts) {
    const accountSelect = document.getElementById('accountSelect');
    accountSelect.innerHTML = '<option value="" disabled selected>Select Account</option>';
    accounts.forEach(account => {
        const option = document.createElement('option');
        option.value = account.id;
        option.textContent = account.name;
        accountSelect.appendChild(option);
    });
}

async function blockIp(event) {
    event.preventDefault();
    const ipAddress = document.getElementById('ipAddress').value;
    const accountId = document.getElementById('accountSelect').value;
    const ruleName = document.getElementById('ruleName').value;
    try {
        const response = await fetch('https://apidemo.##DOMAIN##.com/blockIp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ip: ipAddress, accountId: accountId, ruleName: ruleName })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        alert('IP blocked successfully');
    } catch (error) {
        console.error('Error blocking IP:', error);
    }
}