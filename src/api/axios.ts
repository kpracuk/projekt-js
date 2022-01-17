import axios from "axios";

export default axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  },
  baseURL: import.meta.env.VITE_BASE_URL as string || 'http://localhost:8000',
  withCredentials: true
})