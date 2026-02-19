import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

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

    const inputClass = "w-full bg-white/5 text-white border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-[--color-brand-gold] focus:ring-1 focus:ring-[--color-brand-gold]/50 transition-all placeholder:text-white/30";

    const contactInfo = [
        {
            icon: MapPin,
            label: "Adresse",
            value: "Villa Michel Collet, 47 Rue Syli, Conakry",
            href: null
        },
        {
            icon: Mail,
            label: "Email",
            value: "kalifakeita470@gmail.com",
            href: "mailto:kalifakeita470@gmail.com"
        },
        {
            icon: Phone,
            label: "Téléphone",
            value: "+224 613 35 50 07",
            href: "tel:+224613355007"
        }
    ];

    return (
        <section id="contact" className="py-24 md:py-32 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-medium text-[--color-brand-gold] tracking-wider uppercase mb-4 block">
                            Contact
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Parlons de votre projet
                        </h2>
                        <p className="text-white/50 text-lg mb-10">
                            Notre équipe est prête à vous accompagner dans tous vos projets.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6 mb-10">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <item.icon size={18} className="text-white/60" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-[--color-brand-gold] transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map */}
                        <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4!2d-13.7123!3d9.5356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd435985!2sVilla%20Michel%20Collet%2C%2047%20Rue%20Syli%2C%20Conakry!5e0!3m2!1sfr!2sgn"
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

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6">
                            Envoyez-nous un message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="contact-name" className="block text-white/60 text-sm mb-2">
                                    Nom complet *
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={inputClass}
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-white/60 text-sm mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-white/60 text-sm mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className={`${inputClass} resize-none`}
                                    placeholder="Comment pouvons-nous vous aider ?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group w-full bg-[--color-brand-gold] hover:bg-white text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Envoyer via WhatsApp
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-center text-xs text-white/30">
                                Vous serez redirigé vers WhatsApp pour envoyer votre message.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
