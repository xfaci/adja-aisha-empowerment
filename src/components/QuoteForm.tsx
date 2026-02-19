import { useState } from 'react';
import { MessageCircle, Sparkles, Send } from 'lucide-react';
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

    const inputClass = "w-full bg-white/5 text-white border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-[--color-brand-gold] focus:shadow-[0_0_20px_rgba(255,209,0,0.15)] transition-all duration-300 placeholder:text-white/30";

    return (
        <section id="quote" className="py-24 md:py-32 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#191F31] via-[#1A2035] to-[#191F31]" />

            {/* Glowing orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[--color-brand-gold] rounded-full blur-[200px] opacity-20"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[--color-brand-green] rounded-full blur-[200px] opacity-15"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-brand-gold]/10 border border-[--color-brand-gold]/30 mb-6"
                        >
                            <Sparkles size={16} className="text-[--color-brand-gold]" />
                            <span className="text-sm font-medium text-[--color-brand-gold]">{t.quote.badge}</span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            {t.quote.title}{' '}
                            <span className="text-[#FFD100]">
                                {t.quote.titleHighlight}
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-xl mx-auto">
                            {t.quote.subtitle}
                        </p>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        {/* Card glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[--color-brand-red]/20 via-[--color-brand-gold]/20 to-[--color-brand-green]/20 rounded-[2rem] blur-xl opacity-50" />

                        <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <motion.div
                                        animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="name">
                                            {t.quote.fullName} *
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
                                        animate={focusedField === 'phone' ? { scale: 1.02 } : { scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="phone">
                                            {t.quote.phone} *
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="email">
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
                                        <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="location">
                                            {t.quote.location} *
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
                                    <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="projectType">
                                        {t.quote.projectType} *
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
                                    <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="message">
                                        {t.quote.description} *
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

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,209,0,0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group w-full bg-gradient-to-r from-[--color-brand-gold] to-[#e6bc00] hover:from-white hover:to-white text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,209,0,0.3)]"
                                >
                                    <MessageCircle size={20} />
                                    {t.quote.submit}
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <Send size={18} />
                                    </motion.span>
                                </motion.button>

                                <p className="text-center text-xs text-white/40 flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
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
