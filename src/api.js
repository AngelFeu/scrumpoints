import axios from 'axios';

export default axios.create({
    baseURL: `https://b2249214f3b7.ngrok.io/api/`
    //baseURL: `http://localhost:4000/api/`
});