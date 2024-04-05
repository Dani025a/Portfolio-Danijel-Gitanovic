import { useState, useEffect } from 'react';
import './navbar.css';
import ContactPopup from '../contactPopup/ContactPopup';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showContactPopup, setShowContactPopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ['about', 'skills', 'timeline', 'work'];
            let currentSection = '';

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const { top, bottom } = section.getBoundingClientRect();
                    const threshold = window.innerHeight * 0.25;
                    if (top <= threshold && bottom >= threshold) {
                        currentSection = sectionId;
                        break;
                    }
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }

            setScrolled(scrollPosition > 0);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleContactPopup = () => {
        setShowContactPopup(!showContactPopup);
        setIsMobileMenuOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="custom-nav-container">
                <a href="#portfolio" className="custom-nav-logo">PORTFOLIO</a>
                <ul className="custom-nav-menu">
                    <li className="custom-nav-item">
                        <a href="#about" onClick={() => scrollToSection('about')} className={`custom-nav-links ${activeSection === 'about' ? 'active' : ''}`}>ABOUT ME</a>
                    </li>
                    <li className="custom-nav-item">
                        <a href="#skills" onClick={() => scrollToSection('skills')} className={`custom-nav-links ${activeSection === 'skills' ? 'active' : ''}`}>PROFESSIONAL SKILLS</a>
                    </li>
                    <li className="custom-nav-item">
                        <a href="#timeline" onClick={() => scrollToSection('timeline')} className={`custom-nav-links ${activeSection === 'timeline' ? 'active' : ''}`}>TIMELINE</a>
                    </li>
                    <li className="custom-nav-item">
                        <a href="#work" onClick={() => scrollToSection('work')} className={`custom-nav-links ${activeSection === 'work' ? 'active' : ''}`}>WORK</a>
                    </li>
                </ul>
                <div className='custom-nav-btn-container'>
                <button className={`custom-nav-btn ${showContactPopup ? 'active' : ''}`} onClick={toggleContactPopup}>
                    <span className="custom-nav-btn-text">Contact Me</span>
                </button>
                </div>
                <div className={`custom-hamburger-icon`} onClick={toggleMobileMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`custom-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="custom-mobile-nav-menu">
                        <li className="custom-nav-item">
                            <a href="#about" onClick={() => scrollToSection('about')} className={`custom-nav-links ${activeSection === 'about' ? 'active' : ''}`}>ABOUT ME</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="#skills" onClick={() => scrollToSection('skills')} className={`custom-nav-links ${activeSection === 'skills' ? 'active' : ''}`}>PROFESSIONAL SKILLS</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="#timeline" onClick={() => scrollToSection('timeline')} className={`custom-nav-links ${activeSection === 'timeline' ? 'active' : ''}`}>TIMELINE</a>
                        </li>
                        <li className="custom-nav-item">
                            <a href="#work" onClick={() => scrollToSection('work')} className={`custom-nav-links ${activeSection === 'work' ? 'active' : ''}`}>WORK</a>
                        </li>
                    </ul>
                    <div className='custom-nav-btn-container'>
                <button className={`custom-nav-btn ${showContactPopup ? 'active' : ''}`} onClick={toggleContactPopup}>
                    <span className="custom-nav-btn-text">Contact Me</span>
                </button>
                </div>
                </div>
            </div>
            {showContactPopup && <ContactPopup onClose={toggleContactPopup} />}
        </nav>
    );
};

export default NavBar;