import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const NotFound = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <span className="text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E31B23] via-[#FFD100] to-[#009E49] leading-none">
                            404
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[--color-brand-red]/20 via-[--color-brand-gold]/20 to-[--color-brand-green]/20 blur-3xl -z-10" />
                    </div>

                    {/* Message */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-4xl font-bold text-white mb-4"
                    >
                        {t.notFound.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/60 text-lg mb-10 max-w-md mx-auto"
                    >
                        {t.notFound.subtitle}
                    </motion.p>

                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[--color-brand-gold] to-[#e6bc00] text-black font-bold py-4 px-8 rounded-full hover:shadow-[0_0_40px_rgba(255,209,0,0.4)] transition-all"
                        >
                            <ArrowLeft size={20} />
                            {t.notFound.button}
                            <Home size={20} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[--color-brand-gold]/10 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[--color-brand-green]/10 rounded-full blur-[100px] -z-10" />
            </div>
        </div>
    );
};

export default NotFound;
