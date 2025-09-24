import type { ButtonHTMLAttributes, ComponentType, SVGProps } from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  isRotate?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ isRotate, icon: Icon, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`btn ${props.className} rounded-lg flex items-center hover:text-slate-200 group`}
    >
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon className={`${isRotate && '-rotate-180'}`} />}
        {children}
      </div>
    </button>
  );
}
