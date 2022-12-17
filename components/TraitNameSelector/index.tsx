import { TraitName, Traits } from "@config/types";
import { FC } from "react";
import TraitNameTab, { Props as TraitNameTabProps } from "./TraitNameTab";

interface Props {
  traits: Traits;
  onSelectTraitName: TraitNameTabProps["onClick"];
  selectedTraitName: TraitName;
  className?: string;
}

const TraitNameSelector: FC<Props> = ({
  traits,
  onSelectTraitName,
  selectedTraitName,
  className,
  ...props
}) => {
  return (
    <div
      className={`rounded-full flex-1 bg-gray-200 flex gap-2 w-full overflow-x-auto ${className}`}
      {...props}
    >
      {Object.keys(traits).map((trait) => (
        <TraitNameTab
          key={trait}
          onClick={onSelectTraitName}
          enabled={trait === selectedTraitName}
          trait={trait}
        />
      ))}
    </div>
  );
};

export default TraitNameSelector;
