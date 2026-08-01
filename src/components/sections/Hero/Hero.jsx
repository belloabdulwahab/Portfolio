import { ArrowRight, Download } from "lucide-react";
import "./Hero.css";
import heroImage from "../../../assets/images/hero/hero-bg5.jpg";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <img 
                src={heroImage} 
                alt="Developer Workspace"  
                className="hero-bg" />

            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-badge">
                        <span className="badge-dot"></span>
                        Available for Freelance 
                    </span>
                    <h1>Websites That <br /> 
                        <span>Win Clients.</span></h1>
                    <p className="hero-description">
                        I build fast, modern websites and custom web applications
                        that help businesses establish credibility, attract more 
                        customers, and grow online.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Work 
                            <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Let's Talk 
                            <Download size={18} />
                        </a>
                    </div>

                    <div className="hero-trust">
                        <span className="active">Available for Freelance</span>
                        <span>Lagos, Nigeria</span>
                        <span>Real Client Projects</span>
                    </div>
                    
                </div>
            </div>

        </section>
    );
}

export default Hero;