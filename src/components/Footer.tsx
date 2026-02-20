import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

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
                    className="text-white/50 hover:text-white text-sm cursor-pointer transition-colors"
                >
                    {children}
                </ScrollLink>
            );
        }
        return (
            <RouterLink
                to={`/#${to}`}
                className="text-white/50 hover:text-white text-sm transition-colors"
            >
                {children}
            </RouterLink>
        );
    };

    return (
        <footer className="relative bg-[#0A0D12] border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <RouterLink to="/" className="inline-flex items-center gap-3 mb-4">
                            <img src="/logo.svg" alt="HADJA AISHA EMPOWERMENT" className="w-10 h-10" />
                            <div>
                                <span className="font-bold text-base md:text-lg text-white block leading-tight">HADJA AISHA</span>
                                <span className="font-semibold text-xs text-[#FFD100]">EMPOWERMENT</span>
                            </div>
                        </RouterLink>
                        <p className="text-white/40 text-sm max-w-sm mb-4 leading-relaxed">
                            {t.footer.description}
                        </p>

                        {/* Guinea flag colors */}
                        <div className="flex gap-1">
                            <div className="w-8 h-1 bg-[#E31B23] rounded-full" />
                            <div className="w-8 h-1 bg-[#FFD100] rounded-full" />
                            <div className="w-8 h-1 bg-[#009E49] rounded-full" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-white text-sm md:text-base mb-4">{t.footer.navigation}</h4>
                        <ul className="space-y-2.5">
                            <li>
                                <NavScrollLink to="services">{t.nav.services}</NavScrollLink>
                            </li>
                            <li>
                                <RouterLink to="/realisations" className="text-white/50 hover:text-white text-sm transition-colors">
                                    {t.nav.realizations}
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/histoire" className="text-white/50 hover:text-white text-sm transition-colors">
                                    {t.nav.history}
                                </RouterLink>
                            </li>
                            <li>
                                <NavScrollLink to="contact">{t.nav.contact}</NavScrollLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <h4 className="font-bold text-white text-sm md:text-base mb-4">{t.footer.contactTitle}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:+224613355007" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <Phone size={14} className="text-[#009E49]" />
                                    </div>
                                    <span>+224 613 35 50 07</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:kalifakeita470@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <Mail size={14} className="text-[#FFD100]" />
                                    </div>
                                    <span className="break-all">kalifakeita470@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-white/50 text-sm">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin size={14} className="text-[#E31B23]" />
                                    </div>
                                    <span>Rue D1258, Villa Michel Collet, Donka, Conakry</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 md:mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-white/30 text-xs md:text-sm text-center md:text-left">
                        © {currentYear} HADJA AISHA EMPOWERMENT. {t.footer.copyright}
                    </p>
                    <div className="flex items-center gap-2 text-white/30 text-xs md:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#009E49]" />
                        <span>Conakry, Guinée</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
