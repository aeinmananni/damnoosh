import { SAImage } from "../../../../../custom";
import TextWithIcon from "../../../../../home/components/display-section/components/carts/components/cart/components/text-with-icon/text-with-icon";

type InfoWithIconProps = {
  text: string;
  image?: string;
};

export default function InfoWithIcon({ text, image }: InfoWithIconProps) {
  return (
    <TextWithIcon
      className="!flex-row !items-center !hidden lg:!flex"
      styles={{ textClassName: "!text-xs md:!text-sm" }}
      icon={
        <SAImage
          style={{ backgroundImage: `url(${image})` }}
          className="h-10 md:h-12 w-10 md:w-12"
        />
      }
      text={text}
    />
  );
}
