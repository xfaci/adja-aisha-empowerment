import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#141826] border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <RouterLink to="/" className="flex items-center gap-3 mb-4">
                            <img src="/logo.svg" alt="Hadja Aisha" className="w-10 h-10" />
                            <span className="font-bold text-lg text-white">HADJA AISHA</span>
                        </RouterLink>
                        <p className="text-white/40 text-sm max-w-sm mb-6">
                            Solutions professionnelles en énergie solaire, sécurité électronique et construction en Guinée.
                        </p>
                        <div className="flex gap-1">
                            <div className="w-8 h-1 bg-[--color-brand-red] rounded-full"></div>
                            <div className="w-8 h-1 bg-[--color-brand-gold] rounded-full"></div>
                            <div className="w-8 h-1 bg-[--color-brand-green] rounded-full"></div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <ScrollLink
                                    to="services"
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    className="text-white/40 hover:text-white text-sm cursor-pointer transition-colors"
                                >
                                    Services
                                </ScrollLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/realisations"
                                    className="text-white/40 hover:text-white text-sm transition-colors"
                                >
                                    Réalisations
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/histoire"
                                    className="text-white/40 hover:text-white text-sm transition-colors"
                                >
                                    Histoire
                                </RouterLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    className="text-white/40 hover:text-white text-sm cursor-pointer transition-colors"
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
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
                        © {currentYear} HADJA AISHA EMPOWERMENT. Tous droits réservés.
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
