import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    const year = new Date().getFullYear();
/* Building modern websites and web applications
                        that help businesses grow online. */
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span>BA</span>
                            <h3>Abdulwahab.</h3>
                        </div>
                        <p>Building the web , one Business at a time.</p>
                    </div>

                    <nav className="footer-nav">
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#projects">Work</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <a href="#hero" className="footer-top-btn">
                        <ArrowUp size={18} />
                    </a>
                </div>
                <div className="footer-bottom">
                    <p>© {year} Bello Abdulwahab. All rights reserved.</p>
                    <div className="footer-socials">
                        <a href="https://wa.me/2349070602504">
                            <FaWhatsapp size={20} />
                        </a>
                        <a href="http://github.com/belloabdulwahab">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/bello-abdulwahab-5600b0424">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://x.com/bao2dwrld_?s=21">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer> 
    );
}

export default Footer;