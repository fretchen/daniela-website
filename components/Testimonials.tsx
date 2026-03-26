import { testimonials, section } from "../layouts/styles";
import rawQuotes from "../content/testimonials.yaml";
import type { Testimonial } from "../content/types";

const quotes = rawQuotes as Testimonial[];

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
