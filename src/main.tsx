import './index.css'
import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import AppDataLoader from './utils/appDataLoader.tsx'

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppDataLoader>
        <App />
      </AppDataLoader>  
    </Provider>
  </React.StrictMode>,
);
