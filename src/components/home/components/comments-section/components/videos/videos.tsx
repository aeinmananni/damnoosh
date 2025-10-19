import STONE_VIDEO from "../../../../../../video/stone.mp4";

export default function Videos() {
  return (
    <div className="w-full h-full sm:h-1/2 lg:h-full neon-border">
      <video
        src={STONE_VIDEO}
        className=" w-full h-full   object-cover rounded-md"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
