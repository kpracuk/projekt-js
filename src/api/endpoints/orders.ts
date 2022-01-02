import axios from "../axios"
import { AxiosResponse } from "axios";
import { Order } from "../interfaces/orders";

export function getOrders (): Promise<AxiosResponse<Order[]>> {
  return axios.get('/api/orders')
}
