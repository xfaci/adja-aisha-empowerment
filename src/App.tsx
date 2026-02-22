import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import History from './pages/History';
import Realizations from './pages/Realizations';
import NotFound from './pages/NotFound';
import CustomCursor from './components/CustomCursor';

// Admin Imports
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import HomeContent from './pages/admin/HomeContent';
import ServicesContent from './pages/admin/ServicesContent';
import RealizationsContent from './pages/admin/RealizationsContent';
import AboutContent from './pages/admin/AboutContent';
import Guide from './pages/admin/Guide';

// Scroll to top on route change
function ScrollToTopOnNavigate() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// Layout for Public Pages
function PublicLayout() {
    return (
        <div className="min-h-screen bg-[--color-dark] text-white font-sans selection:bg-[--color-brand-gold] selection:text-[--color-dark]">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
}

function App() {
    return (
        <LanguageProvider>
            <Router>
                <CustomCursor />
                <ScrollToTopOnNavigate />
                <Routes>
                    {/* Public Routes */}
                    <Route element={<PublicLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/histoire" element={<History />} />
                        <Route path="/realisations" element={<Realizations />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    {/* Admin Login Route */}
                    <Route path="/admin/login" element={<Login />} />

                    {/* Protected Admin Routes */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/admin" element={<AdminLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="home" element={<HomeContent />} />
                            <Route path="services" element={<ServicesContent />} />
                            <Route path="realizations" element={<RealizationsContent />} />
                            <Route path="about" element={<AboutContent />} />
                            <Route path="guide" element={<Guide />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;
