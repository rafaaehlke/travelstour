import axios from "axios" 

export const api = axios.create({
  baseURL: "https://travelstour-api-pu1r.onrender.com"
})