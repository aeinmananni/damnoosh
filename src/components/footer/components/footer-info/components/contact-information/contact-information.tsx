import phone from "../../../../../../images/telephone_4982273.png";
import location from "../../../../../../images/location_9795702.png";
import whatsup from "../../../../../../images/whatsapp_1400855.png";
import { useChangeLanguage } from "../../../../../../hooks/useChangeLanguage";
import { SAInfoWithIcon } from "../info-with-icon";
export default function ContactInformation() {
  const { t } = useChangeLanguage();
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <h1 className="col-span-2 text-yellow-500 text-xl">
        {t("Contact-Information")}
      </h1>
      <SAInfoWithIcon text="+49 30 12345678" image={phone} />
      <SAInfoWithIcon text={t("WhatsApp-Link")} image={whatsup} />
      <SAInfoWithIcon
        text={t(" SAMASANG - Testallee 22, 20095 Hamburg, German")}
        image={location}
      />
    </div>
  );
}
