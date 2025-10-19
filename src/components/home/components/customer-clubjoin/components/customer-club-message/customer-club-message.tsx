import { useChangeLanguage } from '../../../../../../hooks/useChangeLanguage';
import { SAButton } from '../../../../../custom';
import { SALogo } from '../../../../../logo';

export default function CustomerClubMessage() {
  const { t } = useChangeLanguage();
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <div className="flex flex-col justify-around h-full items-center gap-2">
        <span className="text-3xl md:text-2xl lg:text-3xl ">
          {t("club-join-message")}
        </span>
        <SALogo
          className="!flex"
          styles={{
            imageClassName: "  md:!h-24 md:!w-24 ",
            textClassName: "text-xl",
          }}
        />
        <p className="w-2/3 text-justify">{t("club-join-description")}</p>
        <SAButton className="border border-primary text-primary btn-outline flex items-center gap-2 w-1/2">
          {t("Create-Membership")}
        </SAButton>
      </div>
    </div>
  );
}
