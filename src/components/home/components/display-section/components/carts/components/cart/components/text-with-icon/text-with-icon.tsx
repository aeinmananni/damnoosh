type TextWithIconProps = {
  icon?: React.ReactNode;
  text?: string;
};

export default function TextWithIcon({ icon, text }: TextWithIconProps) {
  return (
    <div className="flex flex-col  gap-1 w-full">
      <i>{icon}</i>
      <span className="text-xs sm:text-[13px] ">{text}</span>
    </div>
  );
}
