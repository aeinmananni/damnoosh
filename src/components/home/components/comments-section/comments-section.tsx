import { SAComments, SAVideos } from "./components";

export default function CommentsSection() {
  return (
    <div className="relative flex flex-col lg:flex-row  items-center justify-center w-full h-full lg:h-1/2   rounded-lg  bg-slate-900 shrink-0 gap-3">
      <SAComments />
      <SAVideos />
    </div>
  );
}
