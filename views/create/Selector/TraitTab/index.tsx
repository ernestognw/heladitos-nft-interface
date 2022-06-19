import Button from "@components/Button";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  trait: string;
  enabled: boolean;
  onClick: Dispatch<SetStateAction<string>>;
}

const TraitTab: FC<Props> = ({ onClick, trait, enabled }) => {
  const name = trait.replace(/-/g, " ");
  const commonClasses = "whitespace-nowrap cursor-pointer capitalize text-sm py-2 px-6";

  if (enabled)
    return (
      <Button
        size="xs"
        color="blueberry"
        className={`${commonClasses} text-white`}
      >
        {name}
      </Button>
    );

  return (
    <p onClick={() => onClick(trait)} className={commonClasses}>
      {name}
    </p>
  );
};

export default TraitTab;
