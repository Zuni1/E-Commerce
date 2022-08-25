import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import {store, persistor} from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
.use(LanguageDetector)
.use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    
     supportedLngs: ['en', 'fr', 'ar'],
    detection: {
    order:  ['htmlTag', 'cookie', 'localStorage','path', 'subdomain'],
    caches: ['cookie'],

    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false},

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
