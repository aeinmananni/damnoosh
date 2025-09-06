import { useChangeLanguage } from '../../hooks/useChangeLanguage';

export default function LandingPage() {
  const { t, i18n } = useChangeLanguage();
  return (
    <div className="p-4 bg-green-200/50 backdrop-filter backdrop-blur-md ">
      <h1 className="text-2xl font-bold">{t('welcome')}</h1>
      <div className="mt-4 flex gap-2">
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('de')}>DE</button>
        <button onClick={() => i18n.changeLanguage('ar')}>AR</button>
      </div>
    </div>
  );
}
