export interface Product {
  [key: string]: string | number
  id: number
  name: string,
  description: string,
  price: number,
  quantity: number
  created_at: string,
  updated_at: string
}