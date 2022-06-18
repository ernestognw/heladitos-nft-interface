/* eslint-disable @next/next/no-img-element */
import { FC, useCallback, useEffect, useState } from "react";
import Button from "@components/Button";

const Preview: FC = () => {
  return (
    <div className="mt-4">
      <div className="w-full bg-white shadow-[10px_10px_0px_0px]">
        <img src="/api/render" alt="Your Heladito" className="max-w-[500px]" />
      </div>
      <div className="flex justify-between mt-6 gap-4">
        <Button color="orange-red" className="flex-1">
          Customize
        </Button>
        <Button color="strawberry" className="flex-1">
          Random
        </Button>
      </div>
      <Button color="mint" className="w-full mt-4">
        Continue
      </Button>
    </div>
  );
};

export default Preview;
