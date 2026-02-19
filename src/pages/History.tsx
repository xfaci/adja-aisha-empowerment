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
            color: "--color-brand-red"
        },
        {
            icon: Target,
            title: t.history.values.excellence.title,
            description: t.history.values.excellence.description,
            color: "--color-brand-gold"
        },
        {
            icon: Zap,
            title: t.history.values.innovation.title,
            description: t.history.values.innovation.description,
            color: "--color-brand-green"
        }
    ];

    const milestones = [
        t.history.milestones.foundation,
        t.history.milestones.expansion,
        t.history.milestones.recognition,
        t.history.milestones.today
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="max-w-4xl mb-20">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-[--color-brand-red] to-[--color-brand-gold]"></div>
                            <span className="text-sm font-bold text-[--color-brand-gold] tracking-widest uppercase">
                                {t.history.badge}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                            {t.history.title} <span className="text-[--color-brand-gold]">{t.history.titleHighlight}</span>
                        </h1>
                        <p className="text-xl text-[--color-text-secondary] leading-relaxed">
                            {t.history.intro} <strong className="text-white">{t.history.leader}</strong>
                            {t.history.introEnd}
                        </p>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[--color-dark-card] to-[--color-dark-surface] p-8 rounded-2xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[--color-brand-gold]/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[--color-brand-gold]/20 flex items-center justify-center mb-6">
                                    <Target className="text-[--color-brand-gold]" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t.history.mission.title}</h2>
                                <p className="text-[--color-text-secondary] leading-relaxed">
                                    {t.history.mission.description}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[--color-dark-card] to-[--color-dark-surface] p-8 rounded-2xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[--color-brand-green]/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[--color-brand-green]/20 flex items-center justify-center mb-6">
                                    <Eye className="text-[--color-brand-green]" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t.history.vision.title}</h2>
                                <p className="text-[--color-text-secondary] leading-relaxed">
                                    {t.history.vision.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Values */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-10 text-center">{t.history.valuesTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[--color-dark-card] p-6 rounded-2xl border border-white/5 text-center hover:border-white/10 transition-colors"
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                                        style={{ backgroundColor: `var(${value.color})20` }}
                                    >
                                        <value.icon size={32} style={{ color: `var(${value.color})` }} />
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
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[--color-brand-red] via-[--color-brand-gold] to-[--color-brand-green]"></div>

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
                                        <div className="bg-[--color-dark-card] p-6 rounded-2xl border border-white/5">
                                            <span className="text-sm font-bold text-[--color-brand-gold] tracking-wider">{milestone.year}</span>
                                            <h3 className="text-xl font-bold text-white mt-2 mb-3">{milestone.title}</h3>
                                            <p className="text-[--color-text-secondary] text-sm">{milestone.description}</p>
                                        </div>
                                    </div>
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[--color-brand-gold] rounded-full transform md:-translate-x-1/2 border-4 border-[--color-dark]"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Services Summary */}
                    <div className="bg-gradient-to-r from-[--color-dark-card] to-[--color-dark-surface] p-8 md:p-12 rounded-3xl border border-white/5">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.history.expertiseTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[--color-brand-gold]/20 flex items-center justify-center flex-shrink-0">
                                    <Zap className="text-[--color-brand-gold]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{t.history.expertise.solar.title}</h3>
                                    <p className="text-[--color-text-secondary] text-sm">{t.history.expertise.solar.description}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[--color-brand-red]/20 flex items-center justify-center flex-shrink-0">
                                    <Shield className="text-[--color-brand-red]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{t.history.expertise.security.title}</h3>
                                    <p className="text-[--color-text-secondary] text-sm">{t.history.expertise.security.description}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[--color-brand-green]/20 flex items-center justify-center flex-shrink-0">
                                    <Building className="text-[--color-brand-green]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{t.history.expertise.construction.title}</h3>
                                    <p className="text-[--color-text-secondary] text-sm">{t.history.expertise.construction.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default History;
