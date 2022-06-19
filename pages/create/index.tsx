import type { NextPage } from "next";
import { SelectedTraits, Traits } from "@config/types";
import { getTraits } from "@pages/api/traits";
import Preview from "@views/create/Preview";
import Navbar from "@components/Navbar";
import Selector from "@views/create/Selector";
import { useEffect, useState } from "react";

interface Props {
  traits: Traits;
}

const Index: NextPage<Props> = ({ traits }) => {
  const [isSelectorActive, toggleSelector] = useState(false);
  useEffect(() => {
    const backgroundColor = "bg-gray-500";
    document.body.classList.add(backgroundColor);
    return () => document.body.classList.remove(backgroundColor);
  });

  const [selectedTraits, setSelectedTraits] = useState<SelectedTraits>(
    Object.entries(traits).reduce((acc: SelectedTraits, [trait, variants]) => {
      acc[trait] = variants[0];
      return acc;
    }, {})
  );

  return (
    <>
      <Navbar />
      <div className="mt--16 pt-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex max-w-5xl w-full py-6 bg-blueberry-500 border-black border-8 border-t-0 px-4 sm:px-6 lg:px-8 justify-center">
          <div>
            <div className="py-2 px-4 w-full bg-mango-500 shadow-[10px_10px_0px_0px]">
              <h2 className="text-3xl font-bold">Your heladito</h2>
            </div>
            <Preview
              openSelector={() => toggleSelector(true)}
              traits={traits}
              setSelectedTraits={setSelectedTraits}
              selectedTraits={selectedTraits}
            />
          </div>
        </div>
      </div>
      <Selector
        active={isSelectorActive}
        close={() => toggleSelector(false)}
        traits={traits}
        setSelectedTraits={setSelectedTraits}
        selectedTraits={selectedTraits}
      />
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    traits: getTraits(),
  },
});

export default Index;
