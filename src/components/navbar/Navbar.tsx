import { useState, useEffect } from 'react';
import './navbar.css';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionId);
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
                <div className='custom-nav-btn-container'><button className='custom-nav-btn'>
                    <a className="custom-nav-btn-text">Contact Me</a>
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
                    <div className='custom-nav-btn-container'><button className='custom-nav-btn'>
                        <a className="custom-nav-btn-text">Contact Me</a>
                    </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
