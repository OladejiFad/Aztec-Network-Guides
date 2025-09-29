import React from "react";

export default function Footer() {
  return (
    <footer className="footer" style={{ textAlign: "center", padding: "1rem", backgroundColor: "#111", color: "#fff" }}>
      <p>
        © {new Date().getFullYear()} Aztec Privacy. All rights reserved. | Designed by <strong>Sunday</strong>
      </p>
    </footer>
  );
}
