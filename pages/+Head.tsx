import rawSite from "../content/site.yaml";
import type { SiteContent } from "../content/types";

const site = rawSite as SiteContent;

export default function HeadDefault() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={site.seo.description} />
      <meta property="og:title" content={site.seo.ogTitle} />
      <meta property="og:description" content={site.seo.ogDescription} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={site.seo.canonical} />
    </>
  );
}
