import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // If we are on home page, use scroll effect. If on other pages, always solid header? 
            // Actually, consistent behavior is better.
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        return location.pathname === path ? "text-secondary font-bold" : "text-primary font-semibold hover:text-secondary";
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="SS Tours and Travels" className="h-20 md:h-28 object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`${isActive(link.path)} transition duration-300 relative group`}
                            >
                                {link.name}
                                <span className={`absolute left-0 -bottom-1 h-0.5 bg-secondary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                        <a href="tel:9948058679" className="flex items-center gap-2 bg-secondary text-primary px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <FaPhoneAlt size={14} /> Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary focus:outline-none p-2"
                        >
                            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 top-full' : 'opacity-0 -top-400 pointer-events-none'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block w-full text-center px-3 py-3 rounded-md text-lg ${location.pathname === link.path ? 'text-secondary font-bold bg-gray-50' : 'text-gray-800 font-medium hover:text-secondary hover:bg-gray-50 bg-gray-50/50 mb-1'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:9948058679" className="flex w-full justify-center items-center gap-2 bg-secondary text-primary px-5 py-3 mt-4 rounded-full font-bold shadow-md">
                        <FaPhoneAlt /> Call Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
