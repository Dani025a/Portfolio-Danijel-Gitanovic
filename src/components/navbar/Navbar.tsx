import { useState, useEffect } from 'react';
import './navbar.css';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    useEffect(() => {
        const sections = ['about', 'skills', 'work'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 }
        );

        sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <a href="#portfolio" className="nav-logo">PORTFOLIO</a>
            <ul className="nav-menu">
            <li className="nav-item">
                    <a href="#about" onClick={() => scrollToSection('about')} className={`nav-links ${activeSection === 'about' ? 'active' : ''}`}>ABOUT ME</a>
                </li>
                <li className="nav-item">
                    <a href="#skills" onClick={() => scrollToSection('skills')} className={`nav-links ${activeSection === 'skills' ? 'active' : ''}`}>PROFESSIONAL SKILLS</a>
                </li>
                <li className="nav-item">
                    <a href="#work" onClick={() => scrollToSection('work')} className={`nav-links ${activeSection === 'work' ? 'active' : ''}`}>WORK</a>
                </li>
            </ul>
            <button className='nav-btn'>
                    <a href="#contact" className="nav-btn-text">Contact me</a>
                </button>
            <div className={`hamburger-icon`} onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-menu">
                <li className="nav-item">
                    <a href="#about" onClick={() => scrollToSection('about')} className={`nav-links ${activeSection === 'about' ? 'active' : ''}`}>ABOUT ME</a>
                </li>
                <li className="nav-item">
                    <a href="#skills" onClick={() => scrollToSection('skills')} className={`nav-links ${activeSection === 'skills' ? 'active' : ''}`}>PROFESSIONAL SKILLS</a>
                </li>
                <li className="nav-item">
                    <a href="#work" onClick={() => scrollToSection('work')} className={`nav-links ${activeSection === 'work' ? 'active' : ''}`}>WORK</a>
                </li>
                </ul>
                <button className='nav-btn'>
                <a href="#contact" className="nav-btn-text">Contact me</a>                
                </button>
            </div>
          </div>
        </nav>
    );
};

export default NavBar;
