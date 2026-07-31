import { motion } from "framer-motion";
import services from "../../../data/services";
import ServiceCard from "../../ui/ServiceCard/ServiceCard";
import "./Services.css";
import { fadeSoft, fadeUp, staggerContainer } from "../../../animations/variants";

function Services() {
  return (
    <section className="services section" id="services">

      <motion.div 
      className="container"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} >

        <motion.div className="section-eyebrow" variants={fadeUp}>
          <span></span>
          <p>SERVICES</p>
        </motion.div>

        <motion.h2 variants={fadeUp}>
          Helping businesses build a stronger digital presence.
        </motion.h2>

        <motion.p className="section-description" variants={fadeSoft}>
          From business websites to custom web applications, I create
          solutions that are fast, scalable, and built to support your
          business goals.
        </motion.p>

        <motion.div className="services-grid" variants={staggerContainer}>

          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))} 
 
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Services;