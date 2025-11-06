export type CartItem = {
  id: number;
  qty: number;
  title: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  thumbnail: string;
};

export type CartState = {
  items: Record<number, CartItem>;
};
