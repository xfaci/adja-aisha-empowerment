import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle } from 'lucide-react';

export default function RealizationsContent() {
    const { realizationsData, updateData } = useSiteData();
    const [realizations, setRealizations] = useState(realizationsData);
    const [isSaved, setIsSaved] = useState(false);

    const handleRealizationChange = (index: number, field: string, value: string) => {
        const updated = [...realizations];
        updated[index] = { ...updated[index], [field]: value };
        setRealizations(updated);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        updateData({ realizationsData: realizations });

        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Réalisations / Projets</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Gérez la liste de vos projets mis en avant.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {realizations.map((item, index) => (
                    <div key={item.id} className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 border-b pb-2 flex items-center justify-between">
                            Projet {index + 1}
                            <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                Image requise via lien (URL)
                            </span>
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Titre du Projet</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        value={item.title}
                                        onChange={(e) => handleRealizationChange(index, 'title', e.target.value)}
                                        className="shadow-sm focus:ring-[--color-brand-gold] focus:border-[--color-brand-gold] block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        value={item.category}
                                        onChange={(e) => handleRealizationChange(index, 'category', e.target.value)}
                                        className="shadow-sm focus:ring-[--color-brand-gold] focus:border-[--color-brand-gold] block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Lien de l'image (URL)</label>
                                <div className="mt-1 flex gap-4">
                                    <input
                                        type="text"
                                        value={item.image}
                                        onChange={(e) => handleRealizationChange(index, 'image', e.target.value)}
                                        className="shadow-sm focus:ring-[--color-brand-gold] focus:border-[--color-brand-gold] block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                                        placeholder="https://..."
                                    />
                                    {item.image && (
                                        <div className="w-16 h-10 overflow-hidden rounded border border-gray-200">
                                            <img src={item.image} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

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
                        Enregistrer les projets
                    </button>
                </div>
            </form>
        </div>
    );
}
