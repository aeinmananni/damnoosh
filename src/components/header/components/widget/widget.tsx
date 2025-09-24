import { useChangeLanguage } from '../../../../hooks/useChangeLanguage';
import { SALoginIcon, SAMagnifyingIcon, SAShoppingIcon } from '../../../../icons';
import { SAButton, SAInput } from '../../../custom';

const buttonClassName = 'btn-outline btn-primary';
export default function Widget() {
  const { t, i18n } = useChangeLanguage();
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center w-1/3">
        <SAInput icon={SAMagnifyingIcon} placeholder="Stone Search..." className="bg-neutral" />
      </div>
      <div className="flex items-center gap-3">
        <SAButton icon={SAShoppingIcon} className={buttonClassName} />
        <SAButton icon={SALoginIcon} className={buttonClassName} isRotate={i18n.language !== 'ar'}>
          {t('loginBtn')}
        </SAButton>
      </div>
    </div>
  );
}
