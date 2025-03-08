import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Alert, Table, Container, Row, Col } from "react-bootstrap";
const VocabulaireList = () => {

    const [vocabulaire, setVocabulaire] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVocabulaire = async () => {
            try {
                const response = await fetch('../../../../../datas/JapaneseWords.json');
                if (!response.ok) {
                    throw new Error("Une erreur réseau est survenue lors de la récupération du vocabulaire.");
                }

                const data = await response.json();
                setVocabulaire(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchVocabulaire();
    }, []);

    if (loading) {
        return (
            <Spinner animation="grow" variant="error" />
        );
    }

    if (error) {
        return (
            <Alert variant="danger">
                <Alert.Heading>Une erreur s&apos;est produite !</Alert.Heading>
                <p>{error.message}</p>
            </Alert>
        );
    }

    const renderTable = (category, words) => (
        <Container className="mt-2" key={category}>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h3 className="text-center">{category}</h3>
                    <Table striped bordered hover variant="dark" className="mt-3">
                        <thead>
                            <tr>
                                <th>Japanese</th>
                                <th>On-yomi</th>
                                <th>Kun-yomi</th>
                                <th>Translation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((word, index) => (
                                <tr key={index}>
                                    <td>{word.japanese}</td>
                                    <td>{word["on-yomi"]}</td>
                                    <td>{word["kun-yomi"]}</td>
                                    <td>{word.translation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );

    return (
        <div>
            {Object.keys(vocabulaire).map(category => 
                renderTable(category, vocabulaire[category])
            )}
        </div>
    );
};

export default VocabulaireList;