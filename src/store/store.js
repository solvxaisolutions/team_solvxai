import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contactSlice';
import themeReducer from './themeSlice';

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'] // only theme will be persisted
};

// Combine reducers first
const rootReducer = combineReducers({
  contact: contactReducer,
  theme: themeReducer
});

// Then persist the combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);