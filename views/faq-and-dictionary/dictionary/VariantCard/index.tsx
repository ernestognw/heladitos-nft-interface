/* eslint-disable @next/next/no-img-element */
import { TraitName, VariantMetadata, VariantName } from "@config/types";
import useEllipsis from "@hooks/use-ellipsis";
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
  const { ellipsedText, toggle, ellipsed, showingMore } = useEllipsis(
    description,
    { maxLength: 150 }
  );
  return (
    <div className="bg-white p-5 rounded-xl flex flex-col">
      <div className={`shadow-[7px_7px_0px_0px]`}>
        <img
          src={`/traits/${traitName}/${variantName}/image.svg`}
          alt="Your Heladito"
          className="bg-gray-200"
        />
      </div>
      <h3 className="text-xl mt-5">{name}</h3>
      <div className="bg-gray-400 full-width h-[1px] my-2" />
      <h3 className="text-sm">{ellipsedText}</h3>
      {ellipsed && (
        <a role="button" onClick={toggle} className="text-tw-blue-500 ml-auto">
          {showingMore ? "Ver menos" : "Ver más"}
        </a>
      )}
    </div>
  );
};

export default VariantCard;
