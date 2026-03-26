import React from "react";
import { hero, section } from "../layouts/styles";

export default function Hero() {
  return (
    <div className={hero.banner}>
      <img
        src="/images/victor-rosario-leElu-nPGxU-unsplash.jpg"
        alt="Las Terrenas beach, Dominican Republic"
        className={hero.bannerImage}
      />
      <div className={hero.overlay} />
      <div className={hero.container}>
        <h1 className={hero.title}>[Teacher Name]</h1>
        <p className={hero.subtitle}>
          Spanish lessons in Las Terrenas, Dominican Republic. Private, group,
          and online classes for all levels.
        </p>
        <a href="#contact" className={hero.cta}>
          Get in touch
        </a>
      </div>
    </div>
  );
}
