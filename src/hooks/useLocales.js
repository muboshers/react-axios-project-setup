import { useTranslation } from 'react-i18next';

export default function useLocales() {
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    t,
  };
}
