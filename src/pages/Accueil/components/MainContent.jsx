import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Accueil = () => {
    return (
        <Container fluid className="mt-5">
            <Row className="text-center">
                <Col>
                    <h1>Bienvenue sur Japanese E-Learning</h1>
                    <p className="lead">Apprenez le japonais facilement et efficacement avec la théorie, nos listes ainsi que nos quiz.</p>
                    <Button variant="danger" href="quiz">Commencez le Quiz</Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={4} className="text-center">
                    <h2>Hiragana</h2>
                    <p>Apprenez les bases de l&apos;écriture japonaise avec les hiragana.</p>
                    <Button variant="secondary" href="hiragana">Apprendre Hiragana</Button>
                </Col>
                <Col md={4} className="text-center">
                    <h2>Katakana</h2>
                    <p>Découvrez les katakana pour écrire les mots d&apos;origine étrangère.</p>
                    <Button variant="secondary" href="katakana">Apprendre Katakana</Button>
                </Col>
                <Col md={4} className="text-center">
                    <h2>Vocabulaire</h2>
                    <p>Enrichissez votre vocabulaire japonais avec nos listes de mots.</p>
                    <Button variant="secondary" href="vocabulaire">Apprendre Vocabulaire</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Accueil;