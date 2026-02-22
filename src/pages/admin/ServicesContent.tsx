import { useState } from 'react';
import type { FormEvent } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle } from 'lucide-react';

export default function ServicesContent() {
    const { servicesData, updateData } = useSiteData();
    const [services, setServices] = useState(servicesData);
    const [isSaved, setIsSaved] = useState(false);

    const handleServiceChange = (index: number, field: string, value: string) => {
        const updatedServices = [...services];
        updatedServices[index] = { ...updatedServices[index], [field]: value };
        setServices(updatedServices);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        updateData({ servicesData: services });

        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Services</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Gérez les services que vous proposez (titres et descriptions).
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {services.map((service, index) => (
                    <div key={service.id} className="bg-white shadow rounded-lg px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4 border-b pb-2">
                            Service {index + 1}
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Titre</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        value={service.title}
                                        onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                                        className="shadow-sm focus:ring-[--color-brand-gold] focus:border-[--color-brand-gold] block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 border"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <div className="mt-1">
                                    <textarea
                                        rows={3}
                                        value={service.description}
                                        onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                                        className="shadow-sm focus:ring-[--color-brand-gold] focus:border-[--color-brand-gold] block w-full sm:text-sm border border-gray-300 rounded-md py-2 px-3"
                                    />
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
                        Enregistrer tous les services
                    </button>
                </div>
            </form>
        </div>
    );
}
