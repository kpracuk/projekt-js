import axios from "axios";

export default axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json'
  },
  baseURL: 'http://php.test',
  withCredentials: true
})