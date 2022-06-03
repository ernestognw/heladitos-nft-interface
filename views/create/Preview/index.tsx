/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Button from "@components/Button";

const Preview: FC = () => {
  return (
    <div className="mt-4">
      <div className="w-full bg-white shadow-[10px_10px_0px_0px]">
        <img src="/create/temporal-preview.svg" alt="Your Heladito" />
      </div>
      <div className="flex justify-between mt-6 gap-4">
        <Button size="sm" color="orange-red" className="flex-1">
          hello
        </Button>
        <Button size="sm" color="strawberry" className="flex-1">
          hello
        </Button>
      </div>
      <Button size="sm" color="mint" className="w-full mt-4">
        Mint now
      </Button>
    </div>
  );
};

export default Preview;
