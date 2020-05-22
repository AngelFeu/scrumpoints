import axios from 'axios';

export default axios.create({
    baseURL: `https://9f554089.ngrok.io/api/`
    //baseURL: `http://localhost:4000/api/`
});