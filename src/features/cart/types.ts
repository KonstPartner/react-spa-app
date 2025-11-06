export type CartItem = {
  id: number;
  qty: number;
};

export type CartState = {
  items: Record<number, CartItem>;
};
