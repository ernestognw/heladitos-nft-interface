import { FC } from "react";
import Image from "next/image";
import { Button } from "@components/Button";

const Header: FC = () => {
  return (
    <header className="min-h-screen bg-purple-500 flex flex-col items-center justify-center">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="z-10">
          <Image
            src="/brand/logo.png"
            alt="Heladitos NFT"
            width={1075}
            height={405}
          />
        </div>
        <div className="absolute left-0 opacity-30 md:opacity-100">
          <Image
            src="/index/header-left-bg.svg"
            alt="Left Background"
            width={231}
            height={555}
          />
        </div>
        <div className="absolute right-0 opacity-30 md:opacity-100">
          <Image
            src="/index/header-right-bg.svg"
            alt="Right Background"
            width={231}
            height={555}
          />
        </div>
        <h1 className="mt-10 text-white text-3xl text-center z-10">
          Heladitos NFT, aka Little ice creams
        </h1>
        <p className="mt-4 max-w-xl text-white text-md text-center z-10">
          A collection of 10,000 political ice-creams customized by the people
          and minted on the Ethereum Blockchain with the ERC-721 Standard.
        </p>
        <Button size="xl" className="mt-10 z-10" color="strawberry">
          Create now
        </Button>
      </div>
    </header>
  );
};

export default Header;
