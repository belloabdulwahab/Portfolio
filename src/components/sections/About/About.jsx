import { motion } from "framer-motion";
import { fadeSoft, fadeUp, scaleReveal, staggerContainer } from "../../../animations/variants";
import profile from "../../../assets/images/profile/profile.jpeg";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <motion.div 
      className="container about-container"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} >

        <motion.div className="about-image" variants={scaleReveal}>
          <img src={profile} alt="Bello Abdulwahab" />
        </motion.div>

        <motion.div className="about-content" variants={fadeUp}>
 
          <motion.div className="section-eyebrow" variants={fadeUp}>
            <span></span>
            <p>ABOUT ME</p> 
          </motion.div>

          <motion.h2 variants={fadeUp}>
            Building Digital Experiences That Help Businesses Grow.
          </motion.h2>

          <motion.p variants={fadeSoft}>
            I'm Bello Abdulwahab, a freelance web developer based in Lagos, Nigeria. I
            build professional websites and custom web applications that help businesses
            establish credibility, attract customers, and grow online.
          </motion.p>

          <motion.p variants={fadeSoft}>
            Whether you're a school, clinic, law firm, restaurant, or growing business,
            I build digital solutions tailored to your goals—not generic templates. My
            focus is creating websites that look premium, perform fast, and generate
            real business value.
          </motion.p>

          <motion.ul className="about-features" variants={fadeSoft}>
            <li><span>✔</span> Responsive & Mobile-First Development</li>
            <li><span>✔</span> Modern UI & User Experience</li>
            <li><span>✔</span> Custom Web Applications</li>
            <li><span>✔</span> SEO-Friendly Website Structure</li>
            <li><span>✔</span> Secure Authentication Systems</li>
            <li><span>✔</span> Payment Gateway Integration</li>
            <li><span>✔</span> Performance Optimization</li>
            <li><span>✔</span> Ongoing Website Maintenance & Support</li>
          </motion.ul>

        </motion.div>

      </motion.div>
    </section>
  );
}

export default About;