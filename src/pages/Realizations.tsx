import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Shield, Building, ArrowRight, MapPin } from 'lucide-react';
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
        <div className="relative pt-32 pb-20 min-h-screen overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0F1419] to-[#0D1117]" />

            {/* Animated glowing orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FFD100] to-[#FF8C00] rounded-full blur-[200px] opacity-20"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#009E49] to-[#00D68F] rounded-full blur-[200px] opacity-15"
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="max-w-4xl mb-14">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-1 w-12 bg-gradient-to-r from-[#FFD100] to-[#FF8C00] rounded-full"></div>
                            <span className="text-sm font-bold text-[#FFD100] tracking-widest uppercase">
                                {t.realizations.badge}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight">
                            {t.realizations.title}
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed font-light">
                            {t.realizations.subtitle}
                        </p>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`px-6 py-3 md:py-3.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 backdrop-blur-sm ${activeFilter === category.id
                                        ? 'bg-[#FFD100] text-[#0D1117] shadow-[0_0_20px_rgba(255,209,0,0.3)] scale-105'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                    className="group relative bg-white/[0.02] rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col"
                                >
                                    {/* Hover Glow Behind Card based on category */}
                                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10 ${project.categoryId === 'solar' ? 'from-[#FFD100]/20 to-transparent' :
                                        project.categoryId === 'security' ? 'from-[#E31B23]/20 to-transparent' :
                                            'from-[#009E49]/20 to-transparent'
                                        }`}
                                    />

                                    <div className="relative h-64 overflow-hidden rounded-t-[2rem] shrink-0">
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent z-10 opacity-80 mix-blend-multiply" />

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/10 shadow-lg">
                                                {categories.find(c => c.id === project.categoryId)?.name}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 relative z-20 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD100] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/60 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center text-white/40 text-sm font-medium">
                                            <MapPin size={16} className="mr-2 text-[#FFD100]/70" />
                                            {project.location}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/10 text-center backdrop-blur-xl relative overflow-hidden"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-gradient-to-r from-[#FFD100]/10 to-[#FF8C00]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            {t.realizations.cta.title}
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                            {t.realizations.cta.subtitle}
                        </p>
                        <Link
                            to="/#quote"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFD100] via-[#FFDA33] to-[#FFD100] text-[#0D1117] font-black px-10 py-5 rounded-full hover:shadow-[0_0_40px_rgba(255,209,0,0.4)] hover:scale-105 transition-all duration-300"
                        >
                            {t.realizations.cta.button} <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div >
    );
};

export default Realizations;
