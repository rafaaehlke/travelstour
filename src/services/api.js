import axios from "axios" 

export const api = axios.create({
  baseURL: "https://node-api-ya26.onrender.com"
})