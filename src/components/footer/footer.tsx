import { SAMap, SAFooterInfo } from "./components";

export default function Footer() {
  return (
    <div className="  w-full h-full shrink-0 flex flex-col md:flex-row  neon-border overflow-hidden">
      <SAMap />
      <SAFooterInfo />
    </div>
  );
}
