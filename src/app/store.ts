import { configureStore } from '@reduxjs/toolkit';

import { dummyApi } from '@/services/dummyApi';
import cartReducer from '@/features/cart/slice';

export const store = configureStore({
  reducer: {
    [dummyApi.reducerPath]: dummyApi.reducer,
     cart: cartReducer,
  },
  middleware: (getDefault) => getDefault().concat(dummyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
