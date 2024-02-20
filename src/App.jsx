import React from "react";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Services from "../src/components/services/Services";
import About from "../src/components/about/About";
import Contact from "../src/components/contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
