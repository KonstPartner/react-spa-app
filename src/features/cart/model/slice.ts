import type { CartItem, CartState } from '@features/cart/model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const STORAGE_KEY = 'cart';

const loadCart = (): CartState => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    return { items: {} };
  }

  return { items: {} };
};

const saveCart = (state: CartState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
};

const initialState: CartState = loadCart();

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
      saveCart(state);
    },
    removeItem(state, action: PayloadAction<{ id: number }>) {
      delete state.items[action.payload.id];
      saveCart(state);
    },
    setQuantity(state, action: PayloadAction<{ id: number; qty: number }>) {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        delete state.items[id];
      } else if (state.items[id]) {
        state.items[id]!.qty = qty;
      }
      saveCart(state);
    },
    clearCart(state) {
      state.items = {};
      saveCart(state);
    },
  },
});

export const { addItem, removeItem, setQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
