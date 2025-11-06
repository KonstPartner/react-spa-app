import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartState } from './types';

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ id: number; qty?: number }>) {
      const { id, qty = 1 } = action.payload;
      const existing = state.items[id];
      if (existing) {
        existing.qty += qty;
      } else {
        state.items[id] = { id, qty };
      }
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      delete state.items[action.payload.id];
    },
    setQuantity(state, action: PayloadAction<{ id: number; qty: number }>) {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        delete state.items[id];
      } else {
        const existing = state.items[id];
        state.items[id] = { id, qty: existing ? qty : qty };
      }
    },
    clearCart(state) {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, setQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
