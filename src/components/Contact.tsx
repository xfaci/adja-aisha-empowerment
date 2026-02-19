import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `
*Message de Contact - HADJA AISHA EMPOWERMENT*
--------------------------------
*Nom:* ${formData.name}
*Email:* ${formData.email || 'Non renseigné'}

*Message:*
${formData.message}
        `.trim();

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/224613355007?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    const inputClass = "w-full bg-white/5 text-white border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-[--color-brand-gold] focus:shadow-[0_0_20px_rgba(255,209,0,0.15)] transition-all duration-300 placeholder:text-white/30";

    const contactInfo = [
        {
            icon: MapPin,
            label: "Adresse",
            value: "Villa Michel Collet, 47 Rue Syli, Conakry",
            href: null,
            color: "#E31B23"
        },
        {
            icon: Mail,
            label: "Email",
            value: "kalifakeita470@gmail.com",
            href: "mailto:kalifakeita470@gmail.com",
            color: "#FFD100"
        },
        {
            icon: Phone,
            label: "Téléphone",
            value: "+224 613 35 50 07",
            href: "tel:+224613355007",
            color: "#009E49"
        }
    ];

    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#191F31] via-[#1A2035] to-[#191F31]" />

            {/* Animated glowing orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[--color-brand-green] rounded-full blur-[200px] opacity-15"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[--color-brand-red] rounded-full blur-[200px] opacity-10"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-medium text-[--color-brand-gold] tracking-wider uppercase mb-4 block">
                            Contact
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Parlons de{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-brand-gold] to-[--color-brand-green]">
                                votre projet
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg mb-10">
                            Notre équipe est prête à vous accompagner dans tous vos projets.
                        </p>

                        {/* Contact Info with glow */}
                        <div className="space-y-5 mb-10">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{
                                            backgroundColor: `${item.color}20`,
                                            boxShadow: `0 0 20px ${item.color}30`
                                        }}
                                    >
                                        <item.icon size={20} style={{ color: item.color }} />
                                    </motion.div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-[--color-brand-gold] transition-colors font-medium"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map with glow */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-[--color-brand-red]/20 via-[--color-brand-gold]/20 to-[--color-brand-green]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4!2d-13.712!3d9.535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x604cc09990175793!2sVILLA%20MICHEL%20COLLET!5e0!3m2!1sfr!2sgn!4v1700000000000!5m2!1sfr!2sgn"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation HADJA AISHA EMPOWERMENT"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Form with glow */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Card glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[--color-brand-red]/20 via-[--color-brand-gold]/20 to-[--color-brand-green]/20 rounded-[2rem] blur-xl opacity-50" />

                        <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[--color-brand-gold]/20 flex items-center justify-center">
                                    <MessageCircle size={20} className="text-[--color-brand-gold]" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Envoyez-nous un message
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <motion.div
                                    animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label htmlFor="contact-name" className="block text-white/70 text-sm mb-2 font-medium">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
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
                                    animate={focusedField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label htmlFor="contact-email" className="block text-white/70 text-sm mb-2 font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className={inputClass}
                                        placeholder="votre@email.com"
                                    />
                                </motion.div>

                                <motion.div
                                    animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label htmlFor="contact-message" className="block text-white/70 text-sm mb-2 font-medium">
                                        Message *
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        rows={5}
                                        className={`${inputClass} resize-none`}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    ></textarea>
                                </motion.div>

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

export default Contact;
