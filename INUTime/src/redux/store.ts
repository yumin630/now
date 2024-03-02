import { configureStore } from '@reduxjs/toolkit';

import user from './store/user';

export const store = configureStore({
  reducer: { user },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
