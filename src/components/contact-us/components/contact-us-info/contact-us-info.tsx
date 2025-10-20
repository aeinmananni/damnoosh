import { CONTACT_ITEMS } from "../../../../data";
import { SAButton, SALine } from "../../../custom";
import { SAInfoWithIcon } from "../../../footer/components/footer-info/components";
import { SAContact } from "./components";
import { useChangeLanguage } from "../../../../hooks/useChangeLanguage";
import premiumImage from "../../../../images/premium_5526726.png";
export default function ContectUsInfo() {
  const { t } = useChangeLanguage();
  return (
    <div className="w-full h-full neon-border p-4 flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-3 ">
        {CONTACT_ITEMS.map((contact) => (
          <SAContact
            key={contact.id}
            {...contact}
            className={`${contact.id === 5 && "col-span-2"}`}
          />
        ))}
      </div>
      <div className="flex justify-between flex-col h-full">
        <span className="text-xl text-shadow text-center">{`Where Innovation Meets Natural Strength — Creating Timeless Beauty from the Power of Stone.`}</span>
        <SALine />
        <div className="w-full flex gap-3">
          <SAInfoWithIcon
            text={t("Motivational-description")}
            image={premiumImage}
          />

          <SAButton className="neon-border-yellow text-yellow-400 btn-outline flex items-center gap-2 w-1/3">
            {t("Create-Membership")}
          </SAButton>
        </div>
        <small>All rights reserved © 2025</small>
      </div>
    </div>
  );
}
