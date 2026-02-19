import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Shield, Building } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const History = () => {
    const { t } = useLanguage();

    const values = [
        {
            icon: Heart,
            title: t.history.values.engagement.title,
            description: t.history.values.engagement.description,
            color: "#E31B23"
        },
        {
            icon: Target,
            title: t.history.values.excellence.title,
            description: t.history.values.excellence.description,
            color: "#FFD100"
        },
        {
            icon: Zap,
            title: t.history.values.innovation.title,
            description: t.history.values.innovation.description,
            color: "#009E49"
        }
    ];

    const milestones = [
        t.history.milestones.foundation,
        t.history.milestones.expansion,
        t.history.milestones.recognition,
        t.history.milestones.today
    ];

    return (
        <div className="relative pt-32 pb-20 min-h-screen overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0F1419] to-[#0D1117]" />

            {/* Glowing orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD100] to-[#FF8C00] rounded-full blur-[200px] opacity-10"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#009E49] to-[#00D68F] rounded-full blur-[200px] opacity-10"
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="max-w-4xl mb-20">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-1 w-12 bg-gradient-to-r from-[#E31B23] to-[#FFD100] rounded-full"></div>
                            <span className="text-sm font-bold text-[#FFD100] tracking-widest uppercase">
                                {t.history.badge}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight">
                            {t.history.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] to-[#FF8C00]">{t.history.titleHighlight}</span>
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed font-light">
                            {t.history.intro} <strong className="text-white font-semibold">{t.history.leader}</strong>
                            {t.history.introEnd}
                        </p>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-md group hover:border-[#FFD100]/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD100]/20 rounded-full blur-[80px] group-hover:bg-[#FFD100]/30 transition-colors duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#FFD100]/20 flex items-center justify-center mb-6 border border-[#FFD100]/30">
                                    <Target className="text-[#FFD100]" size={28} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">{t.history.mission.title}</h2>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {t.history.mission.description}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-md group hover:border-[#009E49]/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#009E49]/20 rounded-full blur-[80px] group-hover:bg-[#009E49]/30 transition-colors duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#009E49]/20 flex items-center justify-center mb-6 border border-[#009E49]/30">
                                    <Eye className="text-[#009E49]" size={28} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">{t.history.vision.title}</h2>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {t.history.vision.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Values */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-black text-white mb-12 text-center">{t.history.valuesTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-white/[0.05] to-transparent p-8 rounded-3xl border border-white/10 text-center hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                                        style={{ backgroundColor: `${value.color}20`, boxShadow: `0 0 20px ${value.color}20` }}
                                    >
                                        <value.icon size={32} style={{ color: value.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                    <p className="text-[--color-text-secondary] text-sm">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-10 text-center">{t.history.journeyTitle}</h2>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E31B23] via-[#FFD100] to-[#009E49]"></div>

                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                                        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#FFD100]/30 transition-colors duration-300">
                                            <span className="text-sm font-bold text-[#FFD100] tracking-wider">{milestone.year}</span>
                                            <h3 className="text-xl font-bold text-white mt-2 mb-3">{milestone.title}</h3>
                                            <p className="text-white/60 text-sm">{milestone.description}</p>
                                        </div>
                                    </div>
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-[#FFD100] rounded-full transform md:-translate-x-1/2 border-4 border-[#0D1117] shadow-[0_0_15px_rgba(255,209,0,0.5)]"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Services Summary */}
                    <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-12 rounded-[2rem] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FFD100]/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black text-white mb-12 text-center">{t.history.expertiseTitle}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#FFD100]/10 border border-[#FFD100]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD100]/20 transition-colors duration-300">
                                        <Zap className="text-[#FFD100]" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{t.history.expertise.solar.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{t.history.expertise.solar.description}</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#E31B23]/10 border border-[#E31B23]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31B23]/20 transition-colors duration-300">
                                        <Shield className="text-[#E31B23]" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{t.history.expertise.security.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{t.history.expertise.security.description}</p>
                                    </div>
                                </motion.div>
                                <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#009E49]/10 border border-[#009E49]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#009E49]/20 transition-colors duration-300">
                                        <Building className="text-[#009E49]" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{t.history.expertise.construction.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{t.history.expertise.construction.description}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default History;
