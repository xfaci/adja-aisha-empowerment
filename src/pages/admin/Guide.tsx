import {
    HelpCircle,
    Home,
    Briefcase,
    Image as ImageIcon,
    FileText,
    Upload,
    Save,
    Trash2,
    Plus,
    CheckCircle,
    AlertCircle,
    Smartphone,
    Monitor,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
    {
        id: 'homepage',
        title: 'Editing the Homepage',
        icon: Home,
        color: 'blue',
        steps: [
            'Click on "Homepage" in the sidebar menu',
            'Edit the main title that appears at the top of your website',
            'Edit the subtitle (the smaller text below the title)',
            'Click the "Save Changes" button when done',
            'Visit your website to see the changes'
        ],
        tips: [
            'Keep titles short and impactful',
            'The subtitle should explain what your company does'
        ]
    },
    {
        id: 'services',
        title: 'Managing Services',
        icon: Briefcase,
        color: 'green',
        steps: [
            'Click on "Services" in the sidebar menu',
            'You will see your 3 main services: Security, Solar, Construction',
            'Click on any service to edit its title and description',
            'Click "Save Changes" when you\'re done editing'
        ],
        tips: [
            'Describe each service clearly',
            'Explain what customers will get'
        ]
    },
    {
        id: 'projects',
        title: 'Adding Project Photos',
        icon: ImageIcon,
        color: 'purple',
        steps: [
            'Click on "Projects" in the sidebar menu',
            'Click "Add New Project" button',
            'Enter a title for the project (e.g., "Ministry of Budget Security System")',
            'Select the category (Security, Solar Energy, or Construction)',
            'Click "Upload Image" and select a photo from your iPad',
            'Click "Save" to add the project'
        ],
        tips: [
            'Use clear, well-lit photos',
            'Horizontal (landscape) photos work best',
            'Add a descriptive title for each project'
        ]
    },
    {
        id: 'about',
        title: 'Updating Company Info',
        icon: FileText,
        color: 'orange',
        steps: [
            'Click on "About / Story" in the sidebar menu',
            'Edit the company description',
            'Update CEO name if needed',
            'Edit the CEO quote',
            'Update contact information (phone, email, address)',
            'Click "Save Changes" when done'
        ],
        tips: [
            'Keep the description professional',
            'Make sure contact info is correct'
        ]
    }
];

const faqItems = [
    {
        question: 'How do I upload an image?',
        answer: 'Click the "Upload Image" or camera icon button. Your iPad will open the photo library. Select the photo you want to use and it will be uploaded automatically.'
    },
    {
        question: 'How do I delete a project?',
        answer: 'Go to the Projects section, find the project you want to remove, and click the red trash icon. Confirm the deletion when asked.'
    },
    {
        question: 'Why don\'t I see my changes on the website?',
        answer: 'Currently, changes are saved locally on your device. To make changes visible to everyone on the internet, a database needs to be connected. Contact your developer for this setup.'
    },
    {
        question: 'What image sizes work best?',
        answer: 'Landscape (horizontal) images work best. Aim for images that are at least 800 pixels wide. Your iPad camera photos will work perfectly.'
    },
    {
        question: 'Can I undo my changes?',
        answer: 'There is no undo button, so make changes carefully. If you make a mistake, you can always edit the section again and correct it.'
    },
    {
        question: 'How do I sign out?',
        answer: 'Click "Sign Out" at the bottom of the sidebar menu. You will be taken back to the login page.'
    }
];

export default function Guide() {
    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD100] to-[#FFC000] flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Help Guide</h1>
                        <p className="text-gray-500">Learn how to manage your website</p>
                    </div>
                </div>
            </div>

            {/* Quick Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
                <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Quick Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-gray-900">Easy to Use</p>
                            <p className="text-sm text-gray-600">Just click, edit, and save</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Smartphone className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-gray-900">Works on iPad</p>
                            <p className="text-sm text-gray-600">Designed for touch screens</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Upload className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-gray-900">Easy Image Upload</p>
                            <p className="text-sm text-gray-600">Upload directly from your photos</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Save className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-gray-900">Auto-Save Reminder</p>
                            <p className="text-sm text-gray-600">Always click Save when done</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step by Step Sections */}
            <div className="space-y-6 mb-10">
                <h2 className="text-xl font-bold text-gray-900">Step-by-Step Instructions</h2>

                {sections.map((section) => {
                    const colorClasses = {
                        blue: 'from-blue-500 to-blue-600 bg-blue-50 border-blue-200 text-blue-700',
                        green: 'from-green-500 to-green-600 bg-green-50 border-green-200 text-green-700',
                        purple: 'from-purple-500 to-purple-600 bg-purple-50 border-purple-200 text-purple-700',
                        orange: 'from-orange-500 to-orange-600 bg-orange-50 border-orange-200 text-orange-700'
                    };
                    const colors = colorClasses[section.color as keyof typeof colorClasses];

                    return (
                        <div
                            key={section.id}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} flex items-center justify-center`}>
                                        <section.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                                </div>

                                {/* Steps */}
                                <div className="space-y-3 mb-4">
                                    {section.steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-gray-600">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 pt-0.5">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tips */}
                                <div className={`rounded-xl p-4 ${colors.split(' ')[2]} border ${colors.split(' ')[3]}`}>
                                    <p className={`text-sm font-medium ${colors.split(' ')[4]} mb-2`}>
                                        💡 Tips:
                                    </p>
                                    <ul className="space-y-1">
                                        {section.tips.map((tip, index) => (
                                            <li key={index} className={`text-sm ${colors.split(' ')[4]}`}>
                                                • {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Common Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Common Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                        <Save className="w-8 h-8 text-green-600" />
                        <div>
                            <p className="font-medium text-green-900">Save Changes</p>
                            <p className="text-sm text-green-700">Always click this when done</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                        <Plus className="w-8 h-8 text-blue-600" />
                        <div>
                            <p className="font-medium text-blue-900">Add New</p>
                            <p className="text-sm text-blue-700">Add a new project or item</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                        <Trash2 className="w-8 h-8 text-red-600" />
                        <div>
                            <p className="font-medium text-red-900">Delete</p>
                            <p className="text-sm text-red-700">Remove an item permanently</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-100 p-5"
                        >
                            <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                                <AlertCircle className="w-5 h-5 text-[#FFD100] flex-shrink-0 mt-0.5" />
                                {item.question}
                            </h3>
                            <p className="text-gray-600 pl-7">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Need More Help */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-2">Need More Help?</h2>
                <p className="text-white/70 mb-4">
                    If you have questions or run into problems, contact your website developer for assistance.
                </p>
                <Link
                    to="/admin"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD100] text-gray-900 rounded-xl font-medium hover:bg-[#FFC000] transition-colors"
                >
                    Back to Dashboard
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
