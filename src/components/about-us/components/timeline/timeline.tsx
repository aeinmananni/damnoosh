import { TIMELINE_ITEMS } from "../../../../data";
import { SATickIcon } from "../../../../icons";
import { useChangeLanguage } from "../../../../hooks/useChangeLanguage";
export default function TimeLine() {
  const { language } = useChangeLanguage();
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {TIMELINE_ITEMS.map((it, index) => (
        <li>
          <div className="timeline-middle">
            <SATickIcon />
          </div>
          <div
            className={`${
              index % 2 === 0
                ? "timeline-start md:text-end"
                : "timeline-end md:mb-10"
            } mb-10 `}
          >
            <time className="font-mono italic text-yellow-400">{it.title}</time>
            <div className="text-lg font-black text-shadow-blue">
              {it.text[language]}
            </div>
            <p className="text-shadow">{it.exp[language]}</p>
          </div>
          <hr className="neon-border" />
        </li>
      ))}
    </ul>
  );
}
