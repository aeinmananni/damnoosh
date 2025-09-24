import { SAHeader } from '../../components';
import { useChangeLanguage } from '../../hooks/useChangeLanguage';

export default function LandingPage() {
  const { i18n } = useChangeLanguage();
  return (
    <div className="flex flex-col w-full h-full p-7">
      <SAHeader />
      <button onClick={() => i18n.changeLanguage('ar')}>ar</button>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  );
}
