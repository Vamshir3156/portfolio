import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ENV = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    console.log("Service:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    try {
      await emailjs.sendForm(
        ENV.SERVICE_ID,
        ENV.TEMPLATE_ID,
        formRef.current,
        ENV.PUBLIC_KEY
      );
      alert("✅ Message sent! I’ll get back to you soon.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <h2 id="contact" className={styles.sectionTitle}>
        Contact
      </h2>
      <p className={styles.contactText}>
        Feel free to reach out to me for collaboration or opportunities!
      </p>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:rvamshi3156@gmail.com">rvamshi3156@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <a href="tel:+14697089711">+1 (469)-798-9711</a>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Dallas, TX, USA</span>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/vamshi-ratna-623418208/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/Vamshir3156"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          className={styles.contactForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="reply_to"
            type="email"
            placeholder="Your Email"
            required
          />
          <input name="subject" type="text" placeholder="Subject" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />

          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
