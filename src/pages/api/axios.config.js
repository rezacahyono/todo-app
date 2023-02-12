import axios from 'axios'

let API_URL = process.env.API_URL

const api = axios.create({
  baseURL: API_URL,
})

export default api

