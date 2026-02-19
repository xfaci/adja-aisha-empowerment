import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const { language, setLanguage, t, languageNames, languageFlags } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Close lang menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setIsLangMenuOpen(false);
        if (isLangMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isLangMenuOpen]);

    const navLinks = [
        { name: t.nav.services, to: 'services', type: 'scroll' },
        { name: t.nav.realizations, to: '/realisations', type: 'router' },
        { name: t.nav.history, to: '/histoire', type: 'router' },
        { name: t.nav.contact, to: 'contact', type: 'scroll' },
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

    const languages: Language[] = ['fr', 'en', 'zh'];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-[#191F31]/90 backdrop-blur-xl border-b border-white/5'
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
                                    alt="HADJA AISHA EMPOWERMENT"
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

                        {/* Right side - Language Selector + CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            {/* Language Selector */}
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsLangMenuOpen(!isLangMenuOpen);
                                    }}
                                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm text-white/70 hover:text-white"
                                >
                                    <Globe size={16} />
                                    <span>{languageFlags[language]}</span>
                                </button>

                                <AnimatePresence>
                                    {isLangMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-2 py-2 w-40 bg-[#1E2538] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                        >
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setLanguage(lang);
                                                        setIsLangMenuOpen(false);
                                                    }}
                                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                                        language === lang
                                                            ? 'bg-[--color-brand-gold]/10 text-[--color-brand-gold]'
                                                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                                                    }`}
                                                >
                                                    <span className="text-lg">{languageFlags[lang]}</span>
                                                    <span>{languageNames[lang]}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* CTA Button */}
                            <ScrollLink
                                to="quote"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="inline-flex items-center gap-2 bg-[--color-brand-gold] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-300 cursor-pointer"
                            >
                                {t.nav.quote}
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
                        className="fixed inset-0 z-40 bg-[#191F31]"
                    >
                        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
                            {/* Language Selector - Mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex gap-3 mb-10"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                            language === lang
                                                ? 'bg-[--color-brand-gold]/10 border-[--color-brand-gold] text-[--color-brand-gold]'
                                                : 'border-white/10 text-white/60 hover:border-white/20'
                                        }`}
                                    >
                                        <span className="text-lg">{languageFlags[lang]}</span>
                                        <span className="text-sm">{languageNames[lang]}</span>
                                    </button>
                                ))}
                            </motion.div>

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
                                    {t.nav.requestQuote}
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
