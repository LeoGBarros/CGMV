export interface Seller {
  name: string;
  phone: string;
  email: string;
}

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  price: string;
  location: string;
  date: string;
  image: string;
  seller: Seller;
}
