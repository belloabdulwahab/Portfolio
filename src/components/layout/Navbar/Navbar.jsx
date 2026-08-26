import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../../../data/navigation";
import "./Navbar.css";
import logo from "../../../assets/logos/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`} >
            <div className="container navbar-container">
                <a href="/" className="logo">
                    <img src={logo} alt="Bello Abdulwahab Logo" className="logo-image" />
                    <span>Abdulwahab<span className="dot">.</span></span>
                </a> 

                <nav className="nav-links">
                    {navigation.map((item) => (
                        <a key={item.id} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a href="#contact" className="hire-btn">
                    Let's Talk 
                </a>
                <button className="menu-btn" onClick={() => setMenuOpen(true)}>
                    <Menu size={26} />
                </button>
            </div>

            <aside className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <button className="close-btn" onClick={() => setMenuOpen(false)}>
                    <X size={28} />
                </button>

                {navigation.map((item) => (
                    <a key={item.id} href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                    </a>
                ))}

                <a href="#contact" className="hire-btn mobile-btn" onClick={() => setMenuOpen(false)}>
                    Let's Talk 
                </a>
            </aside>

                <div 
                    className={`backdrop ${menuOpen ? "show" : ""}`}
                    onClick={() => setMenuOpen(false)}
                />
        </header>
    );
}

export default Navbar;