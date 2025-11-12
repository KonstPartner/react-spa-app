import type { RootState } from '@app';
import { createSelector } from '@reduxjs/toolkit';

import { getFinalPrice } from '@utils';

export const selectCartItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => Object.values(items)
);

export const selectCartItemQty = (id: number) => (state: RootState) =>
  state.cart.items[id]?.qty ?? 0;

export const selectCartTotalCount = (state: RootState) =>
  Object.values(state.cart.items).reduce((acc, it) => acc + it.qty, 0);

export const selectCartSubtotal = (state: RootState) =>
  Object.values(state.cart.items).reduce((sum, item) => {
    const unit = getFinalPrice(item.price, item.discountPercentage);
    return sum + unit * item.qty;
  }, 0);
