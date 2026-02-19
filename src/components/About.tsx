import { motion } from 'framer-motion';
import { Award, Clock, Users, ArrowRight, Sparkles, Shield, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const values = [
        {
            icon: Award,
            title: t.about.values.quality.title,
            description: t.about.values.quality.description,
            color: "#FFD100"
        },
        {
            icon: Clock,
            title: t.about.values.deadline.title,
            description: t.about.values.deadline.description,
            color: "#E31B23"
        },
        {
            icon: Users,
            title: t.about.values.team.title,
            description: t.about.values.team.description,
            color: "#009E49"
        }
    ];

    return (
        <section id="about" className="py-28 md:py-40 relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#131920] to-[#0D1117]" />

            {/* Animated glowing orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD100]/30 to-transparent rounded-full blur-[200px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#009E49]/25 to-transparent rounded-full blur-[200px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD100]/20 to-[#FFD100]/5 border border-[#FFD100]/30 mb-8 backdrop-blur-sm"
                        >
                            <Sparkles size={16} className="text-[#FFD100]" />
                            <span className="text-sm font-semibold text-[#FFD100]">{t.about.badge}</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                            {t.about.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] to-[#FF8C00]">
                                {t.about.titleHighlight}
                            </span>
                        </h2>

                        <p className="text-white/70 text-lg md:text-xl mb-6 leading-relaxed">
                            {t.about.description1}{' '}
                            <strong className="text-[#FFD100] font-bold">{t.about.leader}</strong>
                            {t.about.leaderTitle}
                        </p>

                        <p className="text-white/50 text-base md:text-lg mb-12 leading-relaxed">
                            {t.about.description2}
                        </p>

                        {/* Values with premium cards */}
                        <div className="grid grid-cols-3 gap-4 mb-12">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group relative text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                                >
                                    {/* Glow on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ boxShadow: `inset 0 0 40px ${value.color}15` }}
                                    />

                                    <div
                                        className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl mx-auto mb-3 md:mb-4 flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${value.color}25, ${value.color}10)`,
                                            boxShadow: `0 0 30px ${value.color}20`,
                                        }}
                                    >
                                        <value.icon size={24} style={{ color: value.color }} />
                                    </div>
                                    <h4 className="relative text-white font-bold text-sm md:text-base mb-1">{value.title}</h4>
                                    <p className="relative text-white/50 text-xs md:text-sm leading-relaxed hidden md:block">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            to="/histoire"
                            className="group inline-flex items-center gap-3 text-base font-bold text-[#FFD100] hover:text-white transition-colors duration-300"
                        >
                            <span>{t.about.cta}</span>
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </motion.div>

                    {/* CEO & Workshop Image - Premium Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Main image container */}
                        <div className="relative group">
                            {/* Multiple glow layers */}
                            <div className="absolute -inset-6 bg-gradient-to-r from-[#E31B23]/30 via-[#FFD100]/30 to-[#009E49]/30 rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                            <div className="absolute -inset-3 bg-gradient-to-br from-[#FFD100]/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Guinea flag accent - top left */}
                            <div className="absolute -top-4 -left-4 z-20 flex gap-1">
                                <div className="w-2 h-16 bg-[#E31B23] rounded-full" style={{ boxShadow: '0 0 20px rgba(227,27,35,0.5)' }} />
                                <div className="w-2 h-16 bg-[#FFD100] rounded-full" style={{ boxShadow: '0 0 20px rgba(255,209,0,0.5)' }} />
                                <div className="w-2 h-16 bg-[#009E49] rounded-full" style={{ boxShadow: '0 0 20px rgba(0,158,73,0.5)' }} />
                            </div>

                            {/* Image frame */}
                            <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/10 group-hover:border-white/25 transition-all duration-500">
                                <img
                                    src="/ceo.png"
                                    alt="Mamady Kalifa KEITA - CEO HADJA AISHA EMPOWERMENT"
                                    className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-1000"
                                    loading="lazy"
                                />

                                {/* Premium overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent opacity-80" />

                                {/* CEO Info overlay - Enhanced */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="flex items-center gap-4"
                                    >
                                        {/* Guinea flag colors bar */}
                                        <div className="flex gap-0.5">
                                            <div className="w-1.5 h-12 bg-[#E31B23] rounded-full" />
                                            <div className="w-1.5 h-12 bg-[#FFD100] rounded-full" />
                                            <div className="w-1.5 h-12 bg-[#009E49] rounded-full" />
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-lg md:text-xl tracking-tight">Mamady Kalifa KEITA</p>
                                            <p className="text-[#FFD100] text-sm md:text-base font-semibold">Président & CEO</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Live badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 border border-white/10"
                                >
                                    <div className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E31B23] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E31B23]"></span>
                                    </div>
                                    <span className="text-white text-xs font-semibold">Atelier Sécurité</span>
                                </motion.div>
                            </div>

                            {/* Floating accent elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl border-2 border-[#FFD100]/40 flex items-center justify-center bg-[#0D1117]/80 backdrop-blur-xl"
                                style={{ boxShadow: '0 0 40px rgba(255,209,0,0.2)' }}
                            >
                                <Camera size={28} className="text-[#FFD100]" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/3 -left-6 w-16 h-16 rounded-2xl border-2 border-[#009E49]/40 flex items-center justify-center bg-[#0D1117]/80 backdrop-blur-xl"
                                style={{ boxShadow: '0 0 30px rgba(0,158,73,0.2)' }}
                            >
                                <Shield size={24} className="text-[#009E49]" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
