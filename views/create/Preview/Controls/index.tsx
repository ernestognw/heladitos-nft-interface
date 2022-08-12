import Button from "@components/Button";
import { FC } from "react";

interface Props {
  openSelector: <T>() => T | void;
  randomize: <T>() => T | void;
}

const Controls: FC<Props> = ({ openSelector, randomize }) => {
  return (
    <>
      <div className="flex justify-between mt-6 gap-4">
        <Button onClick={openSelector} color="orange" className="flex-1">
          Customize
        </Button>
        <Button onClick={randomize} color="strawberry" className="flex-1">
          Random
        </Button>
      </div>
      <Button size="xl" color="mint" className="w-full mt-4">
        Continue
      </Button>
    </>
  );
};

export default Controls;
