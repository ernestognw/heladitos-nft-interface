import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "@components/Button";

const Header: FunctionComponent = () => {
  return (
    <header className="min-h-screen bg-purple-500 flex flex-col items-center justify-center">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <Image
          src="/brand/logo.png"
          alt="Heladitos NFT"
          width={1075}
          height={405}
        />
        <h1 className="mt-10 text-white text-3xl text-center">
          Heladitos NFT, aka Little ice creams
        </h1>
        <p className="mt-4 max-w-xl text-white text-md text-center">
          A collection of 10,000 political ice-creams customized by the people
          and minted on the Ethereum Blockchain with the ERC-721 Standard.
        </p>
        <Button size="xl" className="mt-10" color="strawberry">
          Create now
        </Button>
      </div>
    </header>
  );
};

export default Header;
