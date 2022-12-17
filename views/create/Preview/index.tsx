import { Dispatch, FC, SetStateAction } from "react";
import { SelectedTraits, Traits } from "@config/types";
import Display from "@views/create/components/Display";
import MachineWrapper from "./MachineWrapper";
import Controls from "./Controls";

interface Props {
  traits: Traits;
  selectedTraits: SelectedTraits;
  setSelectedTraits: Dispatch<SetStateAction<SelectedTraits>>;
  openSelector: <T>() => T | void;
  openConfirm: <T>() => T | void;
}

const Preview: FC<Props> = ({
  traits,
  selectedTraits,
  setSelectedTraits,
  openSelector,
  openConfirm,
}) => {
  const randomize = () => {
    const selectedTraits = Object.entries(traits).reduce(
      (acc: SelectedTraits, [trait, variants]) => {
        const variantNames = Object.keys(variants);
        acc[trait] =
          variantNames[Math.floor(Math.random() * variantNames.length)];
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
          <Controls
            openConfirm={openConfirm}
            randomize={randomize}
            openSelector={openSelector}
          />
        }
        className="hidden lg:block mt-[-4px]"
      >
        <Display selectedTraits={selectedTraits} />
      </MachineWrapper>
      <div className="lg:hidden mt-16">
        <Display className="lg:hidden" selectedTraits={selectedTraits} />
        <Controls
          openConfirm={openConfirm}
          randomize={randomize}
          openSelector={openSelector}
        />
      </div>
    </>
  );
};

export default Preview;
