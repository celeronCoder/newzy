import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2',
    timeout: 1000,
    headers: { 'Authorization': process.env.NEWS_API_KEY }
});


export default instance;
