import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = ({ onBookConsult }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Get Involved', href: '/get-involved' },
        { name: 'Journey', href: '/journey' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Blog', href: '/blog' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    const isHomePage = location.pathname === '/';

    const handleLinkClick = (href) => {
        setMobileMenuOpen(false);
        if (href.startsWith('/#') && isHomePage) {
            const id = href.split('#')[1];
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBookClick = () => {
        setMobileMenuOpen(false);
        if (onBookConsult) {
            onBookConsult();
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/images/logo.png"
                            alt="Ian Cares Foundation Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <span className={`text-xl md:text-2xl font-bold tracking-tight ${(isScrolled || !isHomePage) ? 'text-[#1A6B96]' : 'text-slate-900'}`}>
                            IAN CARES
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.href.startsWith('/#') && isHomePage ? (
                                <button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="font-medium hover:text-[#1A6B96] transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="font-medium hover:text-[#1A6B96] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <button
                            onClick={handleBookClick}
                            className="bg-[#FDB913] text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-[#e5a811] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <Phone size={18} />
                            Book Help
                        </button>
                    </div>

                    <button
                        className="md:hidden text-slate-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-white z-[40] flex flex-col justify-center items-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            link.href.startsWith('/#') && isHomePage ? (
                                <button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="text-2xl font-bold text-[#1A6B96]"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-2xl font-bold text-[#1A6B96]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <button
                            onClick={handleBookClick}
                            className="bg-[#FDB913] text-white px-10 py-4 rounded-full font-bold text-xl"
                        >
                            Book a Consult
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
