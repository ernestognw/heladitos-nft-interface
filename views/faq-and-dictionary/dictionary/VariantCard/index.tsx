/* eslint-disable @next/next/no-img-element */
import { TraitName, VariantMetadata, VariantName } from "@config/types";
import { FC } from "react";

interface Props extends VariantMetadata {
  variantName: VariantName;
  traitName: TraitName;
}

const VariantCard: FC<Props> = ({
  name,
  description,
  variantName,
  traitName,
}) => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className={`shadow-[7px_7px_0px_0px] m-auto`}>
        <img
          src={`/traits/${traitName}/${variantName}/image.svg`}
          alt="Your Heladito"
          className="bg-gray-200"
        />
      </div>
      <h3 className="text-xl mt-5">{name}</h3>
      <div className="bg-gray-400 full-width h-[1px] my-2" />
      <h3 className="text-sm">{description}</h3>
    </div>
  );
};

export default VariantCard;
