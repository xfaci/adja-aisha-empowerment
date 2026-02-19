import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Trust = () => {
    const { t } = useLanguage();

    const partners = [
        { name: "Ministère du Budget", icon: "🏛️" },
        { name: "Ministère de l'Agriculture", icon: "🌾" },
        { name: "Min. Enseignement Sup.", icon: "🎓" },
        { name: "Min. Affaires d'État", icon: "⚖️" },
        { name: "Awen Technology", icon: "💻" },
    ];

    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-[#0A0D12]" />

            {/* Subtle gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-gradient-to-r from-[#E31B23]/10 via-[#FFD100]/15 to-[#009E49]/10 rounded-full blur-[60px] md:blur-[100px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6 md:mb-8">
                        <Building2 size={14} className="text-[#FFD100]" />
                        <span className="text-xs md:text-sm font-semibold text-white/80">{t.trust.badge}</span>
                    </div>

                    {/* Partners - Horizontal scroll on mobile */}
                    <div className="flex md:flex-wrap md:justify-center gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="flex-shrink-0"
                            >
                                <div className="flex items-center gap-2 px-4 py-3 md:px-5 md:py-3.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                                    <span className="text-lg md:text-xl">{partner.icon}</span>
                                    <span className="text-xs md:text-sm font-medium text-white/70 whitespace-nowrap">
                                        {partner.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;
