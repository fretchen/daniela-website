import { services, section } from "../layouts/styles";
import rawLessons from "../content/services.yaml";
import type { Lesson } from "../content/types";

const lessons = rawLessons as Lesson[];

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
