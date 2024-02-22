import React from "react";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Services from "../src/components/services/Services";
import Gallery from "../src/components/gallery/Gallery";
import AditionalService from "./components/aditionalService/AditionalService";

const App = () => {
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

export default App;
