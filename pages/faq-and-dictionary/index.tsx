import Navbar from "@components/Navbar";
import { NextPage } from "next";
import FAQ from "@views/faq-and-dictionary/faq";
import Dictionary from "@views/faq-and-dictionary/dictionary";
import { Traits } from "@config/types";
import { getTraits } from "@config/api/utils";

interface Props {
  traits: Traits;
}

const FAQAndDictionary: NextPage<Props> = ({ traits }) => {
  return (
    <>
      <Navbar />
      <FAQ />
      <Dictionary traits={traits} />
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    traits: getTraits(),
  },
});

export default FAQAndDictionary;
