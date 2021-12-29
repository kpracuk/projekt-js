import axios from "../axios"

export function csrf () {
  return axios.get('/sanctum/csrf-cookie')
}