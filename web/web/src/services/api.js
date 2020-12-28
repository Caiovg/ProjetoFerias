import axios from 'axios';

/**Criando a conexão com a nossa api*/
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;