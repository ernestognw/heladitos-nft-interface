import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "@components/Button";

const Header: FunctionComponent = () => {
  return (
    <div className="min-h-screen pt-16 -mt-16 bg-purple-500 flex flex-col items-center justify-center">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <Image
          src="/brand/logo.svg"
          alt="Heladitos NFT"
          width={600}
          height={300}
        />
        <h1 className="text-white text-3xl text-center">
          Heladitos NFT, aka Little ice creams
        </h1>
        <h2 className="mt-4 max-w-xl text-white text-md text-center">
          A collection of 10,000 political ice-creams customized by the people
          and minted on the Ethereum Blockchain with the ERC-721 Standard.
        </h2>
        <Button size="xl" className="mt-10" color="strawberry">
          Create now
        </Button>
      </div>
    </div>
  );
};

export default Header;
