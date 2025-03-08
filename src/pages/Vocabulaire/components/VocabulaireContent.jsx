import { useState, useEffect } from 'react';
import VocabulaireButtons from './Form/VocabulaireButtons.jsx';
import VocabulaireForm from './Form/VocabulaireForm.jsx';
import VocabulaireTable from './Form/VocabulaireTable.jsx';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const VocabulaireContent = () => {
    const [vocabulaire, setVocabulaire] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedWord, setSelectedWord] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVocabulaire = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/vocabulaire');
                if (!response.ok) {
                    throw new Error("Une erreur réseau est survenue lors de la récupération du vocabulaire.");
                }
                const data = await response.json();
                setVocabulaire(data);
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
            const response = await fetch(`http://localhost:5000/api/vocabulaire/${selectedCategory}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(word)
            });
            if (!response.ok) {
                throw new Error("Une erreur réseau est survenue lors de l'ajout du mot.");
            }
            const newWord = await response.json();
            setVocabulaire({
                ...vocabulaire,
                [selectedCategory]: [...vocabulaire[selectedCategory], newWord]
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEditWord = (word) => {
        setSelectedWord(word);
    };

    const handleUpdateWord = async (updatedWord) => {
        try {
            const response = await fetch(`http://localhost:5000/api/vocabulaire/${selectedCategory}/${updatedWord.japanese}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWord)
            });
            if (!response.ok) {
                throw new Error("Une erreur réseau est survenue lors de la mise à jour du mot.");
            }
            const newWord = await response.json();
            setVocabulaire({
                ...vocabulaire,
                [selectedCategory]: vocabulaire[selectedCategory].map(word =>
                    word.japanese === newWord.japanese ? newWord : word
                )
            });
            setSelectedWord(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteWord = async (wordToDelete) => {
        try {
            const response = await fetch(`http://localhost:5000/api/vocabulaire/${selectedCategory}/${wordToDelete.japanese}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error("Une erreur réseau est survenue lors de la suppression du mot.");
            }
            setVocabulaire({
                ...vocabulaire,
                [selectedCategory]: vocabulaire[selectedCategory].filter(word => word.japanese !== wordToDelete.japanese)
            });
        } catch (error) {
            setError(error.message);
        }
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
                            />
                            {error && <Alert variant="danger">{error}</Alert>}
                            <VocabulaireTable
                                words={vocabulaire[selectedCategory]}
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