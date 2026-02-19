import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            id: 1,
            title: t.projects.items.security1.title,
            category: t.projects.items.security1.category,
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop",
            color: "#E31B23",
        },
        {
            id: 2,
            title: t.projects.items.security2.title,
            category: t.projects.items.security2.category,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
            color: "#009E49",
        },
        {
            id: 3,
            title: t.projects.items.solar.title,
            category: t.projects.items.solar.category,
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2074&auto=format&fit=crop",
            color: "#FFD100",
        },
    ];

    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#191F31] via-[#161C2C] to-[#191F31]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-medium text-[--color-brand-gold] tracking-wider uppercase mb-4 block">
                            {t.projects.badge}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            {t.projects.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                                {t.projects.titleHighlight}
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/realisations"
                            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            {t.projects.viewAll}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <Link to="/realisations" className="block">
                                {/* Image container with glow */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5">
                                    {/* Glow effect on hover */}
                                    <div
                                        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                        style={{ backgroundColor: `${project.color}30` }}
                                    />

                                    {/* Image */}
                                    <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                        {/* Hover indicator */}
                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                            <ExternalLink size={18} className="text-white" />
                                        </div>

                                        {/* Category badge */}
                                        <div
                                            className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border"
                                            style={{
                                                backgroundColor: `${project.color}20`,
                                                borderColor: `${project.color}40`,
                                                color: project.color,
                                            }}
                                        >
                                            {project.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white group-hover:text-[--color-brand-gold] transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowRight
                                        size={18}
                                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                    />
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
                >
                    {[
                        { value: "100+", label: t.projects.stat1 },
                        { value: "98%", label: t.projects.stat2 },
                        { value: t.projects.statYears, label: t.projects.stat3 },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-[#FFD100]">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
