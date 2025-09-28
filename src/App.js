import React from "react";
import "./styles/styles.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Technology from "./components/Technology";
import ProgramsSection from "./components/ProgramsSection";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Features />
      <Technology />
      <ProgramsSection />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
