// proxy: "https://ttlogin.azurewebsites.net",
// mode: 'cors',
// ReferrerPolicy: 'unsafe-url',
const key = process.env.REACT_APP_KEY;

const headers = {
    Accept: 'application/json',
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Ocp-Apim-Subscription-Key': key,
};

export async function login(accountNumber, bankNumber, password) {
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            "account_id": accountNumber,
            "bank_number": bankNumber,
            "password": password
        })
    };
    const response = await fetch('https://apim-team2.azure-api.net/v1/login', request);
    console.log('response.status', response.status);
    if (response.status === 422) {
        return 422;
    } else if (response.status === 200) {
        const json = await response.json();
        return json.jwt;
    } else {
        return null;
    }
}

export async function register(accountNumber, bankNumber, password) {
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            "account_id": accountNumber,
            "bank_number": bankNumber,
            "password": password
        })
    };

    const response = await fetch('https://apim-team2.azure-api.net/v1/register', request);
    console.log('response.status', response.status);
    if (response.status !== 200) {
        return "משתמש קיים";
    } else {
        return "הרשמה הצליחה עבור להתחברות";
    }
}

export async function balance(accountNumber, bankNumber) {
    const request = {
        method: 'GET',
        headers,
    };

    const response = await fetch(`https://apim-team2.azure-api.net/ca/ca/balances/bank/${bankNumber}/account/${accountNumber}`
        , request);
    console.log('response.status', response.status);
    if (response.status !== 200) {
        console.log(`error status is ${response.status}`);
        return []
    } else {
        const json = await response.json();
        console.log('balance', json)
        return json.expenses;
    }
}

export async function getLoans(accountNumber, bankNumber) {
    const request = {
        method: 'GET',
        headers,
    };

    const response = await fetch(`https://apim-team2.azure-api.net/ca/ca/loans/bank/${bankNumber}/account/${accountNumber}`
        , request);
    console.log('response.status', response.status);
    if (response.status !== 200) {
        console.log(`error status is ${response.status}`);
        return null;
    } else {
        const json = await response.json();
        return [json];
    }
}

export async function getAdviceWithoutTarget(accountNumber, bankNumber) {
    const request = {
        method: 'GET',
        headers,
    };

    const response = await fetch(`https://apim-team2.azure-api.net/analyze/analyzer/v1/advice`
        , request);
    console.log('response.status', response.status);
    if (response.status !== 200) {
        console.log(`error status is ${response.status}`);
        return null;
    } else {
        return await response.text();
    }
}

export async function getAdviceWithTarget(name, date) {
    const request = {
        method: 'GET',
        headers,
    };

    const response = await fetch(`https://apim-team2.azure-api.net/analyze/analyzer/v1/target/${name}/${date}`
        , request);
    console.log('response.status', response.status);
    if (response.status !== 200) {
        console.log(`error status is ${response.status}`);
        return null;
    } else {
        return await response.text();
    }
}
