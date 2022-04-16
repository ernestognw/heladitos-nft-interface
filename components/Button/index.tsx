import { FunctionComponent, ReactNode } from "react";
import type { Color, Size } from "@config/types";
import { classes } from "./utils";

type Props = {
  children: ReactNode;
  color: Color;
  size?: Size;
};

const Button: FunctionComponent<Props> = ({ children, color, size = "md" }) => {
  console.log(classes.color(color));
  return (
    <button
      type="button"
      className={[
        ...classes.base,
        ...classes.color(color),
        ...classes.size(size),
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export { Button };
