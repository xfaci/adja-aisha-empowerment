import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const WhatsAppButton = () => {
    const { t } = useLanguage();
    const message = encodeURIComponent(t.whatsapp.message);

    return (
        <a
            href={`https://wa.me/224613355007?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-6 right-6 z-50 bg-[--color-brand-green] hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center"
            aria-label={t.whatsapp.tooltip}
        >
            <div className="absolute inset-0 rounded-full bg-[--color-brand-green] animate-ping opacity-20"></div>
            <MessageCircle size={32} className="relative z-10" />
            <span className="absolute right-full mr-3 bg-white text-[--color-dark] text-xs font-bold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                {t.whatsapp.tooltip}
            </span>
        </a>
    );
};

export default WhatsAppButton;
