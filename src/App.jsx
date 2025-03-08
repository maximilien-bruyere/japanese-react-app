import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Accueil from './pages/Accueil/Accueil.jsx';
import Hiragana from './pages/Hiragana/Hiragana.jsx';
import Katakana from './pages/Katakana/Katakana.jsx';
import Vocabulaire from './pages/Vocabulaire/Vocabulaire.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {

    return (
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
    );
};

export default App
