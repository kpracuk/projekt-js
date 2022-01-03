import axios from "../axios"
import { AxiosResponse } from "axios";
import { CreateOrderRequest, UpdateOrderRequest, Order } from "../interfaces/orders";

export function getOrders (): Promise<AxiosResponse<Order[]>> {
  return axios.get('/api/orders')
}

export function createOrder (orderData: CreateOrderRequest): Promise<AxiosResponse<Order>> {
  return axios.post('/api/orders', orderData)
}

export function updateOrder (orderData: UpdateOrderRequest): Promise<AxiosResponse<Order>> {
  return axios.put('/api/orders/' + orderData.id, orderData)
}
