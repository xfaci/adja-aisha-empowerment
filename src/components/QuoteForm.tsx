import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
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

    const inputClass = "w-full bg-white/5 text-white border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-[--color-brand-gold] focus:ring-1 focus:ring-[--color-brand-gold]/50 transition-all placeholder:text-white/30";

    return (
        <section id="quote" className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[--color-brand-gold]/5 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-sm font-medium text-[--color-brand-gold] tracking-wider uppercase mb-4 block">
                            Devis gratuit
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Démarrez votre projet
                        </h2>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">
                            Décrivez votre besoin et recevez une estimation personnalisée via WhatsApp.
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-white/60 text-sm mb-2" htmlFor="name">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={inputClass}
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white/60 text-sm mb-2" htmlFor="phone">
                                        Téléphone WhatsApp *
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
                                    <label className="block text-white/60 text-sm mb-2" htmlFor="email">
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
                                    <label className="block text-white/60 text-sm mb-2" htmlFor="location">
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
                                <label className="block text-white/60 text-sm mb-2" htmlFor="projectType">
                                    Type de projet *
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="Solaire">Installation de Panneaux Solaires</option>
                                    <option value="Sécurité">Système de Sécurité / Vidéosurveillance</option>
                                    <option value="Construction">Construction / BTP</option>
                                    <option value="Autre">Autre demande</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-white/60 text-sm mb-2" htmlFor="message">
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

                            <button
                                type="submit"
                                className="group w-full bg-[--color-brand-gold] hover:bg-white text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <MessageCircle size={20} />
                                Envoyer via WhatsApp
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-center text-xs text-white/30">
                                Vous serez redirigé vers WhatsApp pour finaliser votre demande.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteForm;
