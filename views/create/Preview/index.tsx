import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { SelectedTraits, Traits } from "@config/types";
import { endpoints } from "@config/routes";
import Display from "./Display";
import MachineWrapper from "./MachineWrapper";
import Controls from "./Controls";

interface Props {
  traits: Traits;
  selectedTraits: SelectedTraits;
  setSelectedTraits: Dispatch<SetStateAction<SelectedTraits>>;
  openSelector: <T>() => T | void;
}

const Preview: FC<Props> = ({
  traits,
  selectedTraits,
  setSelectedTraits,
  openSelector,
}) => {
  const [imageUrl, setImageUrl] = useState(endpoints.render);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    Object.entries(selectedTraits).forEach(([trait, variant]) =>
      searchParams.append(trait, variant)
    );
    setImageUrl(`${endpoints.render}?${searchParams.toString()}`);
  }, [selectedTraits]);

  const randomize = () => {
    const selectedTraits = Object.entries(traits).reduce(
      (acc: SelectedTraits, [trait, variants]) => {
        acc[trait] = variants[Math.floor(Math.random() * variants.length)];
        return acc;
      },
      {}
    );

    setSelectedTraits(selectedTraits);
  };

  return (
    <>
      <MachineWrapper
        controls={
          <Controls randomize={randomize} openSelector={openSelector} />
        }
        className="hidden lg:block mt-[-4px]"
      >
        <Display imageUrl={imageUrl} />
      </MachineWrapper>
      <div className="lg:hidden mt-16">
        <Display className="lg:hidden" imageUrl={imageUrl} />
        <Controls randomize={randomize} openSelector={openSelector} />
      </div>
    </>
  );
};

export default Preview;
