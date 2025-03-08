import { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const VocabulaireForm = ({ onAddWord, selectedWord, onUpdateWord }) => {
    const [word, setWord] = useState({ japanese: '', onYomi: '', kunYomi: '', translation: '' });

    useEffect(() => {
        if (selectedWord) {
            setWord(selectedWord);
        }
    }, [selectedWord]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWord({ ...word, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedWord) {
            onUpdateWord(word);
        } else {
            onAddWord(word);
        }
        setWord({ japanese: '', onYomi: '', kunYomi: '', translation: '' });
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-3">
            <Row>
                <Col>
                    <Form.Group controlId="formJapanese">
                        <Form.Label>Japanese</Form.Label>
                        <Form.Control type="text" name="japanese" value={word.japanese} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formOnYomi">
                        <Form.Label>On-yomi</Form.Label>
                        <Form.Control type="text" name="onYomi" value={word.onYomi} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formKunYomi">
                        <Form.Label>Kun-yomi</Form.Label>
                        <Form.Control type="text" name="kunYomi" value={word.kunYomi} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formTranslation">
                        <Form.Label>Translation</Form.Label>
                        <Form.Control type="text" name="translation" value={word.translation} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="secondary" type="submit" className="mt-3">
                {selectedWord ? 'Modifier' : 'Ajouter'}
            </Button>
        </Form>
    );
};

export default VocabulaireForm;