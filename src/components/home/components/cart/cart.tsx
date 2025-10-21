import { SAButton, SAImage } from "../../../custom";
import { useChangeLanguage } from "../../../../hooks/useChangeLanguage";
import React, { useMemo } from "react";

type CartProps = {
  image?: string;
  text: string;
};

const Cart = ({ image, text }: CartProps) => {
  const { language, t } = useChangeLanguage();

  const content = useMemo(() => {
    return (
      <SAImage
        src={image ?? ""}
        className={`relative before:w-full before:h-full before:bg-gradient-to-r neon-border-yellow ${
          language === "ar"
            ? "before:from-slate-800/70"
            : "before:from-slate-800/10"
        }  before:via-slate-800/50  ${
          language === "ar"
            ? "before:to-slate-800/10"
            : "before:to-slate-800/70"
        }  before:absolute  w-full h-full rounded-lg bg-cover bg-center shadow-lg flex flex-col items-end justify-end`}
      >
        <div className="z-10 flex flex-col gap-3 p-5">
          <span className="text-lg font-mono text-shadow">{t(text)}</span>
          <SAButton className="border !btn-md bg-transparent border-slate-100 hover:scale-110 text-slate-100 neon-border-yellow">
            {t("viewBuyButton")}
          </SAButton>
        </div>
      </SAImage>
    );
  }, [image, language, t, text]);
  return content;
};

export default React.memo(Cart);
