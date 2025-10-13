import { SAButton } from '../../../custom';
import { useChangeLanguage } from '../../../../hooks/useChangeLanguage';

type CartProps = {
  image?: string;
  text: string;
};

export default function Cart({ image, text }: CartProps) {
  const { i18n, t } = useChangeLanguage();
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`relative before:w-full before:h-full before:bg-gradient-to-r ${
        i18n.language === 'ar' ? 'before:from-slate-800/70' : 'before:from-slate-800/10'
      }  before:via-slate-800/50  ${
        i18n.language === 'ar' ? 'before:to-slate-800/10' : 'before:to-slate-800/70'
      }  before:absolute  w-full h-full rounded-lg bg-cover bg-center shadow-lg flex flex-col items-end justify-end`}
    >
      <div className="z-10 flex flex-col gap-3 p-5">
        <span className="text-lg font-mono">{t(text)}</span>
        <SAButton className="border !btn-md bg-transparent border-slate-100 hover:scale-110 text-slate-100">
          {t('viewBuyButton')}
        </SAButton>
      </div>
    </div>
  );
}
