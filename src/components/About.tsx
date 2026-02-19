import { motion } from 'framer-motion';
import { Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
    {
        icon: Award,
        title: "Qualité",
        description: "Matériel certifié et normes internationales.",
        color: "--color-brand-gold"
    },
    {
        icon: Clock,
        title: "Délais",
        description: "Respect rigoureux des plannings.",
        color: "--color-brand-red"
    },
    {
        icon: Users,
        title: "Équipe",
        description: "Personnel qualifié et expérimenté.",
        color: "--color-brand-green"
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-medium text-[--color-brand-gold] tracking-wider uppercase mb-4 block">
                            À propos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            HADJA AISHA<br />
                            <span className="text-white/60">EMPOWERMENT</span>
                        </h2>

                        <p className="text-white/60 text-lg mb-6 leading-relaxed">
                            Dirigée par <strong className="text-white">Mamady Kalifa KEITA</strong>, Président & Chef Exécutif,
                            notre entreprise s'est imposée comme un acteur incontournable en Guinée.
                        </p>

                        <p className="text-white/40 mb-8 leading-relaxed">
                            Notre mission : fournir des solutions durables en énergie, sécurité et construction
                            qui améliorent la qualité de vie et sécurisent les investissements de nos clients.
                        </p>

                        {/* Values */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {values.map((value) => (
                                <div key={value.title} className="text-center">
                                    <div
                                        className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                                        style={{ backgroundColor: `var(${value.color})15` }}
                                    >
                                        <value.icon size={20} style={{ color: `var(${value.color})` }} />
                                    </div>
                                    <h4 className="text-white font-semibold text-sm mb-1">{value.title}</h4>
                                    <p className="text-white/40 text-xs">{value.description}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/histoire"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[--color-brand-gold] hover:text-white transition-colors"
                        >
                            Découvrir notre histoire →
                        </Link>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="Équipe HADJA AISHA EMPOWERMENT"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Accent */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[--color-brand-gold]/30 rounded-xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
