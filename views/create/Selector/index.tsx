import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import { SelectedTraits, Traits } from "@config/types";
import Button from "@components/Button";
import TraitTab from "./TraitTab";
import Variant from "./Variant";

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

  if (!active) return <></>;

  return (
    <>
      <div className="inset-0 fixed cursor-pointer" onClick={close} />
      <div className="fixed right-0 left-0 bottom-0 bg-white h-[320px] rounded-t-[50px] p-6">
        <div className="flex gap-3">
          <div className="rounded-full flex-1 bg-gray-200 flex gap-2 w-full overflow-x-scroll">
            {Object.keys(traits).map((trait) => (
              <TraitTab
                onClick={setSelectedTraitName}
                enabled={trait === selectedTraitName}
                key={trait}
                trait={trait}
              />
            ))}
          </div>
          <Button onClick={close} color="orange-red" size="sm">
            X
          </Button>
        </div>
        <div className="flex gap-2 overflow-scroll mt-6">
          {traits[selectedTraitName].map((variant) => (
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
