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
      className={`bg-gray-200 border-4 flex items-center cursor-pointer border-${
        selected ? "blueberry-500" : "white"
      }`}
    >
      {variant !== "none" ? (
        <Image
          src={`/traits/${trait}/${variant}.svg`}
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
