/* eslint-disable @next/next/no-img-element */
import { endpoints } from "@config/routes";
import { SelectedTraits } from "@config/types";
import { FC, HTMLAttributes, useEffect, useState } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  selectedTraits: SelectedTraits;
  size?: number;
}

const Display: FC<Props> = ({
  className,
  selectedTraits,
  size = 400,
  ...rest
}) => {
  const [imageUrl, setImageUrl] = useState(endpoints.render);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    Object.entries(selectedTraits).forEach(([trait, variant]) =>
      searchParams.append(trait, variant)
    );
    setImageUrl(`${endpoints.render}?${searchParams.toString()}`);
  }, [selectedTraits]);

  return (
    <div
      className={`shadow-[10px_10px_0px_0px] rounded-xl m-auto ${className}`}
      style={{
        maxWidth: size,
        ...rest.style,
      }}
      {...rest}
    >
      <img
        src={imageUrl}
        alt="Your Heladito"
        style={{
          maxHeight: size,
        }}
        className="rounded-xl"
      />
    </div>
  );
};

export default Display;
