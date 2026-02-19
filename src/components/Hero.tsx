import { ArrowRight, Sparkles, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[#191F31]">
                {/* Large gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-30%] right-[-15%] w-[900px] h-[900px] bg-gradient-to-br from-[#FFD100]/30 to-[#FFD100]/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-30%] left-[-15%] w-[800px] h-[800px] bg-gradient-to-tr from-[#009E49]/25 to-[#009E49]/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#E31B23]/20 to-transparent rounded-full blur-[100px]"
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Radial vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#191F31_75%)]" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                            backgroundColor: i % 3 === 0 ? 'rgba(255,209,0,0.4)' : i % 3 === 1 ? 'rgba(0,158,73,0.4)' : 'rgba(255,255,255,0.2)',
                        }}
                        animate={{
                            y: [-30, 30, -30],
                            x: [-10, 10, -10],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Guinea flag accent - left side */}
            <div className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-20 gap-2">
                {[
                    { color: '#E31B23', shadow: 'rgba(227,27,35,0.6)' },
                    { color: '#FFD100', shadow: 'rgba(255,209,0,0.6)' },
                    { color: '#009E49', shadow: 'rgba(0,158,73,0.6)' },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.8, width: 8 }}
                        className="w-2 h-14 rounded-full cursor-pointer transition-all duration-300"
                        style={{
                            backgroundColor: item.color,
                            boxShadow: `0 0 20px ${item.shadow}`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2.5 h-2.5 bg-[#009E49] rounded-full"
                            style={{ boxShadow: '0 0 10px rgba(0,158,73,0.8)' }}
                        />
                        <span className="text-sm font-medium text-white/90">{t.hero.badge}</span>
                        <Sparkles size={14} className="text-[#FFD100]" />
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8"
                    >
                        <span className="block">{t.hero.title1}</span>
                        <span className="block mt-2">
                            <span className="relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] via-[#009E49] to-[#FFD100] bg-[length:200%_auto] animate-gradient">
                                    {t.hero.title2}
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD100] to-[#009E49] rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                            </span>
                            {' '}{t.hero.title3}
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        {t.hero.subtitle}{' '}
                        <span className="text-white/90 font-medium">{t.hero.subtitleHighlight}</span> {t.hero.subtitleEnd}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <Link
                            to="quote"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFD100] to-[#e6bc00] text-[#191F31] font-bold py-4 px-8 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,209,0,0.5)] hover:scale-105"
                        >
                            <span className="relative z-10">{t.hero.cta1}</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="services"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="group inline-flex items-center justify-center gap-3 bg-white/5 text-white font-medium py-4 px-8 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
                        >
                            <Play size={18} className="fill-current" />
                            {t.hero.cta2}
                        </Link>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16"
                    >
                        {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((text, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/60">
                                <CheckCircle size={18} className="text-[#009E49]" />
                                <span className="text-sm font-medium">{text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Stats cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
                    >
                        {[
                            { value: '100+', label: t.hero.statProjects, color: '#FFD100' },
                            { value: '50+', label: t.hero.statClients, color: '#009E49' },
                            { value: '3', label: t.hero.statExpertise, color: '#E31B23' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/25 transition-all overflow-hidden"
                            >
                                {/* Glow effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`,
                                    }}
                                />
                                <div
                                    className="text-3xl md:text-5xl font-bold mb-2"
                                    style={{ color: stat.color }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <Link
                    to="services"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer group"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center pt-3 group-hover:border-[#FFD100] transition-colors"
                    >
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4], y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-4 bg-white/60 rounded-full"
                        />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
