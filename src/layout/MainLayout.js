import React from "react";
import MyNavBar from "../Components/MyNavBar";
import Home from "../Components/Home";
import About from "../Components/About";
import TopArtist from "../Components/TopArtist";
import TopArtWork from "../Components/TopArtWork";
// import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <MyNavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="topartist">
        <TopArtist />
      </section>
      <section id="topartwork">
        <TopArtWork />
      </section>
      {/* <section id="footer">
        <Footer />
      </section> */}
    </div>
  );
};

export default MainLayout;
