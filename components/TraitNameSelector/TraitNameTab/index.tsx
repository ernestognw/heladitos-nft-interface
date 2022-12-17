import Button from "@components/Button";
import { Dispatch, FC, SetStateAction } from "react";

export interface Props {
  trait: string;
  enabled: boolean;
  onClick: Dispatch<SetStateAction<string>>;
}

const TraitNameTab: FC<Props> = ({ onClick, trait, enabled }) => {
  const name = trait.replace(/-/g, " ");
  const commonClasses =
    "whitespace-nowrap cursor-pointer capitalize text-sm py-2 px-6";

  if (enabled)
    return (
      <Button
        size="xs"
        color="blueberry"
        className={commonClasses}
        style={{ color: "white" }}
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

export default TraitNameTab;
