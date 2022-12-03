import axios from 'axios';

const api = axios.create({
    baseURL: 'https://contatosapi.azurewebsites.net/'
});

export default api;