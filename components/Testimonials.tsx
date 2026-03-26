import React from "react";
import { testimonials, section } from "../layouts/styles";

const quotes = [
  {
    text: "I started with zero Spanish and after a few months of lessons I can hold real conversations. The classes are fun, practical, and perfectly adapted to my level.",
    author: "[Student Name]",
    origin: "France",
  },
  {
    text: "The best part is how the lessons focus on situations I actually encounter in daily life here in Las Terrenas. I feel so much more confident now.",
    author: "[Student Name]",
    origin: "United States",
  },
  {
    text: "Patient, encouraging, and well-prepared. Every lesson is structured but flexible enough to go where the conversation takes us. Highly recommended!",
    author: "[Student Name]",
    origin: "Canada",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className={section.fullWidth}>
      <div className={section.wrapper}>
        <h2 className={section.heading}>What Students Say</h2>
        <div className={testimonials.grid}>
          {quotes.map((q, i) => (
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
