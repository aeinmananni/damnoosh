import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { SupportedLang } from '../models';

export const useChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language as SupportedLang;
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [i18n.language, language]);

  return { t, language, i18n };
};
