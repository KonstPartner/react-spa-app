import type { RootState } from '@/app/store';

export const selectCartItems = (s: RootState) => s.cart.items;
export const selectCartItemQty = (id: number) => (s: RootState) =>
  s.cart.items[id]?.qty ?? 0;

export const selectCartTotalCount = (s: RootState) =>
  Object.values(s.cart.items).reduce((acc, it) => acc + it.qty, 0);
