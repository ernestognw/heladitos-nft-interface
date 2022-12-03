import Image from "next/image";
import { FC } from "react";

interface Props {
  variant: string;
  trait: string;
  selected: boolean;
  onClick: <T>(variant: string) => T | void;
}

const Variant: FC<Props> = ({ selected, trait, variant, onClick }) => {
  return (
    <div
      onClick={() => onClick(variant)}
      className={`bg-gray-200 flex items-center cursor-pointer ${
        selected ? "border-blueberry-400" : "border-gray-100"
      } border-4`}
    >
      {variant !== "none" ? (
        <Image
          src={`/traits/${trait}/${variant}/image.svg`}
          alt={`${trait}-${variant}`}
          width={200}
          height={200}
          layout="fixed"
        />
      ) : (
        <div className="w-[200px]" />
      )}
    </div>
  );
};

export default Variant;
