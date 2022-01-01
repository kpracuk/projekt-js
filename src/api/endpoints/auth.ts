import axios from "../axios"
import { AxiosResponse } from "axios";
import { User, LoginUserRequest, RegisterUserRequest, LoginUserResponse, ProfileInformation, UserPasswordUpdate } from "../interfaces/auth";

export function getCsrfToken (): Promise<AxiosResponse<''>> {
  return axios.get('/auth/csrf-cookie')
}

export function getUser (): Promise<AxiosResponse<User>> {
  return axios.get('/auth/user')
}

export function loginUser (userData: LoginUserRequest): Promise<AxiosResponse<LoginUserResponse>> {
  return axios.post('/auth/login', userData)
}

export function registerUser (userData: RegisterUserRequest): Promise<AxiosResponse<''>> {
  return axios.post('/auth/register', userData)
}

export function logoutUser (): Promise<AxiosResponse<''>> {
  return axios.post('/auth/logout')
}

export function updateUserProfileInformation (profileInformation: ProfileInformation): Promise<AxiosResponse<''>> {
  return axios.put('/auth/user/profile-information', profileInformation)
}

export function updateUserPassword (userPasswordUpdate: UserPasswordUpdate): Promise<AxiosResponse<''>> {
  return axios.put('/auth/user/password', userPasswordUpdate)
}
