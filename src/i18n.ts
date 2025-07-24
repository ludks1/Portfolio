import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en',
    detection: {
      // Desactivar la detección automática del idioma del navegador
      order: [],
      caches: []
    },
    interpolation: {
      escapeValue: false
    }
  });

// Forzar inglés como idioma por defecto en cada carga de página
i18n.changeLanguage('en');

export default i18n;