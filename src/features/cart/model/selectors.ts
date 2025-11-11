import type { RootState } from '@app';

import { getFinalPrice } from '@utils';

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.items);

export const selectCartItemQty = (id: number) => (state: RootState) =>
  state.cart.items[id]?.qty ?? 0;

export const selectCartTotalCount = (state: RootState) =>
  Object.values(state.cart.items).reduce((acc, it) => acc + it.qty, 0);

export const selectCartSubtotal = (state: RootState) =>
  Object.values(state.cart.items).reduce((sum, it) => {
    const unit = getFinalPrice(it.price, it.discountPercentage);
    return sum + unit * it.qty;
  }, 0);
