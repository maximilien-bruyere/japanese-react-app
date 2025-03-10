import { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const VocabulaireForm = (props) => {
    const [word, setWord] = useState({ japanese: '', onYomi: '', kunYomi: '', translation: '' });

    useEffect(() => {
        if (props.selectedWord) {
            setWord(props.selectedWord);
        } else {
            setWord({ japanese: '', onYomi: '', kunYomi: '', translation: '' });
        }
    }, [props.selectedWord, props.key]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWord({ ...word, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.selectedWord) {
            props.onUpdateWord(word);
        } else {
            props.onAddWord(word);
        }
        setWord({ japanese: '', onYomi: '', kunYomi: '', translation: '' });
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-3">
            <Row>
                <Col>
                    <Form.Group controlId="formJapanese">
                        <Form.Label>Mot japonais</Form.Label>
                        <Form.Control type="text" name="japanese" value={word.japanese} onChange={handleChange} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formOnYomi">
                        <Form.Label>Onyomi</Form.Label>
                        <Form.Control type="text" name="onYomi" value={word.onYomi} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formKunYomi">
                        <Form.Label>Kunyomi</Form.Label>
                        <Form.Control type="text" name="kunYomi" value={word.kunYomi} onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formTranslation">
                        <Form.Label>Traduction</Form.Label>
                        <Form.Control type="text" name="translation" value={word.translation} onChange={handleChange} required />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="secondary" type="submit" className="mt-3">
                {props.selectedWord ? 'Modifier' : 'Ajouter'}
            </Button>
        </Form>
    );
};

export default VocabulaireForm;