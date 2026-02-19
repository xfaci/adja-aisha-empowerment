import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Services', to: 'services', type: 'scroll' },
        { name: 'Réalisations', to: '/realisations', type: 'router' },
        { name: 'Histoire', to: '/histoire', type: 'router' },
        { name: 'Contact', to: 'contact', type: 'scroll' },
    ];

    const NavLink = ({ link }: { link: typeof navLinks[0] }) => {
        const baseClass = "text-sm font-medium text-white/70 hover:text-white transition-colors duration-300";

        if (link.type === 'scroll' && isHome) {
            return (
                <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className={`${baseClass} cursor-pointer`}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {link.name}
                </ScrollLink>
            );
        }

        return (
            <RouterLink
                to={link.type === 'scroll' ? `/#${link.to}` : link.to}
                className={baseClass}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {link.name}
            </RouterLink>
        );
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <RouterLink to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 md:w-12 md:h-12">
                                <img
                                    src="/logo.svg"
                                    alt="Hadja Aisha Empowerment"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <span className="font-bold text-lg text-white group-hover:text-[--color-brand-gold] transition-colors duration-300">
                                    HADJA AISHA
                                </span>
                            </div>
                        </RouterLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} link={link} />
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <ScrollLink
                                to="quote"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="inline-flex items-center gap-2 bg-[--color-brand-gold] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-300 cursor-pointer"
                            >
                                Devis gratuit
                            </ScrollLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black"
                    >
                        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
                            <nav className="flex flex-col items-center gap-6">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {link.type === 'scroll' && isHome ? (
                                            <ScrollLink
                                                to={link.to}
                                                smooth={true}
                                                duration={600}
                                                offset={-80}
                                                className="text-3xl font-light text-white hover:text-[--color-brand-gold] transition-colors cursor-pointer"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </ScrollLink>
                                        ) : (
                                            <RouterLink
                                                to={link.type === 'scroll' ? `/#${link.to}` : link.to}
                                                className="text-3xl font-light text-white hover:text-[--color-brand-gold] transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </RouterLink>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-10"
                            >
                                <ScrollLink
                                    to="quote"
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    className="inline-flex items-center gap-2 bg-[--color-brand-gold] text-black font-semibold px-8 py-3 rounded-full cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Demander un devis
                                </ScrollLink>
                            </motion.div>

                            {/* Contact info in mobile menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 text-center"
                            >
                                <a
                                    href="tel:+224613355007"
                                    className="text-white/60 hover:text-[--color-brand-gold] transition-colors"
                                >
                                    +224 613 35 50 07
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
