import { footer } from "../layouts/styles";
import rawSite from "../content/site.yaml";
import type { SiteContent } from "../content/types";

const site = rawSite as SiteContent;

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
