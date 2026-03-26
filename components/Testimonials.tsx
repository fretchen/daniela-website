import React from "react";
import { testimonials, section } from "../layouts/styles";
import quotes from "../content/testimonials.yaml";

export default function Testimonials() {
  return (
    <div id="testimonials" className={section.fullWidth}>
      <div className={section.wrapper}>
        <h2 className={section.heading}>What Students Say</h2>
        <div className={testimonials.grid}>
          {quotes.map((q: { text: string; author: string; origin: string }, i: number) => (
            <div key={i} className={testimonials.card}>
              <span className={testimonials.quoteMark}>&ldquo;</span>
              <p className={testimonials.quote}>{q.text}</p>
              <p className={testimonials.author}>{q.author}</p>
              <p className={testimonials.origin}>{q.origin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
