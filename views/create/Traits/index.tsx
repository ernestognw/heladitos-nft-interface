import { FC } from "react";
import Trait from "./Trait";

const Traits: FC = () => {
  return (
    <div className="mt-4 py-2 px-4 w-full bg-white shadow-[10px_10px_0px_0px]">
      <h2 className="text-2xl">Traits</h2>
      <Trait name="Flags & Accessories" />
      <Trait name="Eyewear" />
      <Trait name="Head accessories" />
      <Trait name="Eyes" />
      <Trait name="Mouth" />
      <Trait name="Topping" />
      <Trait name="Flavour" />
      <Trait name="Cone" />
      <Trait name="Background" />
    </div>
  );
};

export default Traits;
