import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
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
        <section id="projects" className="py-28 md:py-40 relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0F1419] to-[#0D1117]" />

            {/* Animated glow */}
            <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1], x: [-50, 50, -50] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-[#E31B23]/10 via-[#FFD100]/15 to-[#009E49]/10 rounded-full blur-[200px]"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/15 mb-6 backdrop-blur-sm"
                        >
                            <Sparkles size={16} className="text-[#FFD100]" />
                            <span className="text-sm font-semibold text-white/80">{t.projects.badge}</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                            {t.projects.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] to-[#FF8C00]">
                                {t.projects.titleHighlight}
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/realisations"
                            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            {t.projects.viewAll}
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group relative"
                        >
                            <Link to="/realisations" className="block">
                                {/* Image container */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl mb-6">
                                    {/* Glow effect on hover */}
                                    <motion.div
                                        className="absolute -inset-3 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"
                                        style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }}
                                    />

                                    {/* Image */}
                                    <div className="relative h-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-white/25 transition-all duration-500">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                        />

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                                        {/* Hover indicator */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        >
                                            <ExternalLink size={20} className="text-white" />
                                        </motion.div>

                                        {/* Category badge */}
                                        <div
                                            className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border"
                                            style={{
                                                backgroundColor: `${project.color}20`,
                                                borderColor: `${project.color}40`,
                                                color: project.color,
                                                boxShadow: `0 0 20px ${project.color}30`,
                                            }}
                                        >
                                            {project.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FFD100] transition-colors duration-300 flex items-center gap-3">
                                    {project.title}
                                    <ArrowRight
                                        size={20}
                                        className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    />
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom stats with premium design */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
                >
                    {[
                        { value: "100+", label: t.projects.stat1, color: "#FFD100" },
                        { value: "98%", label: t.projects.stat2, color: "#009E49" },
                        { value: t.projects.statYears, label: t.projects.stat3, color: "#E31B23" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center group cursor-default"
                        >
                            <div
                                className="text-3xl md:text-4xl lg:text-5xl font-black mb-2"
                                style={{
                                    color: stat.color,
                                    textShadow: `0 0 40px ${stat.color}40`
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-white/40 font-medium group-hover:text-white/60 transition-colors">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
