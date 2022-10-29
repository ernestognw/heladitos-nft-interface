import Navbar from "@components/Navbar";
import { NextPage } from "next";
import FAQ from "@views/faq-and-dictionary/faq";

const FAQAndDictionary: NextPage = () => {
  return (
    <>
      <Navbar />
      <FAQ />
    </>
  );
};

export default FAQAndDictionary;
