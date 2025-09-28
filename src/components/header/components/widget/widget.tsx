import { useChangeLanguage } from '../../../../hooks/useChangeLanguage';
import { SALoginIcon, SAMagnifyingIcon, SAShoppingIcon, SAMenuIcon } from '../../../../icons';
import { SAButton, SAInput } from '../../../custom';

const buttonClassName = 'btn-outline btn-primary';
export default function Widget() {
  const { t, i18n } = useChangeLanguage();
  return (
    <div className="w-full flex flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between items-center">
      <div className="flex items-center w-full md:w-1/3">
        <SAInput icon={SAMagnifyingIcon} placeholder={`${t('Search')}...`} className="bg-neutral" />
      </div>
      <div className="flex justify-between md:justify-start items-center w-full md:w-1/2">
        <SAButton icon={SAMenuIcon} className="flex md:hidden" />
        <div className="flex items-center justify-end  gap-3  w-full">
          <SAButton icon={SAShoppingIcon} className={buttonClassName} />
          <SAButton
            icon={SALoginIcon}
            className={buttonClassName}
            isRotate={i18n.language !== 'ar'}
          >
            <span className="hidden md:flex">{t('loginBtn')}</span>
          </SAButton>
        </div>
      </div>
    </div>
  );
}
