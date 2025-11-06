import type { CartItem, CartState } from '@features/cart/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = { items: {} };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(
      state,
      action: PayloadAction<Omit<CartItem, 'qty'> & { qty?: number }>
    ) {
      const { id, qty = 1, ...rest } = action.payload;
      const existing = state.items[id];
      if (existing) {
        existing.qty += qty;
      } else {
        state.items[id] = { id, qty, ...rest };
      }
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      delete state.items[action.payload.id];
    },
    setQuantity(state, action: PayloadAction<{ id: number; qty: number }>) {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        delete state.items[id];
      } else if (state.items[id]) {
        state.items[id]!.qty = qty;
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
