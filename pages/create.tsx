import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import Traits from "@views/create/Traits";
import Preview from "@views/create/Preview";

const Index: NextPage = () => {
  useEffect(() => {
    const backgroundColor = "bg-gray-500";
    document.body.classList.add(backgroundColor);
    return () => document.body.classList.remove(backgroundColor);
  });

  return (
    <>
      <Navbar />
      <div className="mt--16 pt-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex max-w-5xl w-full py-6 bg-blueberry-500 border-black border-8 border-t-0 px-4 sm:px-6 lg:px-8 gap-6">
          <div className="basis-8/12">
            <div className="py-2 px-4 w-full bg-sky-blue-500 shadow-[10px_10px_0px_0px]">
              <h2 className="text-3xl font-bold">Menu</h2>
            </div>
            <Traits />
          </div>
          <div className="basis-4/12">
            <div className="py-2 px-4 w-full bg-mango-500 shadow-[10px_10px_0px_0px]">
              <h2 className="text-3xl font-bold">Your heladito</h2>
            </div>
            <Preview />
          </div>
        </div>
      </div>
      <div className="mt-[-85px] flex justify-center">
        <Image
          src="/create/table.svg"
          alt="Maker table"
          width={1164}
          height={280}
          className="mx-auto ml-auto"
        />
      </div>
    </>
  );
};

export default Index;
