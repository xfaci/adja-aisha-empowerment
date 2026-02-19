import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 bg-black">
                {/* Gradient orbs - subtle */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[--color-brand-gold]/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[--color-brand-green]/5 rounded-full blur-[150px]"></div>
            </div>

            {/* Guinea flag accent - left side */}
            <div className="hidden lg:flex flex-col fixed left-6 top-1/2 -translate-y-1/2 z-20 gap-2">
                <div className="w-1 h-12 bg-[--color-brand-red] rounded-full"></div>
                <div className="w-1 h-12 bg-[--color-brand-gold] rounded-full"></div>
                <div className="w-1 h-12 bg-[--color-brand-green] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 bg-[--color-brand-green] rounded-full animate-pulse"></span>
                        <span className="text-sm text-white/80">Leader en Guinée</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                    >
                        Énergie solaire,{' '}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-brand-gold] to-[--color-brand-green]">
                            sécurité
                        </span>{' '}
                        & construction
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Solutions professionnelles pour vos projets d'envergure.
                        Installation, maintenance et accompagnement sur mesure à Conakry.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="quote"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="group inline-flex items-center justify-center gap-2 bg-[--color-brand-gold] text-black font-semibold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 cursor-pointer"
                        >
                            Demander un devis
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="services"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="inline-flex items-center justify-center gap-2 bg-white/5 text-white font-medium py-4 px-8 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                            Nos services
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        {[
                            { value: '100+', label: 'Projets réalisés' },
                            { value: '50+', label: 'Clients satisfaits' },
                            { value: '3', label: "Domaines d'expertise" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs md:text-sm text-white/40 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <Link
                    to="services"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-white/40 rounded-full"></div>
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
