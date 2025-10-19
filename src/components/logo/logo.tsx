import { SAImage } from '../custom';
import logo from '../../images/result.png';
type Styles = {
  imageClassName?: string;
  textClassName?: string;
};

type LogoProps = {
  styles?: Styles;
  className?: string;
};

export default function Logo({ styles, className }: LogoProps) {
  return (
    <div
      className={`flex-col gap-1 items-center justify-center hidden md:flex ${className}`}
    >
      <SAImage
        style={{ backgroundImage: `url(${logo})` }}
        className={`h-16 w-16 ${styles?.imageClassName}`}
      />
      <span className={`font-bold text-primary ${styles?.textClassName}`}>
        SAMASANG
      </span>
    </div>
  );
}
