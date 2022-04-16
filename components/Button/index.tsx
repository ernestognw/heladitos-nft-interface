import { FunctionComponent, ReactNode, useMemo } from "react";
import type { Color, Size } from "@config/types";
import { config } from "./utils";

type Props = {
  children: ReactNode;
  color: Color;
  size?: Size;
  className?: string;
};

const Button: FunctionComponent<Props> = ({
  children,
  color,
  size = "md",
  className,
}) => {
  return (
    <button
      type="button"
      className={`${config.base} ${config.colors[color]} ${config.sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
