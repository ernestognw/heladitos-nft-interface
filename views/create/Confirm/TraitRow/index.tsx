import { FC } from "react";

interface Props {
  trait: string;
  value: string;
  [key: string]: any;
}

const TraitRow: FC<Props> = ({ trait, value }) => {
  const traitName = trait.replace(/-/g, " ");
  const valueName = value.replace(/-/g, " ");
  return (
    <div className="flex justify-between my-6">
      <p className="capitalize">{traitName}</p>
      <p className="capitalize font-bold">{valueName}</p>
    </div>
  );
};

export default TraitRow;
