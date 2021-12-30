import axios from "../axios"

// /auth/register
export interface RegisterUserRequest {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}
export function register (userData: RegisterUserRequest) {
  return axios.post('/auth/register', userData)
}

// /auth/login
export interface LoginUserRequest {
  email: string,
  password: string
}
export function login (userData: LoginUserRequest) {
  return axios.post('/auth/login', userData)
}

// /auth/user
export function getUser () {
  return axios.get('/auth/user')
}

// /auth/logout
export function logout () {
  return axios.post('/auth/logout')
}
