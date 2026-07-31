import { motion } from "framer-motion";
import contact from "../../../data/contact";
import ContactCard from "../../ui/ContactCard/ContactCard";
import "./Contact.css";
import { cardReveal, fadeSoft, fadeUp, staggerContainer } from "../../../animations/variants";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <motion.div 
      className="container"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
 
        <div className="contact-header">
            <motion.div className="contact-eyebrow" variants={fadeUp}>
              <span></span>
              <p>GET IN TOUCH</p>
            </motion.div>
          <div className="contact-heading">

            <motion.h2 variants={fadeUp}>Let's Build Something 
              <span>Great Together.</span></motion.h2>

            <motion.p className="section-description" variants={fadeSoft}>
              Have a project in mind or need a reliable web developer? I'd love
              to hear about it. Send me a message and I'll get back to you within
              24 hours.
            </motion.p>
          </div>
        </div>

        <motion.div className="contact-grid" variants={staggerContainer}>

          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Your Name:</label>
                <input type="text" placeholder="John Okafor" />
              </div>

              <div className="form-group">
                <label>Email Address:</label>
                <input type="email" placeholder="john@company.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Title:</label>
              <input type="text" placeholder="New Website for My Business" />
            </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea rows="6" placeholder="Tell me about your business and what you need..." />
            </div>

            <button className="btn btn-primary contact-submit">
              Send Message →
            </button>

          </form> 

          <motion.div className="contact-info" variants={staggerContainer}>
            <h3>Contact Details</h3>

            {contact.slice(0, 3).map((item, index) => (
              <ContactCard
                key={item.title}
                {...item}
                index={index}
              />
            ))}

            <motion.div className="response-time" variants={fadeSoft}>
              <span></span>
              <p>Typically responds within 24 hours</p>
            </motion.div>

            <div className="social-links">
              {contact.slice(3).map((item) => (
                <ContactCard
                  key={item.title}
                  {...item}
                  social
                />
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