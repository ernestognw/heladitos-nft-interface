import { FC, forwardRef, ReactNode, ButtonHTMLAttributes } from "react";
import type { Color, Size } from "@config/types";
import { config } from "./utils";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: Color;
  size?: Size;
  className?: string;
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
