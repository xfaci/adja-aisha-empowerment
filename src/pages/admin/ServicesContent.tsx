import { useState } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle, Briefcase, Shield, Sun, Building2 } from 'lucide-react';

const serviceIcons = {
    security: Shield,
    solar: Sun,
    construction: Building2
};

const serviceColors = {
    security: 'from-red-500 to-red-600',
    solar: 'from-yellow-500 to-orange-500',
    construction: 'from-green-500 to-green-600'
};

export default function ServicesContent() {
    const { servicesData, updateData } = useSiteData();
    const [services, setServices] = useState(servicesData);
    const [isSaved, setIsSaved] = useState(false);

    const handleServiceChange = (index: number, field: string, value: string) => {
        const updatedServices = [...services];
        updatedServices[index] = { ...updatedServices[index], [field]: value };
        setServices(updatedServices);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateData({ servicesData: services });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto pb-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Services</h1>
                    <p className="text-sm text-gray-500">
                        Edit the services you offer to your customers.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Services List */}
                <div className="space-y-4 mb-6">
                    {services.map((service, index) => {
                        const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons] || Briefcase;
                        const colorClass = serviceColors[service.id as keyof typeof serviceColors] || 'from-gray-500 to-gray-600';

                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                            >
                                {/* Service Header */}
                                <div className="flex items-center gap-4 p-4 border-b border-gray-100">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                                        <IconComponent className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {service.id === 'security' && 'Security'}
                                            {service.id === 'solar' && 'Solar Energy'}
                                            {service.id === 'construction' && 'Construction'}
                                        </h3>
                                        <p className="text-sm text-gray-500">Service {index + 1}</p>
                                    </div>
                                </div>

                                {/* Service Form */}
                                <div className="p-4 sm:p-6 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Title
                                        </label>
                                        <input
                                            type="text"
                                            value={service.title}
                                            onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                                            placeholder="e.g., Electronic Security"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            rows={3}
                                            value={service.description}
                                            onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                                            placeholder="Describe what this service includes..."
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Save Button */}
                <div className="sticky bottom-4 bg-white rounded-xl border border-gray-200 shadow-lg p-4 flex items-center justify-between">
                    <div>
                        {isSaved && (
                            <span className="flex items-center text-green-600 text-sm font-medium">
                                <CheckCircle className="w-5 h-5 mr-1.5" />
                                Saved successfully!
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFD100] to-[#FFC000] hover:from-[#FFC000] hover:to-[#FFB000] text-gray-900 font-semibold rounded-xl transition-all shadow-lg shadow-[#FFD100]/20"
                    >
                        <Save className="w-5 h-5" />
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
