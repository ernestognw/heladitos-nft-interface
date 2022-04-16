import { FunctionComponent, ReactNode, useMemo } from "react";
import type { Color, Size } from "@config/types";
import { classes } from "./utils";

type Props = {
  children: ReactNode;
  color: Color;
  size?: Size;
};

const Button: FunctionComponent<Props> = ({ children, color, size = "md" }) => {
  const className = useMemo(
    () =>
      [...classes.base, ...classes.color(color), ...classes.size(size)].join(
        " "
      ),
    [color, size]
  );

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export { Button };
