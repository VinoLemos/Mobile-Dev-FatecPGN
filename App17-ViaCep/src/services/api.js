import axios from "axios";

export const api = axios.create({
    baseUrl: 'https://viacep.com.br/ws'
});