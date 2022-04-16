import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Header from "@views/index/Header";
import About from "@views/index/About";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
};

export default Index;
