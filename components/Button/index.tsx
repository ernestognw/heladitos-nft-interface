import { FunctionComponent, ReactNode, useMemo } from "react";
import type { Color, Size } from "@config/types";
import { config } from "./utils";

interface Props {
  children: ReactNode;
  color: Color;
  size?: Size;
  className?: string;
  [key: string]: any;
}

const Button: FunctionComponent<Props> = ({
  children,
  color,
  size = "md",
  className,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={`${config.base} ${config.colors[color]} ${config.sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
