import type { HtmlHTMLAttributes } from 'react';

type ImageProps = HtmlHTMLAttributes<HTMLDivElement>;

export default function Image({ ...props }: ImageProps) {
  return <div {...props} className={`bg-cover bg-center ${props.className}`} />;
}
