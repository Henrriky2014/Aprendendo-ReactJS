import axios from "axios";

export const api = axios.create({
    baseURL: "https://back-end-do-explorer-da-rocketseat-1.onrender.com"
});