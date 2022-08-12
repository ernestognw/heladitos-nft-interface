import Image from "next/image";
import { FC } from "react";

interface Props {
  src: string;
  alt: string;
  title: string;
}

const Trait: FC<Props> = ({ src, alt, title }) => {
  return (
    <div className="flex flex-col flex-1">
      <Image src={src} alt={alt} width={150} height={150} />
      <p className="text-xl mt-6 text-center">{title}</p>
    </div>
  );
};

export default Trait;
