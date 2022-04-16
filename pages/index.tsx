import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Header from "@views/index/Header";
import About from "@views/index/About";
import Refresh from "@views/index/Refresh";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Refresh />
    </>
  );
};

export default Index;
