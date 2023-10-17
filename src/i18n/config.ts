import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationsBR from './pt-BR/translation.json';

const resources = {
  ptBr: {
    translation: translationsBR,
  },
};

i18n.use(initReactI18next).init({
  lng: 'ptBr',
  compatibilityJSON: 'v3',
  debug: true,
  resources,
  fallbackLng: 'ptBr',
});

export default i18n;
