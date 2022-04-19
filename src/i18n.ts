import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json';

const defaultLang = 'en';

const extendRule = (attribute: string) => attribute;

export default createI18n({
  fallbackLocale: defaultLang,
  globalInjection: true,
  pluralRules: {
    en: extendRule
  },
  locale: defaultLang,
  messages: {
    en
  }
});
