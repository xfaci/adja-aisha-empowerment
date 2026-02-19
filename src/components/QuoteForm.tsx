import { useState } from 'react';
import { MessageCircle, Send, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

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
    const [focusedField, setFocusedField] = useState<string | null>(null);

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

    const inputClass = "w-full bg-white/[0.03] text-white border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#FFD100]/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(255,209,0,0.1)] transition-all duration-500 placeholder:text-white/30 text-base";

    return (
        <section id="quote" className="py-28 md:py-40 relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0F1419] to-[#0D1117]" />

            {/* Animated glowing orbs */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-[#FFD100] to-[#FF8C00] rounded-full blur-[250px] opacity-20"
            />
            <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#009E49] to-[#00D68F] rounded-full blur-[250px] opacity-15"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD100]/20 to-[#FFD100]/5 border border-[#FFD100]/30 mb-8 backdrop-blur-sm"
                        >
                            <Zap size={16} className="text-[#FFD100]" />
                            <span className="text-sm font-semibold text-[#FFD100]">{t.quote.badge}</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                            {t.quote.title}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] via-[#FF8C00] to-[#FFD100]">
                                {t.quote.titleHighlight}
                            </span>
                        </h2>
                        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            {t.quote.subtitle}
                        </p>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="relative"
                    >
                        {/* Card glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#E31B23]/20 via-[#FFD100]/25 to-[#009E49]/20 rounded-[2.5rem] blur-2xl opacity-50" />

                        <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl">
                            {/* Decorative corner elements */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#FFD100]/30 rounded-tl-[2rem]" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#009E49]/30 rounded-br-[2rem]" />

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        animate={focusedField === 'name' ? { scale: 1.01 } : { scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-white/70 text-sm mb-3 font-semibold" htmlFor="name">
                                            {t.quote.fullName} <span className="text-[#FFD100]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={inputClass}
                                            placeholder={language === 'zh' ? '您的姓名' : language === 'en' ? 'Your name' : 'Votre nom'}
                                        />
                                    </motion.div>
                                    <motion.div
                                        animate={focusedField === 'phone' ? { scale: 1.01 } : { scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-white/70 text-sm mb-3 font-semibold" htmlFor="phone">
                                            {t.quote.phone} <span className="text-[#FFD100]">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className={inputClass}
                                            placeholder="+224 ..."
                                        />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/70 text-sm mb-3 font-semibold" htmlFor="email">
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
                                        <label className="block text-white/70 text-sm mb-3 font-semibold" htmlFor="location">
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
                                            placeholder={language === 'zh' ? '例如: 科纳克里' : language === 'en' ? 'Ex: Conakry, Kaloum' : 'Ex: Conakry, Kaloum'}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white/70 text-sm mb-3 font-semibold" htmlFor="projectType">
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
                                    <label className="block text-white/70 text-sm mb-3 font-semibold" htmlFor="message">
                                        {t.quote.description} <span className="text-[#FFD100]">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                        className={`${inputClass} resize-none`}
                                        placeholder={t.quote.descriptionPlaceholder}
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(255,209,0,0.4)" }}
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

                                <p className="text-center text-sm text-white/40 flex items-center justify-center gap-3 mt-6">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009E49] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#009E49]"></span>
                                    </span>
                                    {t.quote.guarantee}
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteForm;
