import { SAForm, SAContactUsInfo } from "./components";

export default function ContactUs() {
  return (
    <div className="w-full h-full  flex flex-col lg:flex-row   p-4  gap-2  shrink-0 overflow-y-auto overflow-x-hidden">
      <SAForm />
      <SAContactUsInfo />
    </div>
  );
}
