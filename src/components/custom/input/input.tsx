import type { ComponentType, InputHTMLAttributes, SVGProps } from 'react';

type Styles = {
  iconClassName?: string;
  parentClassName?: string;
};

type InputProps = {
  label?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  styles?: Styles;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ styles, icon: Icon, label, ...props }: InputProps) {
  return (
    <div className={`w-full flex flex-col ${styles?.parentClassName}`}>
      {label && <label>{label}</label>}
      <div className="relative">
        {Icon && <Icon className=" absolute end-3 top-2 z-10" />}
        <input
          {...props}
          className={`input w-full focus:outline-primary rounded-lg ${props.className}`}
        />
      </div>
    </div>
  );
}
