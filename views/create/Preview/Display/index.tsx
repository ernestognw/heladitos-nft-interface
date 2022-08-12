/* eslint-disable @next/next/no-img-element */
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  imageUrl: string;
}

const Display: FC<Props> = ({ className, imageUrl, ...rest }) => {
  return (
    <div
      className={`shadow-[10px_10px_0px_0px] rounded-xl max-w-[400px] m-auto ${className}`}
      {...rest}
    >
      <img
        src={imageUrl}
        alt="Your Heladito"
        className="max-h-[400px] rounded-xl"
      />
    </div>
  );
};

export default Display;
