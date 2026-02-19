import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Scroll to top on route change
function ScrollToTopOnNavigate() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTopOnNavigate />
                <div className="min-h-screen bg-[--color-dark] text-white font-sans selection:bg-[--color-brand-gold] selection:text-[--color-dark]">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/histoire" element={<History />} />
                            <Route path="/realisations" element={<Realizations />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                    <WhatsAppButton />
                    <ScrollToTop />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
