import { about, section } from "../layouts/styles";
import rawSite from "../content/site.yaml";
import type { SiteContent } from "../content/types";

const site = rawSite as SiteContent;

export default function About() {
  return (
    <div id="about" className={section.fullWidth}>
      <div className={section.wrapper}>
        <h2 className={section.heading}>{site.about.title}</h2>
        <div className={about.content}>
          <div className={about.photoPlaceholder}>📷</div>
          <div className={about.text}>
            {site.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className={about.highlight}>
              {site.about.highlights.map((h, i) => (
                <div key={i} className={about.highlightItem}>
                  <span className={about.highlightNumber}>{h.value}</span>
                  <span className={about.highlightLabel}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
