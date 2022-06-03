import { FC } from "react";
import Button from "@components/Button";

interface Props {
  name: string;
}

const Trait: FC<Props> = ({ name }) => {
  return (
    <div className="flex my-2 items-center">
      <p className="text-l font-bold">{name}</p>
      <Button size="sm" color="white" className="ml-auto mx-4 px-12">
        Change
      </Button>
      <Button size="sm" color="strawberry">
        Change
      </Button>
    </div>
  );
};

export default Trait;
