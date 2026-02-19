import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Shield, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Realizations = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', name: t.realizations.filters.all, icon: null },
        { id: 'solar', name: t.realizations.filters.solar, icon: Sun },
        { id: 'security', name: t.realizations.filters.security, icon: Shield },
        { id: 'construction', name: t.realizations.filters.construction, icon: Building },
    ];

    const projects = [
        {
            id: 1,
            ...t.realizations.projects.security1,
            categoryId: "security",
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop",
            location: "Conakry",
        },
        {
            id: 2,
            ...t.realizations.projects.security2,
            categoryId: "security",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            location: "Conakry",
        },
        {
            id: 3,
            ...t.realizations.projects.security3,
            categoryId: "security",
            image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop",
            location: "Conakry",
        },
        {
            id: 4,
            ...t.realizations.projects.security4,
            categoryId: "security",
            image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074&auto=format&fit=crop",
            location: "Conakry",
        },
        {
            id: 5,
            ...t.realizations.projects.solar1,
            categoryId: "solar",
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2074&auto=format&fit=crop",
            location: "Conakry",
        },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.categoryId === activeFilter);

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
                            <span className="text-sm font-bold text-[--color-brand-gold] tracking-widest uppercase">
                                {t.realizations.badge}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">{t.realizations.title}</h1>
                        <p className="text-xl text-[--color-text-secondary] leading-relaxed">
                            {t.realizations.subtitle}
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
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-xs font-bold text-[--color-brand-gold] uppercase tracking-wider bg-black/50 px-3 py-1 rounded-full">
                                            {project.category}
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
                                        {project.specs.map((spec: string, i: number) => (
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
                            {t.realizations.cta.title}
                        </h2>
                        <p className="text-[--color-text-secondary] text-lg mb-8 max-w-2xl mx-auto">
                            {t.realizations.cta.subtitle}
                        </p>
                        <Link
                            to="/#quote"
                            className="inline-flex items-center gap-2 bg-[--color-brand-gold] text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors"
                        >
                            {t.realizations.cta.button} <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Realizations;
