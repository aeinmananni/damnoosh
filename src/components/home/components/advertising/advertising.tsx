import { SAButton } from '../../../custom';
import { useChangeLanguage } from '../../../../hooks/useChangeLanguage';

export default function Advertising() {
  const { t } = useChangeLanguage();
  const parts = t('Message').split('SAMASANG');
  return (
    <div className="w-full  h-full flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-3">
        <p className="text-lg  w-full">
          {parts[0]}
          <span className="text-blue-600 font-bold">SAMASANG</span>
          {parts[1]}
        </p>
        <span className="font-semibold text-sm">{t('Exp')}</span>
      </div>
      <div className="flex items-center justify-around gap-3 p-2">
        <SAButton className="btn-primary">{t('JoinCustomerButton')}</SAButton>
        <SAButton className="!btn-outline !btn-primary">{t('SpecialProduct')}</SAButton>
      </div>
    </div>
  );
}
