import React from "react";
import { layout } from "../layouts/styles";
import site from "../content/site.yaml";

export default function Header() {
  return (
    <header className={layout.appbar}>
      <a href="#" className={layout.siteName}>
        {site.name}
      </a>
      <nav className={layout.navLinks}>
        {site.nav.map((item: { label: string; href: string }) => (
          <a key={item.href} href={item.href} className={layout.navLink}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
