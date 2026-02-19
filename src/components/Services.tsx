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
        },
        {
            icon: Sun,
            ...t.services.solar,
            color: "#FFD100",
        },
        {
            icon: Building,
            ...t.services.construction,
            color: "#009E49",
        }
    ];

    return (
        <section id="services" className="py-16 md:py-32 relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-[#0D1117]" />

            {/* Gradient orbs - smaller on mobile, no animation */}
            <div className="absolute top-0 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#FFD100]/15 rounded-full blur-[60px] md:blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#009E49]/15 rounded-full blur-[60px] md:blur-[120px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD100]/15 border border-[#FFD100]/30 mb-6">
                            <Zap size={14} className="text-[#FFD100]" />
                            <span className="text-xs md:text-sm font-semibold text-[#FFD100]">{t.services.badge}</span>
                        </div>

                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6">
                            {t.services.title}{' '}
                            <span className="text-[#FFD100]">{t.services.titleHighlight}</span>
                        </h2>
                        <p className="text-white/50 text-sm md:text-lg max-w-xl mx-auto">
                            {t.services.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full rounded-2xl md:rounded-3xl p-5 md:p-8 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                                {/* Top color accent */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl md:rounded-t-3xl"
                                    style={{ backgroundColor: service.color }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6"
                                    style={{ backgroundColor: `${service.color}20` }}
                                >
                                    <service.icon size={24} className="md:w-8 md:h-8" style={{ color: service.color }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white/50 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-8">
                                    {service.features.map((feature: string) => (
                                        <span
                                            key={feature}
                                            className="text-xs text-white/60 bg-white/5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-white/10"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    to="quote"
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    className="inline-flex items-center gap-2 font-bold cursor-pointer text-sm md:text-base"
                                    style={{ color: service.color }}
                                >
                                    {service.cta}
                                    <ArrowRight size={16} className="md:w-5 md:h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-16 text-center"
                >
                    <Link
                        to="quote"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/15 active:scale-95 text-sm md:text-base"
                    >
                        {t.services.bottomCta}
                        <ArrowRight size={16} className="md:w-5 md:h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
