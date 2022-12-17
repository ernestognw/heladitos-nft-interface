import { IMAGE_FILE, TRAITS_DIRECTORY } from "@config/api";
import {
  TraitName,
  Traits,
  Variant,
  VariantMetadata,
  Variants,
} from "@config/types";
import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import { resolve } from "path";

const getVariants = (trait: string): Variants => {
  const traitDirectory = resolve(TRAITS_DIRECTORY, trait);

  if (!existsSync(traitDirectory)) throw new Error(`Trait ${trait} not found`);

  const variants = readdirSync(traitDirectory).filter((fileOrDirectory) =>
    statSync(resolve(traitDirectory, fileOrDirectory)).isDirectory()
  );

  return variants.reduce((acc: Variants, variant: Variant) => {
    const metadataPath = resolve(traitDirectory, variant, "metadata.json");
    acc[variant] = null;
    if (existsSync(metadataPath))
      acc[variant] = JSON.parse(
        readFileSync(metadataPath, "utf8")
      ) as VariantMetadata;
    return acc;
  }, {});
};

const getTraitNames = (): TraitName[] =>
  readdirSync(TRAITS_DIRECTORY).filter((fileOrDirectory) =>
    statSync(resolve(TRAITS_DIRECTORY, fileOrDirectory)).isDirectory()
  );

const getTraits = (): Traits => {
  const traitsNames = getTraitNames();

  const traits = traitsNames.reduce((acc: Traits, traitName: string) => {
    acc[traitName] = getVariants(traitName);
    return acc;
  }, {});

  return traits;
};

const getVariantSVGPath = (traitName: TraitName, variant: Variant) =>
  resolve(TRAITS_DIRECTORY, traitName, variant, IMAGE_FILE);

export { getTraitNames, getVariants, getVariantSVGPath, getTraits };
