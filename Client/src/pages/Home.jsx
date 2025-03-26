import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Lending from "../components/Lending";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Lending />
      <Footer />
    </div>
  );
};

export default Home;
