import axios from 'axios';

const VUE_APP_API_BASE_URL = 'http://localhost:8080/api/'

const client = axios.create({
    baseURL: VUE_APP_API_BASE_URL
});


export async function getAllCustomers() {
    const response = await client.get('/customers');
    return response.data;
}

export async  function createCreditScore(creditScoreDetails) {
    const response = await client.post('/creditscore', creditScoreDetails);
    return response.data;
}