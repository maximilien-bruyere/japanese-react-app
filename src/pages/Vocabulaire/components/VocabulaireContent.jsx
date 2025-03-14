import { useState, useEffect } from 'react';
import axios from 'axios';
import VocabulaireButtons from './Form/VocabulaireButtons.jsx';
import VocabulaireForm from './Form/VocabulaireForm.jsx';
import VocabulaireTable from './Form/VocabulaireTable.jsx';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const VocabulaireContent = () => {
    const [vocabulaire, setVocabulaire] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('Noms communs');
    const [selectedWord, setSelectedWord] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVocabulaire = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/vocabulaire');
                setVocabulaire(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchVocabulaire();
    }, []);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setSelectedWord(null);
    };

    const handleAddWord = async (word) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/vocabulaire/${selectedCategory}`, word);
            setVocabulaire({
                ...vocabulaire,
                [selectedCategory]: [...vocabulaire[selectedCategory], response.data]
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEditWord = (word) => {
        setSelectedWord(word);
        scrollToTop();
    };

    const handleUpdateWord = async (updatedWord) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/vocabulaire/${selectedCategory}/${updatedWord.id}`, updatedWord);
            setVocabulaire({
                ...vocabulaire,
                [selectedCategory]: vocabulaire[selectedCategory].map(word =>
                    word.id === response.data.id ? response.data : word
                )
            });
            setSelectedWord(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteWord = async (wordToDelete) => {
        try {
            await axios.delete(`http://localhost:5000/api/vocabulaire/${selectedCategory}/${wordToDelete.id}`);
            setVocabulaire({
                ...vocabulaire,
                [selectedCategory]: vocabulaire[selectedCategory].filter(word => word.id !== wordToDelete.id)
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <VocabulaireButtons
                        categories={Object.keys(vocabulaire)}
                        onSelectCategory={handleSelectCategory}
                    />
                    {selectedCategory && (
                        <>
                            <VocabulaireForm
                                onAddWord={handleAddWord}
                                selectedWord={selectedWord}
                                onUpdateWord={handleUpdateWord}
                                key={selectedCategory}
                            />
                            {error && <Alert variant="danger">{error}</Alert>}
                            <VocabulaireTable
                                words={vocabulaire[selectedCategory] || []}
                                onEditWord={handleEditWord}
                                onDeleteWord={handleDeleteWord}
                            />
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default VocabulaireContent;