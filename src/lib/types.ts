export interface Item {
  name: string
  code: string
  image: string
  rarity: string
}

export interface Case {
  id: number
  name: string
  image: string
  price: number
  items: Item[]
}
