import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    theme: themeReducer,
  },
});