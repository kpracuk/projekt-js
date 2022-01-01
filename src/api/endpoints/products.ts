import axios from "../axios"
import { AxiosResponse } from "axios";
import { Product } from "../interfaces/products";

export function getProducts (): Promise<AxiosResponse<Product[]>> {
  return axios.get('/api/products')
}
