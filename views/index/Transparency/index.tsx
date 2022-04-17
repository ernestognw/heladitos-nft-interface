import { FC } from "react";
import Image from "next/image";
import Text from "./Text";

const Transparency: FC = () => {
  return (
    <div className="bg-sky-blue-500 flex flex-col items-center justify-center">
      <div className="bg-[url('/index/clouds.svg')] bg-cover w-full flex items-center justify-center">
        <div className="max-w-5xl pl-4 pr-8 sm:pl-6 lg:px-8 pt-14 pb-[150px] w-full relative">
          <div className="relative">
            <div className="bg-[#BFE5F1] opacity-70 absolute w-full rounded-lg drop-shadow-[16px_20px_0_rgba(0,0,0,1)]">
              {/* This is to make the cristal container to have text height */}
              <Text className="opacity-0" />
            </div>
            {/* This is the actual text */}
            <Text className="absolute z-10" />
          </div>
          <div className="w-[150px] md:w-auto absolute right-0 bottom-[144px]">
            <Image
              src="/index/j-chemical.svg"
              alt="J Chemical"
              width={276}
              height={285}
            />
          </div>
          {/* This is to make the block to have the corresponding height */}
          <Text className="opacity-0" />
        </div>
      </div>
    </div>
  );
};

export default Transparency;
