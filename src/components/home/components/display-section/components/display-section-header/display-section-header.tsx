import { SAButton } from '../../../../../custom';
import { useChangeLanguage } from '../../../../../../hooks/useChangeLanguage';
import { SAArrowIcon } from '../../../../../../icons';
export default function DisplaySectionHeader() {
  const { t, i18n } = useChangeLanguage();
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xs sm:text-sm  md:text-lg font-semibold">{t('completed-projects')}</h1>
      <SAButton className="border border-primary text-primary btn-outline flex items-center gap-2">
        {t('View-All')}
        <SAArrowIcon
          className={`${i18n.language !== 'ar' && 'rotate-180'} group-hover:translate-x-2 `}
        />
      </SAButton>
    </div>
  );
}
