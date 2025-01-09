import axios from "axios" 

export const api = axios.create({
  baseURL: "https://travelstour-api.onrender.com"
})