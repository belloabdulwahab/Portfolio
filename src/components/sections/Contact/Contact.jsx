import { useState } from "react";
import { motion } from "framer-motion";
import contact from "../../../data/contact";
import ContactCard from "../../ui/ContactCard/ContactCard";
import "./Contact.css";
import {
  cardReveal,
  fadeSoft,
  fadeUp,
  staggerContainer,
} from "../../../animations/variants";

const initialForm = {
  name: "",
  email: "",
  title: "",
  message: "",
  website: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);

  const [status, setStatus] = useState({
    type: "", 
    message: "", 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear previous status when the user starts editing again
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    const name = formData.name.trim();
    const email = formData.email.trim();
    const title = formData.title.trim();
    const message = formData.message.trim();

    // Frontend Validation
    if (!name || !email || !title || !message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    if (name.length < 5 || name.length > 50) {
      setStatus({
        type: "error",
        message: "Your name must be between 5 and 50 characters.",
      });
      return;
    }

    if (title.length < 5 || title.length > 100) {
      setStatus({
        type: "error",
        message: "Project title must be between 5 and 100 characters.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          name,
          email,
          title,
          message,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: data.message || 
        "Thanks for reaching out! Your message has been sent successfully!",
      });

      setFormData(initialForm)
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contact-header">
          <motion.div className="contact-eyebrow" variants={fadeUp}>
            <span></span>
            <p>GET IN TOUCH</p>
          </motion.div>

          <div className="contact-heading">
            <motion.h2 variants={fadeUp}>
              Let's Build Something
              <span>Great Together.</span>
            </motion.h2>

            <motion.p className="section-description" variants={fadeSoft}>
              Have a project in mind or need a reliable web developer? I'd love
              to hear about it. Send me a message and I'll get back to you
              within 24 hours.
            </motion.p>
          </div>
        </div>

        <motion.div className="contact-grid" variants={staggerContainer}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
              className="honeypot"
              aria-hidden="true"
            />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name:</label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Jimoh Abdullahi"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={5}
                  maxLength={50}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address:</label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="jimoh@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-title">Title:</label>

              <input
                type="text"
                name="title"
                id="contact-title"
                placeholder="E-Commerce Website..."
                value={formData.title}
                onChange={handleChange}
                minLength={5}
                maxLength={100}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message:</label>

              <textarea
                rows="6"
                id="contact-message"
                name="message"
                placeholder="Tell me about your business and what you need..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.message && (
              <div
                className={`form-status ${
                  status.type === "success" ? "success" : "error"
                }`}
                role={status.type === "success" ? "status" : "alert"}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </form>

          <motion.div className="contact-info" variants={staggerContainer}>
            <h3>Contact Details</h3>

            {contact.slice(0, 3).map((item, index) => (
              <ContactCard key={item.title} {...item} index={index} />
            ))}

            <motion.div className="response-time" variants={fadeSoft}>
              <span></span>
              <p>Typically responds within 24 hours</p>
            </motion.div>

            <div className="social-links">
              {contact.slice(3).map((item) => (
                <ContactCard key={item.title} {...item} social />
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-cta" variants={cardReveal}>
            <h4>Ready to get Started?</h4>

            <p>Most projects begin within 1 week of enquiry.</p>

            <div className="availability">
              <span></span>
              <p>Accepting new clients</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;