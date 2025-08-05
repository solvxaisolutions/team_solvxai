import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Add this import
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);