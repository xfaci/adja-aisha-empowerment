import { motion } from 'framer-motion';
import { Award, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
    {
        icon: Award,
        title: "Qualité",
        description: "Matériel certifié et normes internationales.",
        color: "#FFD100"
    },
    {
        icon: Clock,
        title: "Délais",
        description: "Respect rigoureux des plannings.",
        color: "#E31B23"
    },
    {
        icon: Users,
        title: "Équipe",
        description: "Personnel qualifié et expérimenté.",
        color: "#009E49"
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#191F31] via-[#161C2C] to-[#191F31]" />

            {/* Animated glowing orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[--color-brand-gold] rounded-full blur-[200px] opacity-15"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[--color-brand-green] rounded-full blur-[200px] opacity-10"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-brand-gold]/10 border border-[--color-brand-gold]/30 mb-6"
                        >
                            <Sparkles size={14} className="text-[--color-brand-gold]" />
                            <span className="text-sm font-medium text-[--color-brand-gold]">À propos</span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            HADJA AISHA{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
                                EMPOWERMENT
                            </span>
                        </h2>

                        <p className="text-white/70 text-lg mb-6 leading-relaxed">
                            Dirigée par <strong className="text-[--color-brand-gold]">Mamady Kalifa KEITA</strong>, Président & Chef Exécutif,
                            notre entreprise s'est imposée comme un acteur incontournable en Guinée.
                        </p>

                        <p className="text-white/50 mb-10 leading-relaxed">
                            Notre mission : fournir des solutions durables en énergie, sécurité et construction
                            qui améliorent la qualité de vie et sécurisent les investissements de nos clients.
                        </p>

                        {/* Values with glow effects */}
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="group relative text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                                >
                                    {/* Glow on hover */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                                        style={{ backgroundColor: `${value.color}20` }}
                                    />
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                                        style={{
                                            backgroundColor: `${value.color}20`,
                                            boxShadow: `0 0 20px ${value.color}30`
                                        }}
                                    >
                                        <value.icon size={22} style={{ color: value.color }} />
                                    </motion.div>
                                    <h4 className="text-white font-semibold text-sm mb-1">{value.title}</h4>
                                    <p className="text-white/50 text-xs leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                to="/histoire"
                                className="group inline-flex items-center gap-2 text-sm font-semibold text-[--color-brand-gold] hover:text-white transition-colors"
                            >
                                Découvrir notre histoire
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight size={16} />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image with glow */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        {/* Glow effect behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[--color-brand-red]/20 via-[--color-brand-gold]/20 to-[--color-brand-green]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="Équipe HADJA AISHA EMPOWERMENT"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating accent elements */}
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-[--color-brand-gold]/40 rounded-xl"
                            style={{ boxShadow: '0 0 30px rgba(255,209,0,0.2)' }}
                        />
                        <motion.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[--color-brand-green]/30 rounded-xl"
                            style={{ boxShadow: '0 0 25px rgba(0,158,73,0.15)' }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
