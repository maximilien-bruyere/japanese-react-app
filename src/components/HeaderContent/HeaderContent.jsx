import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderContent = (props) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const results = props.onSearch(searchQuery);
        setSearchResults(results);
    };

    return (
        <Navbar 
            expand="lg" 
            className="bg-body-tertiary" 
            data-bs-theme="dark"
            style={{padding: '8px 45px 8px 0'}}
        >
            <Container fluid>
                <Navbar.Brand 
                    href="home"
                    className='text-danger'
                    style={{padding: '0 0 0 20px'}}
                >Japanese E-Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{transition: 'color 0.5s ease'}} href="home">Accueil</Nav.Link>
                        <Nav.Link style={{transition: 'color 0.5s ease'}} href="ressources">Ressources</Nav.Link>

                        <NavDropdown style={{transition: 'color 0.5s ease'}} title="Apprentissage" id="basic-nav-dropdown">
                            <NavDropdown.Item style={{transition: 'background-color 0.5s ease'}} href="hiragana">Hiragana</NavDropdown.Item>
                            <NavDropdown.Item style={{transition: 'background-color 0.5s ease'}} href="katakana">Katakana</NavDropdown.Item>
                            <NavDropdown.Item style={{transition: 'background-color 0.5s ease'}} href="vocabulaire">Vocabulaire</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{transition: 'background-color 0.5s ease'}} href="theorie">Théorie</NavDropdown.Item>
                            <NavDropdown.Item style={{transition: 'background-color 0.5s ease'}} href="quiz">Quiz</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex position-relative" onSubmit={handleSearchSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Rechercher des mots"
                            className="me-2"
                            style={{borderColor: '#5f5f5f'}}
                            onFocus={(e) => {
                                e.target.style.transition = 'border-color 0.35s ease';
                                e.target.style.borderColor = '#b4b4b4';
                                e.target.style.boxShadow = 'none'
                            }}

                            onBlur={(e) => {
                                e.target.style.borderColor = '#5f5f5f'
                            }}

                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <Button variant="outline-light" type="submit">Rechercher</Button>
                        {searchResults.length > 0 && (
                            <Dropdown.Menu show className="position-absolute w-100 mt-2">
                                {searchResults.map((result, index) => (
                                    <Dropdown.Item key={index}>
                                        {result.japanese} - {result.translation}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        )}

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderContent;