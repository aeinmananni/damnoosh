import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { SATextWithIcon } from './components';
import { BiDetail } from 'react-icons/bi';
import medal from '../../../../../../../../images/medal_432250.png';
import { SAImage, SAButton } from '../../../../../../../custom';
import { useChangeLanguage } from '../../../../../../../../hooks/useChangeLanguage';
type CartProps = {
  image: string;
  stoneType: string;
  projectName: string;
  location: string;
  description: string;
};

export default function Cart({ image, projectName, location, description, stoneType }: CartProps) {
  const { t } = useChangeLanguage();
  return (
    <div className="flex flex-col w-1/2 md:w-1/3 xl:w-full xl:shrink shrink-0 h-full border border-yellow-500 rounded-md p-3 gap-4">
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm md:text-[16px]">{stoneType}</span>
        <SAImage className="h-10 w-10" style={{ backgroundImage: `url(${medal})` }} />
      </div>
      <SAImage className="w-full h-full rounded-lg" style={{ backgroundImage: `url(${image})` }} />
      <div className="flex flex-col justify-center sm:justify-between  gap-1 w-full h-full  sm:h-2/3">
        <SATextWithIcon text={projectName} icon={<FaBuilding />} />
        <SATextWithIcon text={location} icon={<FaMapMarkerAlt />} />
        <SATextWithIcon text={description} icon={<BiDetail />} />
      </div>
      <SAButton className="border border-yellow-500 text-yellow-500 btn-outline flex items-center gap-2">
        {t('See-More')}
      </SAButton>
    </div>
  );
}
