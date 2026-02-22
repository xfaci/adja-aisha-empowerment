import { useState } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle, Home, Eye } from 'lucide-react';

export default function HomeContent() {
    const { heroData, updateData } = useSiteData();
    const [title, setTitle] = useState(heroData.title);
    const [subtitle, setSubtitle] = useState(heroData.subtitle);
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
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
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Homepage</h1>
                    <p className="text-sm text-gray-500">
                        Edit the main content that appears at the top of your website.
                    </p>
                </div>
            </div>

            {/* Preview Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 mb-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Live Preview</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{title || 'Your Title Here'}</h2>
                <p className="text-white/70 text-sm">{subtitle || 'Your subtitle will appear here...'}</p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-6">
                        {/* Title Field */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                Main Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g., Solar Energy and Security at Your Fingertips"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all text-lg"
                            />
                            <p className="mt-2 text-sm text-gray-500">
                                This is the big headline visitors see first.
                            </p>
                        </div>

                        {/* Subtitle Field */}
                        <div>
                            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                                Subtitle / Description
                            </label>
                            <textarea
                                id="subtitle"
                                rows={4}
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                placeholder="Describe your services in a few sentences..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all resize-none"
                            />
                            <p className="mt-2 text-sm text-gray-500">
                                This text appears below the main title. Keep it short and clear.
                            </p>
                        </div>
                    </div>

                    {/* Save Section */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
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
        </div>
    );
}
