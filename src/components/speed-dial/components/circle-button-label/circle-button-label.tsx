import { SAImage } from "../../../custom";

type CircleButtonLabelProps = {
  icon: string;
  onClick?: () => void;
};

export default function CircleButtonLabel({
  icon,
  onClick,
}: CircleButtonLabelProps) {
  return (
    <SAImage
      onClick={onClick}
      style={{ backgroundImage: `url(${icon})` }}
      className="h-12 w-12 cursor-pointer"
    />
  );
}
