import axios from  "axios";

//BASE: https://sujeitoprogramador.com/
//  ROTA => r-api/?api=filmes

const api = axios.create({
baseURL:'https://sujeitoprogramador.com/'

});

export default api;



