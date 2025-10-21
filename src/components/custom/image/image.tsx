import type { HtmlHTMLAttributes } from 'react';
import React from "react";

type ImageProps = {
  src: string;
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Image = ({ style, src, children, ...props }: ImageProps) => {
  return (
    <div
      {...props}
      style={{ ...style, backgroundImage: `url(${src})` }}
      className={`bg-cover bg-center object-fit ${props.className}`}
    >
      {children}
    </div>
  );
};

export default React.memo(Image);