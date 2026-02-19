import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            id: 1,
            title: t.projects.items.security1.title,
            category: t.projects.items.security1.category,
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
            color: "#E31B23",
        },
        {
            id: 2,
            title: t.projects.items.security2.title,
            category: t.projects.items.security2.category,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            color: "#009E49",
        },
        {
            id: 3,
            title: t.projects.items.solar.title,
            category: t.projects.items.solar.category,
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop",
            color: "#FFD100",
        },
    ];

    return (
        <section id="projects" className="py-16 md:py-32 relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-[#0D1117]" />

            {/* Subtle gradient - smaller on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-r from-[#FFD100]/10 via-[#009E49]/10 to-[#E31B23]/10 rounded-full blur-[80px] md:blur-[150px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 mb-8 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-4 md:mb-6">
                            <Sparkles size={14} className="text-[#FFD100]" />
                            <span className="text-xs md:text-sm font-semibold text-white/80">{t.projects.badge}</span>
                        </div>

                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white">
                            {t.projects.title}{' '}
                            <span className="text-[#FFD100]">{t.projects.titleHighlight}</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/realisations"
                            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 border border-white/15 text-white font-semibold text-sm md:text-base active:scale-95 transition-transform"
                        >
                            {t.projects.viewAll}
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid - Horizontal scroll on mobile */}
                <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex-shrink-0 w-[280px] md:w-auto"
                        >
                            <Link to="/realisations" className="block group">
                                {/* Image container */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-70" />

                                    {/* Category badge */}
                                    <div
                                        className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full text-xs font-semibold"
                                        style={{
                                            backgroundColor: `${project.color}25`,
                                            color: project.color,
                                            border: `1px solid ${project.color}40`,
                                        }}
                                    >
                                        {project.category}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-base md:text-xl font-bold text-white group-active:text-[#FFD100] md:group-hover:text-[#FFD100] transition-colors">
                                    {project.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-16 flex justify-center gap-6 md:gap-16"
                >
                    {[
                        { value: "100+", label: t.projects.stat1, color: "#FFD100" },
                        { value: "98%", label: t.projects.stat2, color: "#009E49" },
                        { value: t.projects.statYears, label: t.projects.stat3, color: "#E31B23" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div
                                className="text-xl md:text-4xl font-black mb-0.5 md:mb-1"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-sm text-white/40 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
