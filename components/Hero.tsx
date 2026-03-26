import React from "react";
import { hero, section } from "../layouts/styles";
import site from "../content/site.yaml";

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
