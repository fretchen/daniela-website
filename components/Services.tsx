import React from "react";
import { services, section } from "../layouts/styles";

const lessons = [
  {
    icon: "👤",
    title: "Private Lessons",
    description:
      "One-on-one sessions tailored to your level and goals. Learn at your own pace with personalized attention and flexible scheduling.",
    levels: "A1 – C2",
  },
  {
    icon: "👥",
    title: "Group Lessons",
    description:
      "Learn with others in small groups of 2–5 students. A fun and social way to practice conversation and build confidence.",
    levels: "A1 – B2",
  },
  {
    icon: "💻",
    title: "Online Lessons",
    description:
      "Study from anywhere with live video sessions. Perfect for those who prefer learning from home or are not yet in Las Terrenas.",
    levels: "A1 – C2",
  },
];

export default function Services() {
  return (
    <div id="classes" className={section.fullWidthAlt}>
      <div className={section.wrapper}>
        <h2 className={section.heading}>Classes</h2>
        <div className={services.grid}>
          {lessons.map((lesson) => (
            <div key={lesson.title} className={services.card}>
              <span className={services.icon}>{lesson.icon}</span>
              <h3 className={services.cardTitle}>{lesson.title}</h3>
              <p className={services.cardText}>{lesson.description}</p>
              <span className={services.levels}>{lesson.levels}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
