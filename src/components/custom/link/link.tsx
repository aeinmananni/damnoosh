import { NavLink, type NavLinkProps } from 'react-router';
import { useChangeLanguage } from '../../../hooks/useChangeLanguage';

type LinkProps = { children?: React.ReactNode; icon?: React.ReactNode } & NavLinkProps;

export default function Link({ children, icon, ...props }: LinkProps) {
  const { i18n } = useChangeLanguage();
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `transition-all duration-300 ${
          i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row-reverse'
        } flex items-center gap-2 hover:scale-110 hover:text-primary ${
          isActive ? 'text-primary' : 'text-slate-700'
        }`
      }
    >
      {children}
      {icon}
    </NavLink>
  );
}
