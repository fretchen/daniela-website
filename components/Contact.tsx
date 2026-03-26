import React from "react";
import { contact, section } from "../layouts/styles";
import site from "../content/site.yaml";

export default function Contact() {
  return (
    <div id="contact" className={section.fullWidthAlt}>
      <div className={section.wrapper}>
        <h2 className={section.heading}>Get in Touch</h2>
        <div className={contact.container}>
          <p className={contact.text}>{site.contact.intro}</p>
          <div className={contact.buttons}>
            <a
              href={`https://wa.me/${site.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={contact.whatsapp}
            >
              💬 WhatsApp
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className={contact.email}
            >
              ✉️ Email
            </a>
          </div>
          <p className={contact.location}>
            📍 {site.contact.location}
          </p>
        </div>
      </div>
    </div>
  );
}
