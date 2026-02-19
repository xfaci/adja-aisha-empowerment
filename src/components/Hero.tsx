import { ArrowRight, Sparkles, Play, CheckCircle, Shield, Sun, Building } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext';
import MagneticButton from './MagneticButton';

const Hero = () => {
    const { t } = useLanguage();
    const { scrollY } = useScroll();

    // Parallax transforms
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -250]);
    const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Simplified Background for better mobile performance */}
            <div className="absolute inset-0 bg-[#0D1117]">
                {/* Static gradient - no animation on mobile */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#191F31] via-[#0D1117] to-[#191F31]" />

                {/* Reduced blur orbs - smaller on mobile */}
                <motion.div
                    style={{ y: y1, opacity: opacityFade }}
                    className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-[#FFD100]/30 to-[#FF8C00]/10 rounded-full blur-[80px] md:blur-[150px]"
                />
                <motion.div
                    style={{ y: y2, opacity: opacityFade }}
                    className="absolute bottom-[-20%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-tr from-[#009E49]/25 to-[#00D68F]/10 rounded-full blur-[80px] md:blur-[150px]"
                />

                {/* Grid pattern - hidden on mobile */}
                <motion.div
                    style={{ y: y1, opacity: opacityFade }}
                    className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
                />
            </div>

            {/* Guinea flag accent - desktop only */}
            <motion.div
                style={{ y: y1 }}
                className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-20 gap-1"
            >
                {[
                    { color: '#E31B23', shadow: 'rgba(227,27,35,0.6)' },
                    { color: '#FFD100', shadow: 'rgba(255,209,0,0.6)' },
                    { color: '#009E49', shadow: 'rgba(0,158,73,0.6)' },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="w-2 h-14 rounded-full transition-all duration-300 hover:scale-125"
                        style={{
                            backgroundColor: item.color,
                            boxShadow: `0 0 20px ${item.shadow}`,
                        }}
                    />
                ))}
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-28">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 border border-white/20 mb-6 md:mb-10 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 bg-[#009E49] rounded-full animate-pulse" />
                        <span className="text-xs md:text-base font-semibold text-white">{t.hero.badge}</span>
                        <Sparkles size={14} className="text-[#FFD100] hidden sm:block" />
                    </motion.div>

                    {/* Main heading - optimized for mobile */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 md:mb-10"
                    >
                        <span className="block">{t.hero.title1}</span>
                        <span className="block mt-1 md:mt-2">
                            <span className="text-[#FFD100]">{t.hero.title2}</span>
                            <span className="text-white/90">{' '}{t.hero.title3}</span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm md:text-lg text-white/50 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2"
                    >
                        {t.hero.subtitle}{' '}
                        <span className="text-white font-medium">{t.hero.subtitleHighlight}</span> {t.hero.subtitleEnd}
                    </motion.p>

                    {/* CTAs - Stack on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center mb-10 md:mb-14 px-4"
                    >
                        <MagneticButton strength={0.4}>
                            <Link
                                to="quote"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="inline-flex items-center justify-center gap-2 bg-[#FFD100] text-[#0D1117] font-bold py-3.5 px-6 md:py-4 md:px-10 rounded-full cursor-pointer transition-all duration-300 active:scale-95 hover:shadow-[0_0_40px_rgba(255,209,0,0.4)]"
                            >
                                <span className="text-sm md:text-base">{t.hero.cta1}</span>
                                <ArrowRight size={18} />
                            </Link>
                        </MagneticButton>

                        <MagneticButton strength={0.2}>
                            <Link
                                to="services"
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3.5 px-6 md:py-4 md:px-10 rounded-full border border-white/20 cursor-pointer transition-all duration-300 active:scale-95 hover:bg-white/15"
                            >
                                <Play size={16} className="fill-current" />
                                <span className="text-sm md:text-base">{t.hero.cta2}</span>
                            </Link>
                        </MagneticButton>
                    </motion.div>

                    {/* Trust indicators - Simplified on mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-14"
                    >
                        {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((text, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-white/60">
                                <CheckCircle size={14} className="text-[#009E49]" />
                                <span className="text-xs md:text-sm font-medium">{text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Stats cards - Simplified design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="grid grid-cols-3 gap-2 md:gap-6 max-w-2xl mx-auto"
                    >
                        {[
                            { value: '100+', label: t.hero.statProjects, color: '#FFD100', icon: Building },
                            { value: '50+', label: t.hero.statClients, color: '#009E49', icon: Shield },
                            { value: '3', label: t.hero.statExpertise, color: '#E31B23', icon: Sun },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="relative p-3 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 transition-colors hover:border-white/20"
                            >
                                <div
                                    className="text-xl sm:text-2xl md:text-4xl font-black mb-0.5 md:mb-1"
                                    style={{ color: stat.color }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs md:text-sm text-white/50 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator - Desktop only */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <Link
                    to="services"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 hover:border-[#FFD100] transition-colors">
                        <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
