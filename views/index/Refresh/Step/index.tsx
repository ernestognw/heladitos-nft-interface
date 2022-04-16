import Image from "next/image";
import { FunctionComponent } from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

const Step: FunctionComponent<Props> = ({ src, alt, title, subtitle }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="mx-auto">
        <Image src={src} alt={alt} width={330} height={330} />
      </div>
      <p className="text-2xl mt-6 text-center">{title}</p>
      <p className="mt-2 text-center">{subtitle}</p>
    </div>
  );
};

export default Step;
