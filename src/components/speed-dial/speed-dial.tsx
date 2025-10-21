import { SACircleButtonLabel } from "./components";
import englishFlag from "../../images/united-kingdom_11937935.png";
import arabiFlag from "../../images/united-arab-emirates_3054093.png";
import germaniFlag from "../../images/gerneny-falg.png";
import translateImage from "../../images/translate_17387770.png";
import { SAButton, SAImage } from "../custom";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";
export default function SpeedDial() {
  const { i18n } = useChangeLanguage();
  return (
    <div className="fab start-2">
      {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
      <SAImage
        src={translateImage}
        tabIndex={0}
        role="button"
        className="btn btn-xl btn-circle  "
      />
      {/* close button should not be focusable so it can close the FAB when clicked. It's just a visual placeholder */}
      <SAButton className="fab-close !btn-circle !btn-error !btn-xl text-slate-100">
        <span className="btn btn-circle btn-lg btn-error">✕</span>
      </SAButton>
      <SACircleButtonLabel
        icon={englishFlag}
        onClick={() => i18n.changeLanguage("en")}
      />
      <SACircleButtonLabel
        icon={arabiFlag}
        onClick={() => i18n.changeLanguage("ar")}
      />
      <SACircleButtonLabel
        icon={germaniFlag}
        onClick={() => i18n.changeLanguage("de")}
      />
    </div>
  );
}
