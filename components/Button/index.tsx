import { FC, forwardRef, ReactNode } from "react";
import type { Color, Size } from "@config/types";
import { config } from "./utils";

interface Props {
  children: ReactNode;
  color: Color;
  size?: Size;
  className?: string;
  [key: string]: any;
}

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  ({ children, color, size = "md", className = "", ...props }, ref) => (
    <button
      type="button"
      className={`${config.base} ${config.colors[color]} ${config.sizes[size]} ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
