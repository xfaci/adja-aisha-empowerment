import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle } from 'lucide-react';

export default function HomeContent() {
    const { heroData, updateData } = useSiteData();
    const [title, setTitle] = useState(heroData.title);
    const [subtitle, setSubtitle] = useState(heroData.subtitle);
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        updateData({
            hero: {
                title,
                subtitle
            }
        });

        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Page d'Accueil</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Modifiez le contenu principal (Hero) qui s'affiche en haut de votre page d'accueil public.
                </p>
            </div>

            <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Titre Principal
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="shadow-sm focus:ring-[--color-brand-gold] focus:border-[--color-brand-gold] block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Exemple: "L'Énergie Solaire et la Sécurité à Votre Portée"
                        </p>
                    </div>

                    <div>
                        <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                            Sous-titre / Description
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="subtitle"
                                name="subtitle"
                                rows={4}
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                className="shadow-sm focus:ring-[--color-brand-gold] focus:border-[--color-brand-gold] block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Ce texte apparait juste en dessous du titre principal, et introduit vos services.
                        </p>
                    </div>

                    <div className="pt-5 border-t border-gray-200">
                        <div className="flex justify-end items-center">
                            {isSaved && (
                                <span className="flex items-center text-green-600 text-sm font-medium mr-4">
                                    <CheckCircle className="w-5 h-5 mr-1" />
                                    Sauvegardé avec succès
                                </span>
                            )}
                            <button
                                type="submit"
                                className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-[--color-brand-gold] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-brand-gold]"
                            >
                                <Save className="w-4 h-4 mr-2" />
                                Enregistrer les modifications
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
