import type { NextPage } from "next";
import { SelectedTraits, Traits } from "@config/types";
import { getTraits } from "@pages/api/traits";
import Preview from "@views/create/Preview";
import Navbar from "@components/Navbar";
import Selector from "@views/create/Selector";
import { useEffect, useState } from "react";
import useQueryParam from "@hooks/use-query-param";
import Confirm from "@views/create/Confirm";

interface Props {
  traits: Traits;
}

const Index: NextPage<Props> = ({ traits }) => {
  const [isSelectorActive, toggleSelector] = useState(false);

  useEffect(() => {
    const backgroundColor = "bg-gray-400";
    const lgBackgroundColor = "lg:bg-tw-blue-500";
    document.body.classList.add(backgroundColor);
    document.body.classList.add(lgBackgroundColor);
    return () => {
      document.body.classList.remove(backgroundColor);
      document.body.classList.remove(lgBackgroundColor);
    };
  });

  const [selectedTraits, setSelectedTraits] = useQueryParam<SelectedTraits>(
    "selectedTraits",
    Object.entries(traits).reduce((acc: SelectedTraits, [trait, variants]) => {
      acc[trait] = variants[0];
      return acc;
    }, {})
  );

  const [confirm, setConfirm] = useQueryParam<boolean>("confirm", false);

  return (
    <>
      <Navbar />
      {confirm ? (
        <Confirm
          selectedTraits={selectedTraits}
          onGoBack={() => setConfirm(false)}
        />
      ) : (
        <>
          <div className="hidden lg:block lg:pt-16">
            <div className="p-3 flex items-center justify-center text-center w-100 border-black border-4 bg-blueberry-500 border-l-0 border-r-0">
              <h2
                className="text-xl font-bold text-white"
                style={{
                  textShadow:
                    "3px 0 #000, -3px 0 #000, 0 3px #000, 0 -3px #000, 3px 3px #000, -3px -3px #000, 3px -3px #000, -3px 3px #000",
                }}
              >
                Heladitos machine ®
              </h2>
            </div>
          </div>
          <div className="pt-16 lg:pt-0 flex justify-center">
            <div className="hidden lg:block bg-[url('/create/tubes.svg')] flex-1 bg-no-repeat bg-left" />
            <Preview
              openSelector={() => toggleSelector(true)}
              traits={traits}
              setSelectedTraits={setSelectedTraits}
              selectedTraits={selectedTraits}
              openConfirm={() => setConfirm(true)}
            />
            <div className="hidden lg:block bg-[url('/create/controls.svg')] flex-1 bg-no-repeat bg-center" />
          </div>
          <Selector
            active={isSelectorActive}
            close={() => toggleSelector(false)}
            traits={traits}
            setSelectedTraits={setSelectedTraits}
            selectedTraits={selectedTraits}
          />
        </>
      )}
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    traits: getTraits(),
  },
});

export default Index;
