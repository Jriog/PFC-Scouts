import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      whos: 'Quienes Somos',
      sections: 'Secciones',
      w_scout: 'Mundo Scout',
      join: 'Apúntante',
      store: 'Tienda',
    },
  },
  gl: {
    translation: {
        whos: 'Quenes Somos',
        sections: 'Secciones',
        w_scout: 'Mundo Scout',
        join: 'Apúntante',
        store: 'Tienda',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'gl',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;