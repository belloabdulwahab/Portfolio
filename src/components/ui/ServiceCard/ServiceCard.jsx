import { motion } from "framer-motion";
import "./ServiceCard.css";
import { cardReveal } from "../../../animations/variants";

function ServiceCard({ 
  icon: Icon, 
  title, 
  description,
  features = [],
  index, 
}) {
  return (
    <motion.article 
    className="service-card" 
    variants={cardReveal}
    >

      <div className="service-icon">
        <Icon size={28} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
      
      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul> 
      )}

    </motion.article>
  );
}

export default ServiceCard; 