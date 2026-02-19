import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext';

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
                    className="text-white/40 hover:text-white text-sm cursor-pointer transition-colors"
                >
                    {children}
                </ScrollLink>
            );
        }
        return (
            <RouterLink
                to={`/#${to}`}
                className="text-white/40 hover:text-white text-sm transition-colors"
            >
                {children}
            </RouterLink>
        );
    };

    return (
        <footer className="bg-[#141826] border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <RouterLink to="/" className="flex items-center gap-3 mb-4">
                            <img src="/logo.svg" alt="HADJA AISHA EMPOWERMENT" className="w-10 h-10" />
                            <span className="font-bold text-lg text-white">HADJA AISHA EMPOWERMENT</span>
                        </RouterLink>
                        <p className="text-white/40 text-sm max-w-sm mb-6">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-1">
                            <div className="w-8 h-1 bg-[--color-brand-red] rounded-full"></div>
                            <div className="w-8 h-1 bg-[--color-brand-gold] rounded-full"></div>
                            <div className="w-8 h-1 bg-[--color-brand-green] rounded-full"></div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{t.footer.navigation}</h4>
                        <ul className="space-y-3">
                            <li>
                                <NavScrollLink to="services">
                                    {t.nav.services}
                                </NavScrollLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/realisations"
                                    className="text-white/40 hover:text-white text-sm transition-colors"
                                >
                                    {t.nav.realizations}
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/histoire"
                                    className="text-white/40 hover:text-white text-sm transition-colors"
                                >
                                    {t.nav.history}
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
                    <div>
                        <h4 className="font-semibold text-white mb-4">{t.footer.contactTitle}</h4>
                        <ul className="space-y-3 text-sm text-white/40">
                            <li>
                                <a href="tel:+224613355007" className="hover:text-white transition-colors">
                                    +224 613 35 50 07
                                </a>
                            </li>
                            <li>
                                <a href="mailto:kalifakeita470@gmail.com" className="hover:text-white transition-colors">
                                    kalifakeita470@gmail.com
                                </a>
                            </li>
                            <li>
                                Villa Michel Collet, 47 Rue Syli,<br />
                                Conakry, Guinée
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">
                        © {currentYear} HADJA AISHA EMPOWERMENT. {t.footer.copyright}
                    </p>
                    <p className="text-white/30 text-xs">
                        Conakry, Guinée
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
