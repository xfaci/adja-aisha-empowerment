import { motion } from 'framer-motion';
import { Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Trust = () => {
    const { t } = useLanguage();

    const partners = [
        { name: "Ministère du Budget", color: "#E31B23", icon: "🏛️" },
        { name: "Ministère de l'Agriculture", color: "#009E49", icon: "🌾" },
        { name: "Ministère de l'Enseignement Supérieur", color: "#FFD100", icon: "🎓" },
        { name: "Ministère des Affaires d'État", color: "#E31B23", icon: "⚖️" },
        { name: "Awen Technology", color: "#009E49", icon: "💻" },
    ];

    return (
        <section className="py-20 md:py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0F1419] to-[#0D1117]" />

            {/* Animated glow */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-[#E31B23]/15 via-[#FFD100]/20 to-[#009E49]/15 rounded-full blur-[150px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/15 mb-10 backdrop-blur-sm"
                    >
                        <Building2 size={16} className="text-[#FFD100]" />
                        <span className="text-sm font-semibold text-white/80">{t.trust.badge}</span>
                        <Sparkles size={14} className="text-[#FFD100]" />
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative"
                            >
                                {/* Glow on hover */}
                                <div
                                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                    style={{ backgroundColor: `${partner.color}30` }}
                                />

                                <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 group-hover:border-white/25 transition-all duration-500 backdrop-blur-sm cursor-default">
                                    {/* Icon */}
                                    <span className="text-xl md:text-2xl">{partner.icon}</span>

                                    {/* Name */}
                                    <span className="text-sm md:text-base font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                                        {partner.name}
                                    </span>

                                    {/* Color accent bar */}
                                    <div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full group-hover:w-3/4 transition-all duration-500"
                                        style={{ backgroundColor: partner.color }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-12 h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;
