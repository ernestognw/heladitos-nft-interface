import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import Header from "@views/index/Header";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};

export default Index;
