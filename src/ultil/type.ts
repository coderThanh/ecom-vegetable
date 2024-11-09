export type MenuItem = {
  url?: string
  text: string
  chilren?: MenuItem[]
}

export type Product = {
  id: string | number
  title: string
  rating?: number
  price?: number
  priceSale?: number | null
  shortDescription?: string
}

export type Blog = {
  id: string | number
  title: string
  shortDescription?: string
  createdAt: string
}

export type ImageEntiy = {
  src: string
  alt?: string
  title?: string
}
