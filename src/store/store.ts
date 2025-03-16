// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
