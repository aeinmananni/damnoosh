import { SAButton, SAImage, SAInput, SATextarea } from "../../../custom";
import { MdEmail } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { TiPhoneOutline } from "react-icons/ti";
import chatImage from "../../../../images/chat_17302780.png";
import { useChangeLanguage } from "../../../../hooks/useChangeLanguage";
const iconClassName = "!text-yellow-300";
const labelClassName = "!text-yellow-400";
const parentClassName = "col-span-1 lg:col-span-2";
const className = "!text-sm";
export default function Form() {
  const { t } = useChangeLanguage();
  return (
    <form className="lg:w-1/2 w-full h-full   p-3 flex flex-col justify-between items-center shadow-lg neon-border shrink-0 col-span-4">
      <div className="w-full flex justify-between items-center">
        <SAImage src={chatImage} className="w-16 h-16 md:w-20 md:h-20" />
        <span className=" text-xs md:text-lg w-3/4">{`${t("message")}`}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full h-full  justify-center items-center">
        <SAInput
          styles={{ iconClassName, labelClassName }}
          label={t("firstName")}
          placeholder={t("placeholder-firstName")}
          icon={MdPersonOutline}
          className={className}
        />
        <SAInput
          styles={{ iconClassName, labelClassName }}
          label={t("lastName")}
          placeholder={t("placeholder-lastName")}
          icon={HiOutlineIdentification}
          className={className}
        />

        <SAInput
          styles={{ iconClassName, labelClassName }}
          label={t("email")}
          placeholder={t("placeholder-phone")}
          icon={MdEmail}
          className={className}
        />
        <SAInput
          styles={{ iconClassName, labelClassName }}
          type="number"
          label={t("phone")}
          placeholder={t("placeholder-email")}
          icon={TiPhoneOutline}
          className={className}
        />
        <SATextarea
          label={t("description")}
          rows={6}
          placeholder={t("placeholder-description")}
          styles={{ labelClassName, parentClassName }}
        />
        <SAButton
          type="submit"
          className="w-1/2 btn-outline border-warning text-warning"
        >
          Submit
        </SAButton>
      </div>
    </form>
  );
}
