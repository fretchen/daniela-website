import React from "react";
import { footer } from "../layouts/styles";

export default function Footer() {
  return (
    <footer className={footer.container}>
      <p className={footer.text}>
        &copy; {new Date().getFullYear()} [Teacher Name] &middot; Las Terrenas,
        Dominican Republic
      </p>
      <a href="#" className={footer.backToTop}>
        ↑ Back to top
      </a>
    </footer>
  );
}
