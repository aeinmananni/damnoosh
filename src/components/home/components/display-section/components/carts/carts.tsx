import { useMemo } from "react";
import { PROJECTS_SAMPLE } from "../../../../../../data";
import { useChangeLanguage } from "../../../../../../hooks/useChangeLanguage";
import { SACart } from "./components";

export default function Carts() {
  const { language } = useChangeLanguage();
  const content = useMemo(() => {
    return PROJECTS_SAMPLE.map((it) => (
      <SACart
        key={it.id}
        image={it.image}
        stoneType={it.stoneType[language]}
        projectName={it.projectName[language]}
        location={it.location[language]}
        description={it.description[language]}
      />
    ));
  }, [language]);

  return (
    <div className="flex justify-between items-center w-full h-full overflow-hidden xl:gap-4">
      {content}
    </div>
  );
}
