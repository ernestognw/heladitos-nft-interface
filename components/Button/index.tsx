import { FC, forwardRef, ReactNode, ButtonHTMLAttributes } from "react";
import type { Color, Size } from "@config/types";
import { config } from "./utils";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: Color;
  size?: Size;
  className?: string;
  disabled?: boolean;
}

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  (
    { children, color, size = "md", className = "", disabled, ...props },
    ref
  ) => (
    <button
      type="button"
      className={`${config.base} ${config.colors[color]} ${
        config.sizes[size]
      } ${className} ${disabled ? "opacity-50" : ""}`}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
