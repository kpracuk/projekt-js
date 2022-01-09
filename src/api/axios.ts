import axios from "axios";

export default axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  },
  baseURL: import.meta.env.BASE_URL,
  withCredentials: true
})