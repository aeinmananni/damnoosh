import { SAImage, SALine } from "../../../../../custom";
import type { ContactType } from "../../../../../../models";
import { useChangeLanguage } from "../../../../../../hooks/useChangeLanguage";

type ContactProps = { className?: string } & ContactType;

export default function Contact({
  image,
  text,
  info,
  className,
}: ContactProps) {
  const { t } = useChangeLanguage();
  return (
    <div
      className={`w-full  h-1/6 min-h-min neon-border-yellow flex  items-center p-2 justify-evenly ${className}`}
    >
      <SAImage
        style={{ backgroundImage: `url(${image})` }}
        className="h-14 w-14"
      />
      <div className="w-3/4 flex justify-between flex-col items-center gap-2 overflow-hidden">
        <span>{text}</span>
        <SALine />
        <span className=" flex text-sm  ">
          {text === "Address" ? t("address") : info}
        </span>
      </div>
    </div>
  );
}
