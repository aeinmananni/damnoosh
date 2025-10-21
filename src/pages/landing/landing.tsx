import { SAHeader, SALine, SAFooter } from "../../components";
import { Outlet } from "react-router";

export default function LandingPage() {
  return (
    <div className="flex  flex-col gap-4 items-center w-full lg:w-5/6 h-full ">
      <SAHeader />
      <SALine />
      <Outlet />
      <SAFooter />
    </div>
  );
}
