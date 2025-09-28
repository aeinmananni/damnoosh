import { SAHeader, SALine } from '../../components';
import { useChangeLanguage } from '../../hooks/useChangeLanguage';
import { Outlet } from 'react-router';

export default function LandingPage() {
  const { i18n } = useChangeLanguage();
  return (
    <div className="flex flex-col gap-4 items-center w-full lg:w-5/6 h-screen   overflow-hidden">
      <SAHeader />
      <SALine />
      <Outlet />
      <div className="w-full flex h-full gap-4">
        <button onClick={() => i18n.changeLanguage('ar')}>ar</button>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
    </div>
  );
}
