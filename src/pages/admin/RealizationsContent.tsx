import { useState } from 'react';
import { useSiteData } from '../../store/dataStore';
import { Save, CheckCircle, Plus, Trash2, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import ImageUpload from '../../components/admin/ImageUpload';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

const categoryOptions = [
    { value: 'Security', label: 'Security' },
    { value: 'Solar Energy', label: 'Solar Energy' },
    { value: 'Construction', label: 'Construction' },
];

export default function RealizationsContent() {
    const { realizationsData, updateData } = useSiteData();
    const [realizations, setRealizations] = useState<Project[]>(realizationsData);
    const [isSaved, setIsSaved] = useState(false);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleRealizationChange = (index: number, field: string, value: string) => {
        const updated = [...realizations];
        updated[index] = { ...updated[index], [field]: value };
        setRealizations(updated);
    };

    const handleAddProject = () => {
        const newId = Date.now();
        const newProject: Project = {
            id: newId,
            title: '',
            category: 'Security',
            image: ''
        };
        setRealizations([...realizations, newProject]);
        setExpandedId(newId);
    };

    const handleDeleteProject = (index: number) => {
        if (confirm('Are you sure you want to delete this project? This cannot be undone.')) {
            const updated = realizations.filter((_, i) => i !== index);
            setRealizations(updated);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateData({ realizationsData: realizations });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Projects / Realizations</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Add photos of your completed projects to showcase your work.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={handleAddProject}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FFD100] hover:bg-[#FFC000] text-gray-900 font-medium rounded-xl transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add New Project
                </button>
            </div>

            {/* Info Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                    <ImageIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-sm text-blue-800 font-medium">Easy Image Upload</p>
                        <p className="text-sm text-blue-700 mt-1">
                            Tap the upload area to select photos directly from your iPad. No links needed!
                        </p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Projects List */}
                <div className="space-y-4 mb-6">
                    {realizations.length === 0 ? (
                        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                            <p className="text-gray-500 mb-4">Add your first project to showcase your work.</p>
                            <button
                                type="button"
                                onClick={handleAddProject}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD100] hover:bg-[#FFC000] text-gray-900 font-medium rounded-lg transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Add Project
                            </button>
                        </div>
                    ) : (
                        realizations.map((item, index) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                            >
                                {/* Project Header - Always visible */}
                                <div
                                    className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50"
                                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                                >
                                    {/* Thumbnail */}
                                    <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                        {item.image ? (
                                            <img src={item.image} alt="" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <ImageIcon className="w-5 h-5 text-gray-400" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-medium text-gray-900 truncate">
                                            {item.title || 'Untitled Project'}
                                        </h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleDeleteProject(index); }}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete project"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        {expandedId === item.id ? (
                                            <ChevronUp className="w-5 h-5 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                {expandedId === item.id && (
                                    <div className="border-t border-gray-100 p-4 sm:p-6 space-y-5 bg-gray-50/50">
                                        {/* Image Upload */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Photo
                                            </label>
                                            <ImageUpload
                                                currentImage={item.image}
                                                onImageChange={(imageData) => handleRealizationChange(index, 'image', imageData)}
                                            />
                                        </div>

                                        {/* Title */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Title
                                            </label>
                                            <input
                                                type="text"
                                                value={item.title}
                                                onChange={(e) => handleRealizationChange(index, 'title', e.target.value)}
                                                placeholder="e.g., Ministry of Budget Security System"
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all"
                                            />
                                        </div>

                                        {/* Category */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Category
                                            </label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {categoryOptions.map((option) => (
                                                    <button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => handleRealizationChange(index, 'category', option.value)}
                                                        className={`
                                                            px-4 py-3 rounded-xl text-sm font-medium transition-all
                                                            ${item.category === option.value
                                                                ? 'bg-[#FFD100] text-gray-900 ring-2 ring-[#FFD100] ring-offset-2'
                                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-[#FFD100]'
                                                            }
                                                        `}
                                                    >
                                                        {option.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Save Button */}
                {realizations.length > 0 && (
                    <div className="sticky bottom-4 bg-white rounded-xl border border-gray-200 shadow-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
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
                )}
            </form>
        </div>
    );
}
