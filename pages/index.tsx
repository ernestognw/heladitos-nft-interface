import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Header from "@views/index/Header";
import About from "@views/index/About";
import Refresh from "@views/index/Refresh";
import Transparency from "@views/index/Transparency";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Refresh />
      <Transparency />
    </>
  );
};

export default Index;
