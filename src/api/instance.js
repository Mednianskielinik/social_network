import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'fd6843b5-fad3-4f69-9887-1594143a9a66'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});