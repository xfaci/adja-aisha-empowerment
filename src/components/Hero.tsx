import { ArrowRight, Sparkles, Play, CheckCircle, Shield, Sun, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../i18n/LanguageContext';
import { useMemo } from 'react';

const Hero = () => {
    const { t } = useLanguage();

    // Memoize particles to prevent re-renders
    const particles = useMemo(() => {
        return [...Array(15)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: 2 + Math.random() * 4,
            color: i % 3 === 0 ? 'rgba(255,209,0,0.5)' : i % 3 === 1 ? 'rgba(0,158,73,0.5)' : 'rgba(227,27,35,0.4)',
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 2,
        }));
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[#0D1117]">
                {/* Gradient mesh background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#191F31] via-[#0D1117] to-[#191F31]" />

                {/* Large gradient orbs with enhanced glow */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] right-[-10%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-gradient-to-br from-[#FFD100] to-[#FF8C00] rounded-full blur-[150px] md:blur-[200px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-30%] left-[-15%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-gradient-to-tr from-[#009E49] to-[#00D68F] rounded-full blur-[150px] md:blur-[200px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute top-[40%] left-[30%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-r from-[#E31B23] to-[#FF6B6B] rounded-full blur-[150px] md:blur-[200px]"
                />

                {/* Grid pattern with fade */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Guinea flag accent - left side */}
            <div className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-20 gap-1">
                {[
                    { color: '#E31B23', shadow: 'rgba(227,27,35,0.8)' },
                    { color: '#FFD100', shadow: 'rgba(255,209,0,0.8)' },
                    { color: '#009E49', shadow: 'rgba(0,158,73,0.8)' },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.5, width: 12 }}
                        className="w-2 h-16 rounded-full cursor-pointer transition-all duration-300"
                        style={{
                            backgroundColor: item.color,
                            boxShadow: `0 0 30px ${item.shadow}`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-28">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge with glow */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 mb-8 md:mb-10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,209,0,0.15)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009E49] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#009E49]" style={{ boxShadow: '0 0 15px rgba(0,158,73,1)' }}></span>
                        </span>
                        <span className="text-sm md:text-base font-semibold text-white">{t.hero.badge}</span>
                        <Sparkles size={16} className="text-[#FFD100]" />
                    </motion.div>

                    {/* Main heading with enhanced typography */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] mb-8 md:mb-10 tracking-tight"
                    >
                        <span className="block">{t.hero.title1}</span>
                        <span className="block mt-2 md:mt-3">
                            <span className="relative inline-block">
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] via-[#FF8C00] to-[#FFD100] bg-[length:200%_auto]"
                                    animate={{ backgroundPosition: ['0% center', '200% center'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    {t.hero.title2}
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-[#FFD100] via-[#009E49] to-[#E31B23] rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                />
                            </span>
                            <span className="text-white/90">{' '}{t.hero.title3}</span>
                        </span>
                    </motion.h1>

                    {/* Subtitle with better styling */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-light"
                    >
                        {t.hero.subtitle}{' '}
                        <span className="text-white font-medium">{t.hero.subtitleHighlight}</span> {t.hero.subtitleEnd}
                    </motion.p>

                    {/* Enhanced CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center mb-12 md:mb-16 px-4"
                    >
                        <Link
                            to="quote"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFD100] via-[#FFDA33] to-[#FFD100] text-[#0D1117] font-bold py-4 px-8 md:py-5 md:px-10 rounded-full overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,209,0,0.5)] active:scale-95"
                        >
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            <span className="relative z-10 text-base md:text-lg">{t.hero.cta1}</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>

                        <Link
                            to="services"
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="group inline-flex items-center justify-center gap-3 bg-white/5 text-white font-semibold py-4 px-8 md:py-5 md:px-10 rounded-full border border-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer active:scale-95"
                        >
                            <Play size={18} className="fill-current" />
                            <span className="text-base md:text-lg">{t.hero.cta2}</span>
                        </Link>
                    </motion.div>

                    {/* Trust indicators with icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 md:mb-16"
                    >
                        {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((text, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 text-white/60"
                                whileHover={{ scale: 1.05, color: 'rgba(255,255,255,0.9)' }}
                            >
                                <CheckCircle size={18} className="text-[#009E49]" style={{ filter: 'drop-shadow(0 0 8px rgba(0,158,73,0.6))' }} />
                                <span className="text-sm md:text-base font-medium">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Premium Stats cards with glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto"
                    >
                        {[
                            { value: '100+', label: t.hero.statProjects, color: '#FFD100', icon: Building },
                            { value: '50+', label: t.hero.statClients, color: '#009E49', icon: Shield },
                            { value: '3', label: t.hero.statExpertise, color: '#E31B23', icon: Sun },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Glow effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl"
                                    style={{ boxShadow: `inset 0 0 60px ${stat.color}15` }}
                                />

                                {/* Icon background */}
                                <div
                                    className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity"
                                    style={{ backgroundColor: stat.color }}
                                >
                                    <stat.icon size={16} className="text-white" />
                                </div>

                                <div
                                    className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2"
                                    style={{
                                        color: stat.color,
                                        textShadow: `0 0 30px ${stat.color}50`
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div className="relative text-xs sm:text-sm md:text-base text-white/50 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator with animation */}
            <motion.div
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <Link
                    to="services"
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="cursor-pointer group flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors hidden md:block">Scroll</span>
                    <div className="w-7 h-12 rounded-full border-2 border-white/20 flex justify-center pt-2 group-hover:border-[#FFD100] transition-colors">
                        <motion.div
                            className="w-1.5 h-3 bg-white/60 rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
