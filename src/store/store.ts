import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter';

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
