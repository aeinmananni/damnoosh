type Styles = {
  textClassName?: string;
};

type TextWithIconProps = {
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  styles?: Styles;
};

export default function TextWithIcon({
  icon,
  text,
  className,
  styles,
}: TextWithIconProps) {
  return (
    <div className={`flex flex-col  gap-1 w-full ${className}`}>
      <i>{icon}</i>
      <span className={`text-xs sm:text-[13px] ${styles?.textClassName}`}>
        {text}
      </span>
    </div>
  );
}
