import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Home,
    Briefcase,
    Image as ImageIcon,
    FileText,
    HelpCircle,
    LogOut,
    Menu,
    X,
    ExternalLink
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, end: true },
    { name: 'Homepage', path: '/admin/home', icon: Home },
    { name: 'Services', path: '/admin/services', icon: Briefcase },
    { name: 'Projects', path: '/admin/realizations', icon: ImageIcon },
    { name: 'About / Story', path: '/admin/about', icon: FileText },
    { name: 'Help Guide', path: '/admin/guide', icon: HelpCircle },
];

export default function AdminLayout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-200">
                {/* Logo */}
                <div className="flex items-center gap-3 h-20 px-6 border-b border-gray-100">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                    <div>
                        <span className="font-bold text-gray-900 block leading-tight">AISHA</span>
                        <span className="text-xs text-[#FFD100] font-semibold">Admin Panel</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Content Management
                    </p>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            end={item.end}
                            className={({ isActive }) =>
                                `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${isActive
                                    ? 'bg-[#FFD100]/10 text-[#B8960B] border border-[#FFD100]/30'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="p-4 border-t border-gray-100 space-y-2">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                        <ExternalLink className="w-5 h-5 mr-3" />
                        View Website
                    </a>
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Mobile Sidebar (Overlay) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
                    <aside className="fixed top-0 left-0 w-72 h-full bg-white shadow-2xl flex flex-col z-50">
                        {/* Header */}
                        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                                <span className="font-bold text-[#FFD100]">Admin</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-gray-500 rounded-xl hover:bg-gray-100"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Nav */}
                        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    end={item.end}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all ${isActive
                                            ? 'bg-[#FFD100]/10 text-[#B8960B] border border-[#FFD100]/30'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`
                                    }
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Bottom */}
                        <div className="p-4 border-t border-gray-100 space-y-2">
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-gray-50"
                            >
                                <ExternalLink className="w-5 h-5 mr-3" />
                                View Website
                            </a>
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50"
                            >
                                <LogOut className="w-5 h-5 mr-3" />
                                Sign Out
                            </button>
                        </div>
                    </aside>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-gray-500 rounded-xl hover:bg-gray-100"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                        <span className="font-bold text-gray-900">Admin</span>
                    </div>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 rounded-xl hover:bg-gray-100"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
