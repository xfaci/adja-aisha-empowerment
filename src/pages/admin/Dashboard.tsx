import {
    LayoutDashboard,
    Home,
    Briefcase,
    Image as ImageIcon,
    FileText,
    HelpCircle,
    ExternalLink,
    Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
    {
        name: 'Homepage',
        path: '/admin/home',
        icon: Home,
        description: 'Edit the main title, subtitle and hero section.',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        name: 'Services',
        path: '/admin/services',
        icon: Briefcase,
        description: 'Manage your service offerings and descriptions.',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50'
    },
    {
        name: 'Projects',
        path: '/admin/realizations',
        icon: ImageIcon,
        description: 'Add or edit photos of your completed projects.',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        name: 'About / Story',
        path: '/admin/about',
        icon: FileText,
        description: 'Update company information and CEO details.',
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50'
    },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Welcome Header */}
            <div className="mb-8 bg-gradient-to-r from-[#0D1117] to-[#1a1f2e] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD100]/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#009E49]/10 rounded-full blur-[60px]" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-5 h-5 text-[#FFD100]" />
                            <span className="text-[#FFD100] text-sm font-medium">Admin Dashboard</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back!</h1>
                        <p className="text-white/70 max-w-xl">
                            Manage your website content easily. Click on any section below to make changes.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            to="/admin/guide"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors border border-white/10"
                        >
                            <HelpCircle className="w-4 h-4" />
                            Help Guide
                        </Link>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFD100] hover:bg-[#FFC000] text-gray-900 rounded-xl text-sm font-medium transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View Site
                        </a>
                    </div>
                </div>
            </div>

            {/* Quick Links Grid */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {quickLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-5">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <link.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#FFD100] transition-colors">
                                    {link.name}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {link.description}
                                </p>
                            </div>
                            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 group-hover:bg-[#FFD100]/10 transition-colors">
                                <span className="text-sm font-medium text-gray-600 group-hover:text-[#FFD100]">
                                    Edit section →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Help Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tips Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <HelpCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">Quick Tips</h3>
                            <ul className="text-sm text-blue-800 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>Click "Save Changes" after making any edits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>Upload images directly - no need for links</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">•</span>
                                    <span>Check the Help Guide if you need assistance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Storage Info */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-100">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                            <LayoutDashboard className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-amber-900 mb-2">About Your Changes</h3>
                            <p className="text-sm text-amber-800">
                                Your changes are saved locally in your browser. For changes to appear on the live website for everyone, a database connection is needed. Contact your developer for setup.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
