import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: 'es', // Idioma inicial
  fallbackLng: 'es', // Idioma de respaldo en caso de que no se encuentre una traducción
  interpolation: {
    escapeValue: false, // React ya se encarga de escapar los valores
  },
});

export default i18n;
