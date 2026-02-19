import { Sun, Shield, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Shield,
        title: "Sécurité Électronique",
        description: "Vidéosurveillance HD, contrôle d'accès biométrique, systèmes d'alarme et détection incendie.",
        features: ["CCTV & Supervision", "Biométrie", "Alarmes", "Contrôle d'accès"],
        color: "--color-brand-red",
        cta: "Sécuriser mon site"
    },
    {
        icon: Sun,
        title: "Énergie Solaire",
        description: "Installation de panneaux photovoltaïques, onduleurs hybrides et batteries lithium pour votre autonomie énergétique.",
        features: ["Panneaux solaires", "Batteries", "Onduleurs", "Maintenance"],
        color: "--color-brand-gold",
        cta: "Passer au solaire"
    },
    {
        icon: Building,
        title: "Construction & BTP",
        description: "Projets résidentiels et commerciaux : gros œuvre, étanchéité, plomberie et électricité bâtiment.",
        features: ["Gros œuvre", "Finitions", "Plomberie", "Électricité"],
        color: "--color-brand-green",
        cta: "Démarrer un projet"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-medium text-[--color-brand-gold] tracking-wider uppercase mb-4 block">
                            Nos services
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Trois domaines d'expertise
                        </h2>
                        <p className="text-white/60 text-lg">
                            Des solutions intégrées pour répondre à tous vos besoins en infrastructure moderne.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-500"
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                style={{ backgroundColor: `var(${service.color})20` }}
                            >
                                <service.icon
                                    size={24}
                                    style={{ color: `var(${service.color})` }}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-white/50 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full"
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
                                className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 group-hover:gap-3"
                                style={{ color: `var(${service.color})` }}
                            >
                                {service.cta}
                                <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
