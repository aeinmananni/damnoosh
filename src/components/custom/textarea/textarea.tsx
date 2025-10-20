import type { TextareaHTMLAttributes } from "react";

type Styles = {
  labelClassName?: string;
  parentClassName?: string;
};

type TextareaProps = {
  label?: string;
  styles?: Styles;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ styles, label, ...props }: TextareaProps) {
  return (
    <div className={`flex flex-col gap-1 w-full ${styles?.parentClassName}`}>
      {label && <label className={styles?.labelClassName}>{label}</label>}
      <textarea
        {...props}
        className={`textarea w-full focus:outline-warning rounded-lg ${props.className}`}
      />
    </div>
  );
}
