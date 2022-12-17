import TraitNameSelector from "@components/TraitNameSelector";
import {
  TraitName,
  Traits,
  VariantMetadata,
  VariantName,
  Variants,
} from "@config/types";
import { FC, useMemo, useState } from "react";
import VariantCard from "./VariantCard";

interface Props {
  traits: Traits;
}

type VariantsWithMetadata = {
  [key: VariantName]: VariantMetadata;
};
type TraitsWithMetadata = { [key: TraitName]: VariantsWithMetadata };

const Dictionary: FC<Props> = ({ traits }) => {
  const traitsWithMetadata: TraitsWithMetadata = useMemo(() => {
    const traitsWithOnlyVariantsWithMetadata = Object.entries(traits).reduce(
      (
        filteredTraits: TraitsWithMetadata,
        [trait, variants]: [TraitName, Variants]
      ) => {
        filteredTraits[trait] = Object.entries(variants).reduce(
          (
            filteredVariants: VariantsWithMetadata,
            [variant, metadata]: [VariantName, VariantMetadata | null]
          ) => {
            if (metadata) filteredVariants[variant] = metadata;
            return filteredVariants;
          },
          {}
        );
        return filteredTraits;
      },
      {}
    );

    return Object.entries(traitsWithOnlyVariantsWithMetadata).reduce(
      (
        filteredTraits: TraitsWithMetadata,
        [trait, variants]: [TraitName, VariantsWithMetadata]
      ) => {
        if (Object.entries(variants).length > 0)
          filteredTraits[trait] = variants;
        return filteredTraits;
      },
      {}
    );
  }, [traits]);

  const [selectedTraitName, setSelectedTraitName] = useState<TraitName>(
    Object.keys(traitsWithMetadata)[0]
  );

  const variantsWithMetadata = useMemo(
    () => Object.entries(traitsWithMetadata[selectedTraitName]),
    [traitsWithMetadata, selectedTraitName]
  );

  return (
    <div className="pt-16 bg-purple-500 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className="max-w-6xl pl-4 pr-8 sm:pl-6 lg:px-8 pt-14 pb-[150px] w-full relative">
          <h3 className="text-3xl font-bold text-white">Dictionary</h3>
          <div className="my-10">
            <TraitNameSelector
              traits={traitsWithMetadata}
              onSelectTraitName={setSelectedTraitName}
              selectedTraitName={selectedTraitName}
            />
          </div>
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            }}
          >
            {variantsWithMetadata.map(
              ([variantName, variantMetadata]: [
                VariantName,
                VariantMetadata
              ]) => {
                return (
                  <VariantCard
                    key={variantName}
                    {...variantMetadata}
                    traitName={selectedTraitName}
                    variantName={variantName}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
