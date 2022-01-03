import axios from "../axios"
import { AxiosResponse } from "axios";
import { CreateOrderRequest, Order } from "../interfaces/orders";

export function getOrders (): Promise<AxiosResponse<Order[]>> {
  return axios.get('/api/orders')
}

export function createOrder (orderData: CreateOrderRequest): Promise<AxiosResponse<Order>> {
  return axios.post('/api/orders', orderData)
}
