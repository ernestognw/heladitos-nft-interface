import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import { useEffect } from "react";
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
        <div className="flex max-w-5xl w-full py-6 bg-blueberry-500 border-black border-8 border-t-0 px-4 sm:px-6 lg:px-8 justify-center">
          <div>
            <div className="py-2 px-4 w-full bg-mango-500 shadow-[10px_10px_0px_0px]">
              <h2 className="text-3xl font-bold">Your heladito</h2>
            </div>
            <Preview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
