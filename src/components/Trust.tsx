import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Trust = () => {
    const { t } = useLanguage();

    const partners = [
        { name: "Gouvernement Guinée", color: "#E31B23" },
        { name: "EDG", color: "#FFD100" },
        { name: "Banque Centrale", color: "#009E49" },
        { name: "Orange", color: "#FFD100" },
        { name: "Vivo Energy", color: "#E31B23" },
        { name: "Total", color: "#009E49" }
    ];

    return (
        <section className="py-20 md:py-24 relative overflow-hidden">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#191F31] via-[#1A2035] to-[#191F31]" />

            {/* Animated glow */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-[--color-brand-red]/10 via-[--color-brand-gold]/15 to-[--color-brand-green]/10 rounded-full blur-[100px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Sparkles size={14} className="text-[--color-brand-gold]" />
                        <span className="text-sm font-medium text-white/70">{t.trust.badge}</span>
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className="group relative px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                            >
                                {/* Glow on hover */}
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"
                                    style={{ backgroundColor: `${partner.color}20` }}
                                />
                                <span
                                    className="relative text-base md:text-lg font-semibold text-white/70 group-hover:text-white transition-colors"
                                >
                                    {partner.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;
