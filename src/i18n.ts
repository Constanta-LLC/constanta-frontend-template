import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json';

const defaultLang = 'en';

const extendRule = (attribute: string) => attribute;

const i18n = createI18n({
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

if (import.meta.hot) {
  import.meta.hot.on('locales-update', () => {
    // Перезапуск App, если locales обновлены в hot-mode.
    import.meta.hot?.invalidate();
  });
}

export default i18n;
