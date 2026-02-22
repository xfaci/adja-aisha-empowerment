import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle } from 'lucide-react';

export default function AboutContent() {
    const { aboutData, updateData } = useSiteData();
    const [about, setAbout] = useState(aboutData);
    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (field: string, value: string) => {
        setAbout(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        updateData({ about });

        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Histoire & À Propos</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Modifiez la présentation de l'entreprise et les informations du dirigeant.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 border-b pb-2">
                        Titres et Paramètres Globaux
                    </h3>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Titre principal</label>
                                <input
                                    type="text"
                                    value={about.title}
                                    onChange={(e) => handleChange('title', e.target.value)}
                                    className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mot clé du titre (en Jaune)</label>
                                <input
                                    type="text"
                                    value={about.titleHighlight}
                                    onChange={(e) => handleChange('titleHighlight', e.target.value)}
                                    className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nom du Dirigeant</label>
                                <input
                                    type="text"
                                    value={about.leader}
                                    onChange={(e) => handleChange('leader', e.target.value)}
                                    className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Titre du dirigeant (ex: CEO)</label>
                                <input
                                    type="text"
                                    value={about.leaderTitle}
                                    onChange={(e) => handleChange('leaderTitle', e.target.value)}
                                    className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 border-b pb-2">
                        Textes
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Paragraphe 1 (Introduction)</label>
                            <textarea
                                rows={2}
                                value={about.description1}
                                onChange={(e) => handleChange('description1', e.target.value)}
                                className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Paragraphe 2 (Mission)</label>
                            <textarea
                                rows={3}
                                value={about.description2}
                                onChange={(e) => handleChange('description2', e.target.value)}
                                className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Citation du CEO</label>
                            <textarea
                                rows={2}
                                value={about.quote}
                                onChange={(e) => handleChange('quote', e.target.value)}
                                className="mt-1 block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 border-b pb-2">
                        Contacts globaux
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                            <input
                                type="text"
                                value={about.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={about.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Adresse</label>
                            <input
                                type="text"
                                value={about.address}
                                onChange={(e) => handleChange('address', e.target.value)}
                                className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg px-4 py-5 flex justify-end items-center">
                    {isSaved && (
                        <span className="flex items-center text-green-600 text-sm font-medium mr-4">
                            <CheckCircle className="w-5 h-5 mr-1" />
                            Sauvegardé avec succès
                        </span>
                    )}
                    <button
                        type="submit"
                        className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-[--color-brand-gold] hover:bg-yellow-500"
                    >
                        <Save className="w-4 h-4 mr-2" />
                        Enregistrer l'Histoire
                    </button>
                </div>
            </form>
        </div>
    );
}
