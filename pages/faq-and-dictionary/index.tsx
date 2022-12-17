import Navbar from "@components/Navbar";
import { NextPage } from "next";
import FAQ from "@views/faq-and-dictionary/faq";
import Dictionary from "@views/faq-and-dictionary/dictionary";

const FAQAndDictionary: NextPage = () => {
  return (
    <>
      <Navbar />
      <FAQ />
      <Dictionary />
    </>
  );
};

export default FAQAndDictionary;
