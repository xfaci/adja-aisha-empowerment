import { Sun, Shield, Building, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: Shield,
            ...t.services.security,
            color: "#E31B23",
            gradient: "from-[#E31B23] to-[#B01820]",
        },
        {
            icon: Sun,
            ...t.services.solar,
            color: "#FFD100",
            gradient: "from-[#FFD100] to-[#CC9F00]",
        },
        {
            icon: Building,
            ...t.services.construction,
            color: "#009E49",
            gradient: "from-[#009E49] to-[#007A38]",
        }
    ];

    return (
        <section id="services" className="py-28 md:py-36 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#191F31] via-[#1E2538] to-[#191F31]" />

            {/* Animated glow */}
            <motion.div
                animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-[#E31B23]/10 via-[#FFD100]/15 to-[#009E49]/10 rounded-full blur-[150px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD100]/10 border border-[#FFD100]/30 mb-6"
                        >
                            <Zap size={14} className="text-[#FFD100]" />
                            <span className="text-sm font-medium text-[#FFD100]">{t.services.badge}</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t.services.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] to-[#009E49]">
                                {t.services.titleHighlight}
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                            {t.services.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group relative"
                        >
                            {/* Glow effect behind card */}
                            <div
                                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                style={{ backgroundColor: `${service.color}25` }}
                            />

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-full rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                                    style={{
                                        backgroundColor: `${service.color}20`,
                                        boxShadow: `0 0 40px ${service.color}30`,
                                    }}
                                >
                                    <service.icon size={32} style={{ color: service.color }} />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white/50 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {service.features.map((feature: string, i: number) => (
                                        <motion.span
                                            key={feature}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                            className="text-xs text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
                                        >
                                            {feature}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    to="quote"
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    className="inline-flex items-center gap-2 font-semibold cursor-pointer group/cta transition-all duration-300"
                                    style={{ color: service.color }}
                                >
                                    {service.cta}
                                    <motion.span
                                        className="inline-block"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight size={18} />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <Link
                        to="quote"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-semibold py-4 px-10 rounded-full hover:from-white/15 hover:to-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    >
                        {t.services.bottomCta}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
