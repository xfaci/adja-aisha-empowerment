import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Shield, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Realizations = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', name: 'Tous', icon: null },
        { id: 'solar', name: 'Énergie Solaire', icon: Sun },
        { id: 'security', name: 'Sécurité', icon: Shield },
        { id: 'construction', name: 'Construction', icon: Building },
    ];

    const projects = [
        {
            id: 1,
            title: "Installation Solaire 50kW",
            category: "solar",
            categoryName: "Énergie Solaire",
            description: "Système photovoltaïque complet pour un complexe commercial à Conakry. Autonomie énergétique totale avec stockage batterie lithium.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
            location: "Conakry, Kaloum",
            specs: ["50 kW de puissance", "Batteries lithium 100kWh", "Monitoring intelligent"]
        },
        {
            id: 2,
            title: "Sécurisation Bancaire",
            category: "security",
            categoryName: "Sécurité",
            description: "Déploiement d'un système de sécurité intégré pour une institution bancaire : vidéosurveillance HD, contrôle d'accès biométrique et détection d'intrusion.",
            image: "https://images.unsplash.com/photo-1557597774-9d04a601955e?q=80&w=2071&auto=format&fit=crop",
            location: "Conakry",
            specs: ["64 caméras HD", "Contrôle biométrique", "Alarme anti-intrusion"]
        },
        {
            id: 3,
            title: "Villa Résidentielle de Luxe",
            category: "construction",
            categoryName: "Construction",
            description: "Construction complète d'une villa moderne de 450m² avec finitions haut de gamme, piscine et aménagements paysagers.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            location: "Conakry, Kipé",
            specs: ["450 m²", "Piscine intégrée", "Domotique complète"]
        },
        {
            id: 4,
            title: "Ferme Solaire Rurale",
            category: "solar",
            categoryName: "Énergie Solaire",
            description: "Électrification d'un village rural avec mini-réseau solaire. Projet d'impact social permettant l'accès à l'électricité pour 200 foyers.",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
            location: "Kindia",
            specs: ["30 kW installés", "200 foyers connectés", "Éclairage public"]
        },
        {
            id: 5,
            title: "Centre Commercial Sécurisé",
            category: "security",
            categoryName: "Sécurité",
            description: "Installation d'un système de surveillance complet pour un centre commercial : 120 caméras, contrôle des accès et centrale d'alarme.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            location: "Conakry, Matam",
            specs: ["120 caméras", "Détection faciale", "Contrôle parking"]
        },
        {
            id: 6,
            title: "Immeuble Commercial R+4",
            category: "construction",
            categoryName: "Construction",
            description: "Construction d'un immeuble de bureaux moderne de 4 étages avec parking souterrain et installations techniques de pointe.",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
            location: "Conakry, Almamya",
            specs: ["1200 m² de bureaux", "Parking 30 places", "Ascenseur"]
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="max-w-4xl mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-[--color-brand-red] to-[--color-brand-gold]"></div>
                            <span className="text-sm font-bold text-[--color-brand-gold] tracking-widest uppercase">Portfolio</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Nos Réalisations</h1>
                        <p className="text-xl text-[--color-text-secondary] leading-relaxed">
                            Découvrez les projets emblématiques qui témoignent de notre expertise en énergie solaire,
                            sécurité et construction à travers la Guinée.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                                    activeFilter === category.id
                                        ? 'bg-[--color-brand-gold] text-black'
                                        : 'bg-[--color-dark-card] text-[--color-text-secondary] hover:text-white border border-white/10'
                                }`}
                            >
                                {category.icon && <category.icon size={16} />}
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[--color-dark-card] rounded-2xl overflow-hidden border border-white/5 group hover:border-[--color-brand-gold]/30 transition-all duration-300"
                            >
                                <div className="h-56 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-xs font-bold text-[--color-brand-gold] uppercase tracking-wider bg-black/50 px-3 py-1 rounded-full">
                                            {project.categoryName}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[--color-brand-gold] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[--color-text-secondary] text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.specs.map((spec, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-[--color-dark-surface] text-[--color-text-secondary] px-2 py-1 rounded"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <span className="text-xs text-[--color-text-secondary]">{project.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-gradient-to-r from-[--color-dark-card] to-[--color-dark-surface] p-8 md:p-12 rounded-3xl border border-white/5 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Vous avez un projet ?
                        </h2>
                        <p className="text-[--color-text-secondary] text-lg mb-8 max-w-2xl mx-auto">
                            Rejoignez nos clients satisfaits et confiez-nous votre prochain projet.
                            Nous vous accompagnons de la conception à la réalisation.
                        </p>
                        <Link
                            to="quote"
                            smooth={true}
                            duration={700}
                            className="inline-flex items-center gap-2 bg-[--color-brand-gold] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"
                        >
                            Demander un devis gratuit <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Realizations;
