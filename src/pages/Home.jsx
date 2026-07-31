import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";
import About from "../components/sections/About/About";
import Contact from "../components/sections/Contact/Contact";
import Hero from "../components/sections/Hero/Hero";
import Projects from "../components/sections/Projects/Projects";
import Services from "../components/sections/Services/Services";
import TechMarquee from "../components/sections/TechMarquee/TechMarquee";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TechMarquee />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;