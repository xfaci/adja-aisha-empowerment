import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import History from './pages/History';
import Realizations from './pages/Realizations';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <div className="min-h-screen bg-[--color-dark] text-white font-sans selection:bg-[--color-brand-gold] selection:text-[--color-dark]">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/histoire" element={<History />} />
                            <Route path="/realisations" element={<Realizations />} />
                        </Routes>
                    </main>
                    <Footer />
                    <WhatsAppButton />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
