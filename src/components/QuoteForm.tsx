import { useState } from 'react';
import { MessageCircle, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const QuoteForm = () => {
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
*Demande de Devis - HADJA AISHA EMPOWERMENT*
--------------------------------
*Nom:* ${formData.name}
*Téléphone:* ${formData.phone}
*Email:* ${formData.email || 'Non renseigné'}
*Type de projet:* ${formData.projectType}
*Lieu:* ${formData.location}

*Message:*
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
                            <span className="text-sm font-medium text-[--color-brand-gold]">Devis gratuit & sans engagement</span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Démarrez votre{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-brand-gold] to-[--color-brand-green]">
                                projet
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-xl mx-auto">
                            Décrivez votre besoin et recevez une estimation personnalisée via WhatsApp sous 24h.
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
                                            Nom complet *
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
                                            placeholder="Votre nom"
                                        />
                                    </motion.div>
                                    <motion.div
                                        animate={focusedField === 'phone' ? { scale: 1.02 } : { scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="phone">
                                            Téléphone WhatsApp *
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
                                            Email (optionnel)
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
                                            Ville / Quartier *
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            className={inputClass}
                                            placeholder="Ex: Conakry, Kaloum"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="projectType">
                                        Type de projet *
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className={inputClass}
                                    >
                                        <option value="Solaire">☀️ Installation de Panneaux Solaires</option>
                                        <option value="Sécurité">🔒 Système de Sécurité / Vidéosurveillance</option>
                                        <option value="Construction">🏗️ Construction / BTP</option>
                                        <option value="Autre">📋 Autre demande</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-white/70 text-sm mb-2 font-medium" htmlFor="message">
                                        Description du projet *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        className={`${inputClass} resize-none`}
                                        placeholder="Décrivez votre projet en quelques mots..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,209,0,0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group w-full bg-gradient-to-r from-[--color-brand-gold] to-[#e6bc00] hover:from-white hover:to-white text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,209,0,0.3)]"
                                >
                                    <MessageCircle size={20} />
                                    Envoyer via WhatsApp
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        <Send size={18} />
                                    </motion.span>
                                </motion.button>

                                <p className="text-center text-xs text-white/40 flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Réponse rapide garantie sous 24h
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
