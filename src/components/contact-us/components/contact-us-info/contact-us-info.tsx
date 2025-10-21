import { CONTACT_ITEMS } from "../../../../data";
import { SAButton, SALine } from "../../../custom";
import { SAInfoWithIcon } from "../../../footer/components/footer-info/components";
import { SAContact } from "./components";
import { useChangeLanguage } from "../../../../hooks/useChangeLanguage";
import premiumImage from "../../../../images/premium_5526726.png";
export default function ContectUsInfo() {
  const { t } = useChangeLanguage();
  return (
    <div className=" w-full lg:w-1/2 h-full min-h-max lg:min-h-0 neon-border p-4 flex flex-col  gap-8 shrink-0 overflow-y-auto">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 ">
        {CONTACT_ITEMS.map((contact) => (
          <SAContact
            key={contact.id}
            {...contact}
            className={`${contact.id === 5 && "xl:col-span-2"}`}
          />
        ))}
      </div>
      <div className="flex gap-3 md:justify-between flex-col h-full">
        <span className="text-sm md:text-xl text-shadow text-center">{`Where Innovation Meets Natural Strength — Creating Timeless Beauty from the Power of Stone.`}</span>
        <SALine />
        <div className="w-full flex gap-3">
          <SAInfoWithIcon
            text={t("Motivational-description")}
            image={premiumImage}
          />

          <SAButton className="neon-border-yellow text-yellow-400 btn-outline flex items-center gap-2 w-full lg:w-1/2">
            {t("Create-Membership")}
          </SAButton>
        </div>
        <small className="hidden lg:block">All rights reserved © 2025</small>
      </div>
    </div>
  );
}
