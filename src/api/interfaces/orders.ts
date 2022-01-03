import { User } from "./auth";
import { Product } from "./products";

export interface Order {
  [key: string]: string | number | User | Product
  id: number
  name: string,
  price_at_buy: number,
  quantity: number
  status: string,
  user_id: number,
  product_id: number,
  user: User,
  product: Product,
  created_at: string,
  updated_at: string
}

export interface CreateOrderRequest {
  product_id: number,
  quantity: number
}

export interface UpdateOrderRequest {
  id: number,
  status: string
}