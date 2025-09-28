import { LINK_ITEMS } from '../../../../data';
import Link from '../../../custom/link/link';
import { useChangeLanguage } from '../../../../hooks/useChangeLanguage';
export default function Navbar() {
  const { t } = useChangeLanguage();
  return (
    <nav className="md:flex items-center gap-10  font-semibold hidden ">
      {LINK_ITEMS.map(it => (
        <Link key={it.id} to={it.link} icon={it.icon}>
          {t(it.label)}
        </Link>
      ))}
    </nav>
  );
}
