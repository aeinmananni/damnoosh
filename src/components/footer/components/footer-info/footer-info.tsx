import { useChangeLanguage } from "../../../../hooks/useChangeLanguage";
import logo from "../../../../images/result.png";
import { SAButton } from "../../../custom";
import premiumImage from "../../../../images/premium_5526726.png";
import { SAContactInformation, SAInfoWithIcon } from "./components";
export default function FooterInfo() {
  const { t } = useChangeLanguage();
  return (
    <div
      style={{ backgroundImage: `url(${logo})` }}
      className=" bg-cover bg-center w-full h-full flex flex-col before:rounded-lg relative before:bg-slate-800/70 before:w-full before:h-full before:absolute"
    >
      <div className="flex w-full h-full rounded-lg z-10 flex-col justify-evenly p-3 items-center">
        <h1 className=" text-3xl font-bold text-primary">SAMASANG STOR</h1>
        <SAContactInformation />
        <p className="font-bold hidden md:flex">{t("Slogan")}</p>
        <div className="w-full flex gap-3">
          <SAInfoWithIcon
            text={t("Motivational-description")}
            image={premiumImage}
          />

          <SAButton className="border border-yellow-400 text-yellow-400 btn-outline flex items-center gap-2 w-1/3">
            {t("Create-Membership")}
          </SAButton>
        </div>
        <span className="text-yellow-400 font-semibold">{t("Copyright")}</span>
      </div>
    </div>
  );
}
