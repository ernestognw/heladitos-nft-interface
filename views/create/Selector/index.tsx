import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { SelectedTraits, Traits } from "@config/types";
import Button from "@components/Button";
import Variant from "./Variant";
import TraitNameSelector from "@components/TraitNameSelector";

interface Props {
  traits: Traits;
  selectedTraits: SelectedTraits;
  setSelectedTraits: Dispatch<SetStateAction<SelectedTraits>>;
  close: <T>() => T | void;
  active: boolean;
}

const Selector: FC<Props> = ({
  close,
  active,
  traits,
  selectedTraits,
  setSelectedTraits,
}) => {
  const traitNames = useMemo(() => Object.keys(traits), [traits]);
  const [selectedTraitName, setSelectedTraitName] = useState(traitNames[0]);

  const variantNames = useMemo(
    () => Object.keys(traits[selectedTraitName]),
    [traits, selectedTraitName]
  );

  if (!active) return <></>;

  return (
    <>
      <div className="inset-0 fixed cursor-pointer" onClick={close} />
      <div className="fixed right-0 left-0 bottom-0 bg-white h-[320px] rounded-t-[50px] p-6">
        <div className="flex gap-3">
          <TraitNameSelector
            traits={traits}
            onSelectTraitName={setSelectedTraitName}
            selectedTraitName={selectedTraitName}
          />
          <Button onClick={close} color="orange-red" size="sm">
            X
          </Button>
        </div>
        <div className="flex gap-2 overflow-scroll mt-6">
          {variantNames.map((variant) => (
            <Variant
              onClick={(variant: string) =>
                setSelectedTraits((prev: SelectedTraits) => ({
                  ...prev,
                  [selectedTraitName]: variant,
                }))
              }
              selected={variant === selectedTraits[selectedTraitName]}
              key={variant}
              variant={variant}
              trait={selectedTraitName}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Selector;
