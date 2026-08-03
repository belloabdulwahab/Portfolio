import { motion } from "framer-motion";
import "./ContactCard.css";
import { cardReveal } from "../../../animations/variants";

function ContactCard({ 
  icon: Icon, 
  title, 
  value, 
  link,
  social,
  index, 
}) {
  const content = (
    <>
      <div className="contact-icon">
        <Icon size={22} />
      </div>

      <div>
        <h4>{title}</h4>
        <p>{value}</p>
      </div> 
    </>
  );

  if (social) {
    return (
      <motion.a
        variants={cardReveal}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <Icon size={20} />
      </motion.a>
    );
   }
    return (
      <motion.div className="contact-item" variants={cardReveal}>
        <div className="contact-icon">
          <Icon size={22} />
        </div>

        <div className="contact-text">
          <span>{title}</span>
          <a href={link}>{value}</a> 
        </div>
      </motion.div>
    );
}

export default ContactCard;