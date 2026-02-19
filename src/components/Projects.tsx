import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Installation Solaire 50kW",
        category: "Énergie Solaire",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Sécurisation Bancaire",
        category: "Sécurité",
        image: "https://images.unsplash.com/photo-1557597774-9d04a601955e?q=80&w=2071&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Villa Résidentielle",
        category: "Construction",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-medium text-[--color-brand-gold] tracking-wider uppercase mb-4 block">
                            Portfolio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Réalisations récentes
                        </h2>
                    </motion.div>

                    <Link
                        to="/realisations"
                        className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                        Voir tous les projets
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link to="/realisations" className="block">
                                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-white/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-[--color-brand-gold] transition-colors">
                                    {project.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
