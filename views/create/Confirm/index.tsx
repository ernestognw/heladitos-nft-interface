import { FC } from "react";
import Display from "@views/create/components/Display";
import { SelectedTraits } from "@config/types";
import TraitRow from "./TraitRow";

interface Props {
  selectedTraits: SelectedTraits;
  [key: string]: any;
}

const Confirm: FC<Props> = ({ selectedTraits }) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-400" />
      <div className="fixed inset-0">
        <div className="items-center justify-center flex pt-32 pb-16">
          <div className="bg-white p-8 ticket flex-col w-[400px] drop-shadow-md">
            <Display
              selectedTraits={selectedTraits}
              size={200}
              className="shadow-none"
            />
            <h1 className="text-3xl font-bold mt-6">Summary</h1>
            {Object.entries(selectedTraits).map(([trait, value]) => (
              <TraitRow key={`${trait}-${value}`} trait={trait} value={value} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
