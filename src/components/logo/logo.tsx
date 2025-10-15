import { SAImage } from '../custom';
import logo from '../../images/result.png';
type Styles = {
  imageClassName?: string;
  textClassName?: string;
};

type LogoProps = {
  styles?: Styles;
};

export default function Logo({ styles }: LogoProps) {
  return (
    <div className=" flex-col gap-1 items-center justify-center hidden md:flex">
      <SAImage
        style={{ backgroundImage: `url(${logo})` }}
        className={`h-16 w-16 ${styles?.imageClassName}`}
      />
      <span className={`font-bold text-primary ${styles?.textClassName}`}>SAMASANG</span>
    </div>
  );
}
