import Button from "@components/Button";
import Image from "next/image";
import { FC } from "react";
import Trait from "./Trait";

const Traits: FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center relative">
      <div className="absolute right-0 top-0 -mt-24">
        <Image
          src="/index/traits-bg.svg"
          alt="Traits Background"
          width={600}
          height={1232}
        />
      </div>
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-14 w-full z-10">
        <h3 className="text-3xl font-bold">
          <span className="bg-white">Traits</span>
        </h3>
        <h4 className="text-2xl mt-4">
          <span className="bg-white">
            Unique, symbolic and overall: political.
          </span>
        </h4>
        <p className="mt-4 max-w-lg">
          <span className="bg-white">
            From feminist elements, to environmental messages, these accesories
            will help you wake up your inner protester.
          </span>
        </p>
        <div className="px-4 sm:px-6 lg:px-8 py-10 w-full grid grid-cols-2 md:grid-cols-3 gap-12">
          <Trait
            src="/index/traits/head-accessories.svg"
            alt="Head accessories"
            title="Head accessories"
          />
          <Trait
            src="/index/traits/toppings.svg"
            alt="Toppings"
            title="Toppings"
          />
          <Trait
            src="/index/traits/ice-cream.svg"
            alt="Ice cream"
            title="Ice cream"
          />
          <Trait
            src="/index/traits/eyewear.svg"
            alt="Eyewear"
            title="Eyewear"
          />
          <Trait src="/index/traits/eyes.svg" alt="Eyes" title="Eyes" />
          <Trait src="/index/traits/mouth.svg" alt="Mouth" title="Mouth" />
          <Trait src="/index/traits/cones.svg" alt="Cones" title="Cones" />
          <Trait
            src="/index/traits/flags-accessories.svg"
            alt="Flags & Accessories"
            title="Flags & Accessories"
          />
          <Trait
            src="/index/traits/backgrounds.svg"
            alt="Backgrounds"
            title="Backgrounds"
          />
        </div>
        <h4 className="text-lg font-bold text-center mt-4">
          Learn more about the concepts in our Heladitos Dictionary
        </h4>
        <div className="flex items-center mt-6">
          <Button color="strawberry" className="mx-auto">
            Go to dictionary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Traits;
