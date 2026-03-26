import { hero } from "../layouts/styles";
import rawSite from "../content/site.yaml";
import type { SiteContent } from "../content/types";

const site = rawSite as SiteContent;

const base = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <div className={hero.banner}>
      <img
        src={`${base}${site.heroImage}`}
        alt={site.heroImageAlt}
        className={hero.bannerImage}
      />
      <div className={hero.overlay} />
      <div className={hero.container}>
        <h1 className={hero.title}>{site.name}</h1>
        <p className={hero.subtitle}>{site.tagline}</p>
        <a href="#contact" className={hero.cta}>
          {site.cta}
        </a>
      </div>
    </div>
  );
}
