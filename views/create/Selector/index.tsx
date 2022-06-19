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
  const [selectedTrait, setSelectedTrait] = useState(traitNames[0]);

  if (!active) return <></>;

  return (
    <div className="absolute right-0 left-0 bottom-0 bg-white h-[320px] rounded-t-[50px] p-6">
      <div className="flex gap-3">
        <div className="rounded-full flex-1 bg-gray-200 flex gap-2">
          {Object.keys(traits).map((trait) => (
            <TraitTab
              onClick={setSelectedTrait}
              enabled={trait === selectedTrait}
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
        {traits[selectedTrait].map((variant) => (
          <Variant
            onClick={(variant: string) =>
              setSelectedTraits((prev: SelectedTraits) => ({
                ...prev,
                [selectedTrait]: variant,
              }))
            }
            selected={variant === selectedTraits[selectedTrait]}
            key={variant}
            variant={variant}
            trait={selectedTrait}
          />
        ))}
      </div>
    </div>
  );
};

export default Selector;
