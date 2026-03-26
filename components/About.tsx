import React from "react";
import { about, section } from "../layouts/styles";

export default function About() {
  return (
    <div id="about" className={section.fullWidth}>
      <div className={section.wrapper}>
        <h2 className={section.heading}>About Me</h2>
        <div className={about.content}>
          <div className={about.photoPlaceholder}>📷</div>
          <div className={about.text}>
            <p>
              I&apos;m a passionate Spanish teacher based in the beautiful town
              of Las Terrenas on the Samaná peninsula. With years of teaching
              experience, I help expats, travelers, and residents learn Spanish
              in a fun and effective way.
            </p>
            <p>
              Whether you&apos;re a complete beginner or looking to refine your
              fluency, I tailor every lesson to your goals, pace, and interests.
              My classes combine conversation practice, grammar, and real-life
              situations you&apos;ll encounter in the Dominican Republic.
            </p>
            <div className={about.highlight}>
              <div className={about.highlightItem}>
                <span className={about.highlightNumber}>5+</span>
                <span className={about.highlightLabel}>Years teaching</span>
              </div>
              <div className={about.highlightItem}>
                <span className={about.highlightNumber}>A1–C2</span>
                <span className={about.highlightLabel}>All levels</span>
              </div>
              <div className={about.highlightItem}>
                <span className={about.highlightNumber}>🇪🇸🇫🇷🇬🇧</span>
                <span className={about.highlightLabel}>Multilingual</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
