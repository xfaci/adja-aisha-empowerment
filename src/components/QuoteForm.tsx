import { useState } from 'react';
import { MessageCircle, Send, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import MagneticButton from './MagneticButton';

const QuoteForm = () => {
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        projectType: 'Solaire',
        location: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `
*${language === 'zh' ? '报价请求' : language === 'en' ? 'Quote Request' : 'Demande de Devis'} - HADJA AISHA EMPOWERMENT*
--------------------------------
*${t.quote.fullName}:* ${formData.name}
*${t.quote.phone}:* ${formData.phone}
*${t.quote.email}:* ${formData.email || (language === 'zh' ? '未提供' : language === 'en' ? 'Not provided' : 'Non renseigné')}
*${t.quote.projectType}:* ${formData.projectType}
*${t.quote.location}:* ${formData.location}

*${language === 'zh' ? '留言' : language === 'en' ? 'Message' : 'Message'}:*
${formData.message}
        `.trim();

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/224613355007?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    const inputClass = "w-full bg-white/5 text-white border border-white/10 rounded-xl py-3.5 px-4 md:py-4 md:px-5 focus:outline-none focus:border-[#FFD100]/50 focus:bg-white/[0.07] transition-all duration-300 placeholder:text-white/30 text-sm md:text-base";

    return (
        <section id="quote" className="py-16 md:py-32 relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-[#0D1117]" />

            {/* Subtle orbs - smaller on mobile */}
            <div className="absolute top-0 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#FFD100]/15 rounded-full blur-[60px] md:blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#009E49]/10 rounded-full blur-[60px] md:blur-[120px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD100]/15 border border-[#FFD100]/30 mb-4 md:mb-6">
                            <Zap size={14} className="text-[#FFD100]" />
                            <span className="text-xs md:text-sm font-semibold text-[#FFD100]">{t.quote.badge}</span>
                        </div>

                        <h2 className="text-2xl md:text-5xl font-black text-white mb-3 md:mb-4">
                            {t.quote.title}{' '}
                            <span className="text-[#FFD100]">{t.quote.titleHighlight}</span>
                        </h2>
                        <p className="text-white/50 text-sm md:text-lg max-w-xl mx-auto">
                            {t.quote.subtitle}
                        </p>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-white/70 text-xs md:text-sm mb-2 font-semibold" htmlFor="name">
                                        {t.quote.fullName} <span className="text-[#FFD100]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                        placeholder={language === 'zh' ? '您的姓名' : language === 'en' ? 'Your name' : 'Votre nom'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/70 text-xs md:text-sm mb-2 font-semibold" htmlFor="phone">
                                        {t.quote.phone} <span className="text-[#FFD100]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                        placeholder="+224 ..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-white/70 text-xs md:text-sm mb-2 font-semibold" htmlFor="email">
                                        {t.quote.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClass}
                                        placeholder="email@exemple.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/70 text-xs md:text-sm mb-2 font-semibold" htmlFor="location">
                                        {t.quote.location} <span className="text-[#FFD100]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                        placeholder={language === 'zh' ? '例如: 科纳克里' : language === 'en' ? 'Ex: Conakry' : 'Ex: Conakry, Kaloum'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white/70 text-xs md:text-sm mb-2 font-semibold" htmlFor="projectType">
                                    {t.quote.projectType} <span className="text-[#FFD100]">*</span>
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="Solaire">☀️ {t.quote.projectTypes.solar}</option>
                                    <option value="Sécurité">🔒 {t.quote.projectTypes.security}</option>
                                    <option value="Construction">🏗️ {t.quote.projectTypes.construction}</option>
                                    <option value="Autre">📋 {t.quote.projectTypes.other}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white/70 text-xs md:text-sm mb-2 font-semibold" htmlFor="message">
                                    {t.quote.description} <span className="text-[#FFD100]">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    className={`${inputClass} resize-none`}
                                    placeholder={t.quote.descriptionPlaceholder}
                                ></textarea>
                            </div>

                            <MagneticButton strength={0.3}>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(255,209,0,0.5)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group w-full bg-gradient-to-r from-[#FFD100] via-[#FFDA33] to-[#FFD100] text-[#0D1117] font-black py-5 px-10 rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 text-lg shadow-[0_0_40px_rgba(255,209,0,0.3)] hover:shadow-[0_0_60px_rgba(255,209,0,0.5)]"
                                >
                                    <MessageCircle size={22} />
                                    {t.quote.submit}
                                    <motion.span
                                        animate={{ x: [0, 8, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Send size={20} />
                                    </motion.span>
                                </motion.button>
                            </MagneticButton>

                            <p className="text-center text-xs md:text-sm text-white/40 flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-[#009E49] rounded-full animate-pulse" />
                                {t.quote.guarantee}
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteForm;
