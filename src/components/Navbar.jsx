import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close menu on link click
    };

    return (
        <>
            <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
            <nav className="navbar">
                <h1 className="navbar-logo">My Website</h1>
                <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
                <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                    <li><a href="#art" onClick={handleLinkClick}>Art</a></li>
                    <li><a href="#music" onClick={handleLinkClick}>Music</a></li>
                    <li><a href="#blog" onClick={handleLinkClick}>Blog</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
