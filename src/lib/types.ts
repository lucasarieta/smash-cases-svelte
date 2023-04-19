export interface Case {
  id: number;
  name: string;
  image: string;
  price: number;
  items: Items[]
}

export interface Items {
  code: string;
  image: string;
  rarity: string;
}