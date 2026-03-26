import React from "react";
import { footer } from "../layouts/styles";
import site from "../content/site.yaml";

export default function Footer() {
  return (
    <footer className={footer.container}>
      <p className={footer.text}>
        &copy; {new Date().getFullYear()} {site.name} &middot; {site.contact.location}
      </p>
      <a href="#" className={footer.backToTop}>
        ↑ Back to top
      </a>
    </footer>
  );
}
