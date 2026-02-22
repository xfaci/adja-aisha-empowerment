import { useState } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle, FileText, User, Quote, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutContent() {
    const { aboutData, updateData } = useSiteData();
    const [about, setAbout] = useState(aboutData);
    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (field: string, value: string) => {
        setAbout((prev: typeof aboutData) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateData({ about });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto pb-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">About / Company Story</h1>
                    <p className="text-sm text-gray-500">
                        Edit your company information and CEO details.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Section */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-gray-50">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <h3 className="font-semibold text-gray-900">Page Title</h3>
                    </div>
                    <div className="p-4 sm:p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Main Title
                                </label>
                                <input
                                    type="text"
                                    value={about.title}
                                    onChange={(e) => handleChange('title', e.target.value)}
                                    placeholder="e.g., AISHA"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Highlighted Word <span className="text-[#FFD100]">(shown in gold)</span>
                                </label>
                                <input
                                    type="text"
                                    value={about.titleHighlight}
                                    onChange={(e) => handleChange('titleHighlight', e.target.value)}
                                    placeholder="e.g., EMPOWERMENT"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CEO Section */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-gray-50">
                        <User className="w-5 h-5 text-gray-500" />
                        <h3 className="font-semibold text-gray-900">CEO Information</h3>
                    </div>
                    <div className="p-4 sm:p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    CEO Name
                                </label>
                                <input
                                    type="text"
                                    value={about.leader}
                                    onChange={(e) => handleChange('leader', e.target.value)}
                                    placeholder="e.g., Mamady Kalifa KEITA"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    CEO Title
                                </label>
                                <input
                                    type="text"
                                    value={about.leaderTitle}
                                    onChange={(e) => handleChange('leaderTitle', e.target.value)}
                                    placeholder="e.g., President & CEO"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-gray-50">
                        <Quote className="w-5 h-5 text-gray-500" />
                        <h3 className="font-semibold text-gray-900">Company Description</h3>
                    </div>
                    <div className="p-4 sm:p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Introduction Text
                            </label>
                            <textarea
                                rows={2}
                                value={about.description1}
                                onChange={(e) => handleChange('description1', e.target.value)}
                                placeholder="Opening sentence about your company..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all resize-none"
                            />
                            <p className="mt-1 text-xs text-gray-500">This appears before the CEO name.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mission Statement
                            </label>
                            <textarea
                                rows={3}
                                value={about.description2}
                                onChange={(e) => handleChange('description2', e.target.value)}
                                placeholder="Describe your company mission..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                CEO Quote
                            </label>
                            <textarea
                                rows={2}
                                value={about.quote}
                                onChange={(e) => handleChange('quote', e.target.value)}
                                placeholder="A memorable quote from the CEO..."
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all resize-none"
                            />
                            <p className="mt-1 text-xs text-gray-500">This quote will be displayed with the CEO's name.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-gray-50">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <h3 className="font-semibold text-gray-900">Contact Information</h3>
                    </div>
                    <div className="p-4 sm:p-6 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Phone className="w-4 h-4 inline mr-1" />
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    value={about.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    placeholder="+224 XXX XXX XXX"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <Mail className="w-4 h-4 inline mr-1" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={about.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="contact@example.com"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <MapPin className="w-4 h-4 inline mr-1" />
                                    Address
                                </label>
                                <input
                                    type="text"
                                    value={about.address}
                                    onChange={(e) => handleChange('address', e.target.value)}
                                    placeholder="Your office address"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                />
                            </div>
                        </div>
                    </div>
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
