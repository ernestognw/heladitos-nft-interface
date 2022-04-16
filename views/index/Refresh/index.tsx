import Image from "next/image";
import { FunctionComponent } from "react";
import Step from "./Step";

const Refresh: FunctionComponent = () => {
  return (
    <div className="bg-mango-500 flex flex-col items-center justify-center">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 py-14 w-full">
        <h3 className="text-3xl font-bold">Refresh yourself now!</h3>
        <h4 className="text-2xl mt-4">
          The protest is ongoing and the sun is burning.
        </h4>
        <p className="mt-4">
          Order your ice-cream to refresh yourself and raise your voice for
          justice and decentralization
        </p>
      </div>
      <div className="max-w-5xl px-4 sm:px-6 lg:px-8 py-14 w-full flex sm:space-x-14 space-y-14 sm:space-y-0 flex-col sm:flex-row">
        <Step
          src="/index/step-1.png"
          alt="Connect your wallet"
          title="1. Connect your wallet"
          subtitle="Use your ETH wallet to access to the Heladito Store"
        />
        <Step
          src="/index/step-2.png"
          alt="Play with the Heladito Store"
          title="2. Play with the Heladito Store"
          subtitle="Have fun picking a flavour, toppings and  personalized accesories for the ocassion. Pick your favourites or random ones."
        />
        <Step
          src="/index/step-3.png"
          alt="Get your heladito"
          title="3. Get your heladito"
          subtitle="Congratulations! When you end, just click mint to have an heladito NFT in your wallet."
        />
      </div>
      <Image src="/index/protest.png" alt="Protest" width={2880} height={626} />
    </div>
  );
};

export default Refresh;
