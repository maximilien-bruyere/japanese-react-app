import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Accueil from './pages/Accueil/Accueil.jsx';
import Hiragana from './pages/Hiragana/Hiragana.jsx';
import Katakana from './pages/Katakana/Katakana.jsx';
import Vocabulaire from './pages/Vocabulaire/Vocabulaire.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import HeaderContent from './components/HeaderContent/HeaderContent.jsx';
import FooterContent from './components/FooterContent/FooterContent.jsx';

import vocabulaireData from './../backend/datas/JapaneseWords.json'; // Importer les données JSON

function App() {
    const [vocabulaire, setVocabulaire] = useState([]);

    useEffect(() => {
        setVocabulaire(vocabulaireData); // Charger les données JSON dans l'état
    }, []);

    const handleSearch = (query) => {
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            const filteredResults = [];
            for (const category in vocabulaire) {
                const filteredCategory = vocabulaire[category].filter(word =>
                    word.japanese.toLowerCase().includes(lowerCaseQuery) || word.translation.toLowerCase().includes(lowerCaseQuery)
                );
                filteredResults.push(...filteredCategory);
            }
            return filteredResults;
        } else {
            return [];
        }
    };

    return (
        <div className="body d-flex flex-column min-vh-100">
            <HeaderContent onSearch={handleSearch} />
            <div className="flex-grow-1">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/home" element={<Accueil />} />
                        <Route path="/hiragana" element={<Hiragana />} />
                        <Route path="/katakana" element={<Katakana />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/vocabulaire" element={<Vocabulaire />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <FooterContent />
        </div>
    );
}

export default App;