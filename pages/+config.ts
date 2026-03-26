import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";

export default {
  Layout,
  title: "Spanish Lessons in Las Terrenas | [Teacher Name]",
  description:
    "Private and group Spanish lessons in Las Terrenas, Dominican Republic. All levels A1–C2. In-person and online.",
  prerender: true,
  extends: [vikeReact],
} satisfies Config;
