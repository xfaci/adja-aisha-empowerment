import { motion } from 'framer-motion';

const Trust = () => {
    const partners = [
        "Gouvernement Guinée",
        "EDG",
        "Banque Centrale",
        "Orange",
        "Vivo Energy",
        "Total"
    ];

    return (
        <section className="py-16 md:py-20 bg-black border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-10">
                        Ils nous font confiance
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {partners.map((partner, index) => (
                            <motion.span
                                key={partner}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="text-lg md:text-xl font-semibold text-white/30 hover:text-white/60 transition-colors cursor-default"
                            >
                                {partner}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;
