import { configureStore } from '@reduxjs/toolkit';

import { dummyApi } from '@/services/dummyApi';

export const store = configureStore({
  reducer: {
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(dummyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
