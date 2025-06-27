import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import OurWork from "../Components/OurWork";
import Bundle from "../Components/Bundle";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <OurWork />
      <Bundle />

    </div>
  );
};

export default Home;
