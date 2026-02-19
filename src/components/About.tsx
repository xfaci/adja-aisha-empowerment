import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';
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

    const { scrollYProgress } = useScroll();

    // Parallax using scrollYProgress (0 to 1) for the About section generally
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section id="about" className="py-16 md:py-32 relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0F1419] to-[#0D1117]" />

            {/* Subtle orbs - smaller on mobile */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#FFD100]/15 rounded-full blur-[60px] md:blur-[120px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-[#009E49]/15 rounded-full blur-[60px] md:blur-[120px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD100]/15 border border-[#FFD100]/30 mb-6">
                            <Sparkles size={14} className="text-[#FFD100]" />
                            <span className="text-xs md:text-sm font-semibold text-[#FFD100]">{t.about.badge}</span>
                        </div>

                        <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6">
                            {t.about.title}{' '}
                            <span className="text-[#FFD100]">{t.about.titleHighlight}</span>
                        </h2>

                        <p className="text-white/70 text-sm md:text-lg mb-3 md:mb-4 leading-relaxed">
                            {t.about.description1}{' '}
                            <strong className="text-[#FFD100] font-bold">{t.about.leader}</strong>
                            {t.about.leaderTitle}
                        </p>

                        <p className="text-white/50 text-sm md:text-base mb-6 md:mb-10 leading-relaxed">
                            {t.about.description2}
                        </p>

                        {/* Values - Horizontal scroll on mobile */}
                        <div className="flex md:grid md:grid-cols-3 gap-3 mb-6 md:mb-10 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    className="flex-shrink-0 w-[140px] md:w-auto text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl mx-auto mb-2 md:mb-3 flex items-center justify-center"
                                        style={{ backgroundColor: `${value.color}20` }}
                                    >
                                        <value.icon size={18} className="md:w-6 md:h-6" style={{ color: value.color }} />
                                    </div>
                                    <h4 className="text-white font-bold text-xs md:text-sm mb-1">{value.title}</h4>
                                    <p className="text-white/50 text-[10px] md:text-xs hidden md:block">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <Link
                            to="/histoire"
                            className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-[#FFD100] active:opacity-70"
                        >
                            {t.about.cta}
                            <ArrowRight size={16} className="md:w-5 md:h-5" />
                        </Link>
                    </motion.div>

                    {/* CEO Image - Simplified for mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Guinea flag accent */}
                        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 z-20 flex gap-0.5">
                            <div className="w-1.5 h-10 md:w-2 md:h-14 bg-[#E31B23] rounded-full" />
                            <div className="w-1.5 h-10 md:w-2 md:h-14 bg-[#FFD100] rounded-full" />
                            <div className="w-1.5 h-10 md:w-2 md:h-14 bg-[#009E49] rounded-full" />
                        </div>

                        {/* Image frame */}
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
                            <img
                                src="/ceo.png"
                                alt="Mamady Kalifa KEITA - CEO HADJA AISHA EMPOWERMENT"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />

                            {/* CEO Info overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-0.5">
                                        <div className="w-1 h-8 md:h-10 bg-[#E31B23] rounded-full" />
                                        <div className="w-1 h-8 md:h-10 bg-[#FFD100] rounded-full" />
                                        <div className="w-1 h-8 md:h-10 bg-[#009E49] rounded-full" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm md:text-lg">Mamady Kalifa KEITA</p>
                                        <p className="text-[#FFD100] text-xs md:text-sm font-medium">Président & CEO</p>
                                    </div>
                                </div>
                            </div>

                            {/* Live badge */}
                            <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 md:px-3 md:py-1.5 flex items-center gap-1.5 border border-white/10">
                                <span className="w-2 h-2 bg-[#E31B23] rounded-full animate-pulse" />
                                <span className="text-white text-[10px] md:text-xs font-medium">Atelier Sécurité</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
