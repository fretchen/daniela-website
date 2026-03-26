import { layout } from "../layouts/styles";
import rawSite from "../content/site.yaml";
import type { SiteContent } from "../content/types";

const site = rawSite as SiteContent;

export default function Header() {
  return (
    <header className={layout.appbar}>
      <a href="#" className={layout.siteName}>
        {site.name}
      </a>
      <nav className={layout.navLinks}>
        {site.nav.map((item) => (
          <a key={item.href} href={item.href} className={layout.navLink}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
