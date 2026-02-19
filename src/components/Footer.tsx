import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const currentYear = new Date().getFullYear();

    const NavScrollLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
        if (isHome) {
            return (
                <ScrollLink
                    to={to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="group flex items-center gap-2 text-white/50 hover:text-white text-sm cursor-pointer transition-all duration-300"
                >
                    <span>{children}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </ScrollLink>
            );
        }
        return (
            <RouterLink
                to={`/#${to}`}
                className="group flex items-center gap-2 text-white/50 hover:text-white text-sm transition-all duration-300"
            >
                <span>{children}</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </RouterLink>
        );
    };

    return (
        <footer className="relative bg-[#0A0D12] overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-t from-[#FFD100]/10 to-transparent rounded-full blur-[150px] opacity-30" />

            <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Brand - Takes more space */}
                    <div className="md:col-span-5">
                        <RouterLink to="/" className="inline-flex items-center gap-4 mb-6 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FFD100]/20 rounded-xl blur-xl group-hover:bg-[#FFD100]/30 transition-colors" />
                                <img src="/logo.svg" alt="HADJA AISHA EMPOWERMENT" className="relative w-12 h-12" />
                            </div>
                            <div>
                                <span className="font-black text-xl text-white block leading-tight">HADJA AISHA</span>
                                <span className="font-bold text-sm text-[#FFD100]">EMPOWERMENT</span>
                            </div>
                        </RouterLink>
                        <p className="text-white/40 text-base max-w-md mb-8 leading-relaxed">
                            {t.footer.description}
                        </p>

                        {/* Guinea flag colors with glow */}
                        <div className="flex gap-2">
                            {[
                                { color: '#E31B23', shadow: 'rgba(227,27,35,0.5)' },
                                { color: '#FFD100', shadow: 'rgba(255,209,0,0.5)' },
                                { color: '#009E49', shadow: 'rgba(0,158,73,0.5)' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scaleY: 1.5 }}
                                    className="w-10 h-1.5 rounded-full"
                                    style={{
                                        backgroundColor: item.color,
                                        boxShadow: `0 0 20px ${item.shadow}`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-white text-lg mb-6">{t.footer.navigation}</h4>
                        <ul className="space-y-4">
                            <li>
                                <NavScrollLink to="services">
                                    {t.nav.services}
                                </NavScrollLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/realisations"
                                    className="group flex items-center gap-2 text-white/50 hover:text-white text-sm transition-all duration-300"
                                >
                                    <span>{t.nav.realizations}</span>
                                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/histoire"
                                    className="group flex items-center gap-2 text-white/50 hover:text-white text-sm transition-all duration-300"
                                >
                                    <span>{t.nav.history}</span>
                                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </RouterLink>
                            </li>
                            <li>
                                <NavScrollLink to="contact">
                                    {t.nav.contact}
                                </NavScrollLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <h4 className="font-bold text-white text-lg mb-6">{t.footer.contactTitle}</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+224613355007"
                                    className="group flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#009E49]/20 group-hover:border-[#009E49]/30 transition-all">
                                        <Phone size={18} className="text-[#009E49]" />
                                    </div>
                                    <span className="text-sm font-medium">+224 613 35 50 07</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:kalifakeita470@gmail.com"
                                    className="group flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FFD100]/20 group-hover:border-[#FFD100]/30 transition-all">
                                        <Mail size={18} className="text-[#FFD100]" />
                                    </div>
                                    <span className="text-sm font-medium">kalifakeita470@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/50">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={18} className="text-[#E31B23]" />
                                    </div>
                                    <span className="text-sm font-medium leading-relaxed">
                                        Villa Michel Collet, 47 Rue Syli,<br />
                                        Conakry, Guinée
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">
                        © {currentYear} <span className="text-white/50">HADJA AISHA EMPOWERMENT</span>. {t.footer.copyright}
                    </p>
                    <div className="flex items-center gap-2 text-white/30 text-sm">
                        <span className="w-2 h-2 rounded-full bg-[#009E49] animate-pulse" />
                        <span>Conakry, Guinée</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
