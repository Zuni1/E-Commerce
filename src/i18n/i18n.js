import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
.use(LanguageDetector)
.use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    
    supportedLngs: ['en', 'fr'],
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
