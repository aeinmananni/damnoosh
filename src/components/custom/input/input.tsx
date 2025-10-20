import type { ComponentType, InputHTMLAttributes, SVGProps } from 'react';

type Styles = {
  iconClassName?: string;
  parentClassName?: string;
  labelClassName?: string;
};

type InputProps = {
  label?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  styles?: Styles;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  styles,
  icon: Icon,
  label,
  ...props
}: InputProps) {
  return (
    <div className={`w-full flex flex-col gap-1 ${styles?.parentClassName}`}>
      {label && <label className={styles?.labelClassName}>{label}</label>}
      <div className="relative">
        {Icon && (
          <Icon
            className={` absolute end-3 top-2.5 z-10 ${styles?.iconClassName}`}
          />
        )}
        <input
          {...props}
          className={`input w-full focus:outline-warning rounded-lg ${props.className}`}
        />
      </div>
    </div>
  );
}
