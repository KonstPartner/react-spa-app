import type { RootState } from '@/app';
import { getFinalPrice } from '@/utils';

export const selectCartMap = (s: RootState) => s.cart.items;

export const selectCartItems = (s: RootState) => Object.values(s.cart.items);

export const selectCartItemQty = (id: number) => (s: RootState) =>
  s.cart.items[id]?.qty ?? 0;

export const selectCartTotalCount = (s: RootState) =>
  Object.values(s.cart.items).reduce((acc, it) => acc + it.qty, 0);

export const selectCartSubtotal = (s: RootState) =>
  Object.values(s.cart.items).reduce((sum, it) => {
    const unit = getFinalPrice(it.price, it.discountPercentage);
    return sum + unit * it.qty;
  }, 0);
