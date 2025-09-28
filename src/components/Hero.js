import React from "react";
import "../styles/styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <img
  src={process.env.PUBLIC_URL + "/aztec-logo.png"}
  alt="Aztec Logo"
  className="hero-logo"
/>

      <h1>Aztec Privacy</h1>
      <p>Empowering private, secure, and anonymous transactions on Ethereum.</p>
      <a href="#about" className="btn">Learn More</a>
    </section>
  );
}
