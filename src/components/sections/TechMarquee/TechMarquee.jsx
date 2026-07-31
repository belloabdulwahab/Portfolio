import technologies from "../../../data/technologies";
import "./TechMarquee.css";

function Row({ reverse = false }) {
    const items = [...technologies, ...technologies];

    return (
        <div className={`marquee ${reverse ? "reverse" : ""}`}>
            <div className="marquee-track">
                {items.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <div key={`${tech.name}-${index}`} 
                            className="tech-pill" >
                                <Icon className="tech-icon" 
                                    style={{ color: tech.color}} />
                                <span>{tech.name}</span>
                        </div>
                    );
                })}
            </div> 
        </div>
    );
}

function TechMarquee() {
    return (
        <section className="tech-section">
            <div className="tech-marquee-wrapper">
                <Row />
                <Row reverse />
            </div>
        </section>
    );
}

export default TechMarquee;