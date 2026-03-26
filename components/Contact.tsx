import React from "react";
import { contact, section } from "../layouts/styles";

export default function Contact() {
  return (
    <div id="contact" className={section.fullWidthAlt}>
      <div className={section.wrapper}>
        <h2 className={section.heading}>Get in Touch</h2>
        <div className={contact.container}>
          <p className={contact.text}>
            Interested in learning Spanish? Send me a message to discuss your
            goals and schedule a first lesson. I&apos;ll be happy to answer any
            questions!
          </p>
          <div className={contact.buttons}>
            <a
              href="https://wa.me/18091234567"
              target="_blank"
              rel="noopener noreferrer"
              className={contact.whatsapp}
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:teacher@example.com"
              className={contact.email}
            >
              ✉️ Email
            </a>
          </div>
          <p className={contact.location}>
            📍 Las Terrenas, Samaná, Dominican Republic
          </p>
        </div>
      </div>
    </div>
  );
}
