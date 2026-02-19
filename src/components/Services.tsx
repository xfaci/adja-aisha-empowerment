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
            gradient: "from-[#E31B23] to-[#FF4757]",
            bgGradient: "from-[#E31B23]/20 to-[#FF4757]/5",
        },
        {
            icon: Sun,
            ...t.services.solar,
            color: "#FFD100",
            gradient: "from-[#FFD100] to-[#FF8C00]",
            bgGradient: "from-[#FFD100]/20 to-[#FF8C00]/5",
        },
        {
            icon: Building,
            ...t.services.construction,
            color: "#009E49",
            gradient: "from-[#009E49] to-[#00D68F]",
            bgGradient: "from-[#009E49]/20 to-[#00D68F]/5",
        }
    ];

    return (
        <section id="services" className="py-28 md:py-40 relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-[#0D1117]" />

            {/* Animated gradient orbs */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px]"
            >
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#E31B23]/15 to-transparent rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FFD100]/15 to-transparent rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#009E49]/15 to-transparent rounded-full blur-[150px]" />
            </motion.div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD100]/20 to-[#FFD100]/5 border border-[#FFD100]/30 mb-8 backdrop-blur-sm"
                        >
                            <Zap size={16} className="text-[#FFD100]" />
                            <span className="text-sm font-semibold text-[#FFD100]">{t.services.badge}</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                            {t.services.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] via-[#FF8C00] to-[#009E49]">
                                {t.services.titleHighlight}
                            </span>
                        </h2>
                        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            {t.services.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Glow effect behind card */}
                            <motion.div
                                className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"
                                style={{ background: `linear-gradient(135deg, ${service.color}40, transparent)` }}
                            />

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -12 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative h-full rounded-[2rem] p-8 lg:p-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden"
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.bgGradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2`}
                                />

                                {/* Decorative line */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1 rounded-t-[2rem]"
                                    style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                                />

                                {/* Icon with enhanced styling */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}25, ${service.color}10)`,
                                        boxShadow: `0 0 50px ${service.color}30`,
                                    }}
                                >
                                    <service.icon size={36} style={{ color: service.color }} />

                                    {/* Icon glow ring */}
                                    <div
                                        className="absolute inset-0 rounded-2xl border-2 opacity-50"
                                        style={{ borderColor: service.color }}
                                    />
                                </motion.div>

                                {/* Content */}
                                <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="relative text-white/50 mb-8 leading-relaxed text-base md:text-lg group-hover:text-white/60 transition-colors">
                                    {service.description}
                                </p>

                                {/* Features with enhanced styling */}
                                <div className="relative flex flex-wrap gap-2 mb-10">
                                    {service.features.map((feature: string, i: number) => (
                                        <motion.span
                                            key={feature}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                                        >
                                            {feature}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* CTA with arrow animation */}
                                <Link
                                    to="quote"
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    className="relative inline-flex items-center gap-3 font-bold cursor-pointer group/cta transition-all duration-300 text-lg"
                                    style={{ color: service.color }}
                                >
                                    <span className="group-hover/cta:underline underline-offset-4">{service.cta}</span>
                                    <motion.div
                                        animate={{ x: [0, 8, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ArrowRight size={22} />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 md:mt-28 text-center"
                >
                    <Link
                        to="quote"
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-bold py-5 px-12 rounded-full hover:from-white/15 hover:to-white/10 hover:border-white/40 transition-all duration-500 cursor-pointer hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] text-lg"
                    >
                        <span>{t.services.bottomCta}</span>
                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
