import React from "react";

import Header from "../components/header/Header";
import Services from "../components/services/Services";
import AditionalService from "../components/aditionalService/AditionalService";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Services />
        <AditionalService />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
