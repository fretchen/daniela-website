import React from "react";
import { layout } from "../layouts/styles";

export default function Header() {
  return (
    <header className={layout.appbar}>
      <a href="#" className={layout.siteName}>
        [Teacher Name]
      </a>
      <nav className={layout.navLinks}>
        <a href="#about" className={layout.navLink}>
          About
        </a>
        <a href="#classes" className={layout.navLink}>
          Classes
        </a>
        <a href="#testimonials" className={layout.navLink}>
          Testimonials
        </a>
        <a href="#contact" className={layout.navLink}>
          Contact
        </a>
      </nav>
    </header>
  );
}
