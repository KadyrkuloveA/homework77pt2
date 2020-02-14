import axios from 'axios';
import {apiURL} from "./constans";

const axiosPosts = axios.create({
    baseURL: apiURL
});

export default axiosPosts;