import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

const Step: FC<Props> = ({ src, alt, title, subtitle }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="hidden md:block mx-auto">
        <Image src={src} alt={alt} width={200} height={200} />
      </div>
      <div className="md:hidden mx-auto">
        <Image src={src} alt={alt} width={200} height={200} />
      </div>
      <p className="text-2xl mt-6 ">{title}</p>
      <p className="mt-2 ">{subtitle}</p>
    </div>
  );
};

export default Step;
