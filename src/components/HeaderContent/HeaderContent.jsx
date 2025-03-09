import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderContent = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const results = onSearch(searchQuery);
        setSearchResults(results);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="home" className='text-danger'>Japanese E-Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Accueil</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        <NavDropdown title="Apprentissage" id="basic-nav-dropdown">
                            <NavDropdown.Item href="hiragana">Hiragana</NavDropdown.Item>
                            <NavDropdown.Item href="katakana">Katakana</NavDropdown.Item>
                            <NavDropdown.Item href="vocabulaire">Vocabulaire</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="quiz">Quiz</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Form className="d-flex position-relative" onSubmit={handleSearchSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 custom-form-control"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <Button variant="outline-light" type="submit">Search</Button>
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

                <Nav className="justify-content-end navigation-header" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/theorie">Théorie</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/ressources'>Ressources</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default HeaderContent;