import axios from "../axios"

// /auth/register
export interface RegisterUserData {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}
export function register (userData: RegisterUserData) {
  return axios.post('/auth/register', userData)
}

// /auth/login
export interface LoginUserData {
  email: string,
  password: string
}
export function login (userData: LoginUserData) {
  return axios.post('/auth/login', userData)
}
