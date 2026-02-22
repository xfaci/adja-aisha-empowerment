import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Shield, Sun, Building2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function Login() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));

        const success = login(password);
        if (success) {
            navigate('/admin');
        } else {
            setError('Incorrect password. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex font-sans">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0D1117] via-[#1a1f2e] to-[#0D1117] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD100]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#009E49]/20 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E31B23]/10 rounded-full blur-[80px]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
                    {/* Logo */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <img src="/logo.png" alt="Logo" className="w-16 h-16" />
                            <div>
                                <h1 className="text-3xl font-black text-white">AISHA</h1>
                                <p className="text-[#FFD100] font-semibold tracking-wider">EMPOWERMENT</p>
                            </div>
                        </div>
                        <div className="flex gap-1 mb-8">
                            <div className="w-12 h-1.5 bg-[#E31B23] rounded-full" />
                            <div className="w-12 h-1.5 bg-[#FFD100] rounded-full" />
                            <div className="w-12 h-1.5 bg-[#009E49] rounded-full" />
                        </div>
                    </div>

                    {/* Welcome Message */}
                    <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                        Welcome to the<br />
                        <span className="text-[#FFD100]">Admin Portal</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-12 max-w-md">
                        Manage your website content, update projects, and keep your business information up to date.
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-white/80">
                            <div className="w-10 h-10 rounded-xl bg-[#FFD100]/20 flex items-center justify-center">
                                <Sun className="w-5 h-5 text-[#FFD100]" />
                            </div>
                            <span>Manage Solar Energy Projects</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/80">
                            <div className="w-10 h-10 rounded-xl bg-[#E31B23]/20 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-[#E31B23]" />
                            </div>
                            <span>Update Security Installations</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/80">
                            <div className="w-10 h-10 rounded-xl bg-[#009E49]/20 flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-[#009E49]" />
                            </div>
                            <span>Showcase Construction Work</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 bg-white">
                {/* Mobile Logo */}
                <div className="lg:hidden mb-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
                        <div className="text-left">
                            <h1 className="text-xl font-black text-gray-900">AISHA</h1>
                            <p className="text-[#FFD100] text-sm font-semibold">EMPOWERMENT</p>
                        </div>
                    </div>
                    <div className="flex gap-1 justify-center">
                        <div className="w-8 h-1 bg-[#E31B23] rounded-full" />
                        <div className="w-8 h-1 bg-[#FFD100] rounded-full" />
                        <div className="w-8 h-1 bg-[#009E49] rounded-full" />
                    </div>
                </div>

                <div className="max-w-md mx-auto w-full">
                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                            Sign in to Admin
                        </h2>
                        <p className="text-gray-500">
                            Enter your password to access the dashboard
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-12 pr-12 py-4 text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD100] focus:border-[#FFD100] transition-all bg-gray-50 focus:bg-white"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-[#FFD100] to-[#FFC000] text-gray-900 font-semibold rounded-xl hover:from-[#FFC000] hover:to-[#FFB000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD100] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#FFD100]/20"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <Lock className="w-5 h-5" />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    {/* Help Text */}
                    <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <p className="text-sm text-blue-800">
                            <strong>Need help?</strong> Contact the website administrator if you've forgotten your password.
                        </p>
                    </div>

                    {/* Back to Site */}
                    <div className="mt-6 text-center">
                        <a
                            href="/"
                            className="text-sm text-gray-500 hover:text-[#FFD100] transition-colors"
                        >
                            ← Back to main website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
