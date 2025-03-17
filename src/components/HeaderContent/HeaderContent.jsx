import { useState, useEffect } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { FaQuestion } from "react-icons/fa";
import { TbVocabulary } from "react-icons/tb";

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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991.98);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const results = props.onSearch(searchQuery);
        setSearchResults(results);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991.98);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary custom-navbar-padding" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="home" className='text-danger custom-navbar-brand-padding'>Japanese E-Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav custom-navbar">
                    {isMobile && (
                        <div id="custom-flex-nav">
                            <Nav className="me-auto custom-nav">
                                <Nav.Link className="custom-nav-transition custom-nav-style" href="home">Accueil</Nav.Link>
                                <Nav.Link className="custom-nav-transition custom-nav-style" href="ressources">Ressources</Nav.Link>

                                <NavDropdown className="custom-nav-transition custom-nav-style" title="Apprentissage" id="basic-nav-dropdown">
                                    <NavDropdown.Item className="custom-navdropdown-style" href="hiragana"><span className='custom-span-padding'>Hiragana</span>あ</NavDropdown.Item>
                                    <NavDropdown.Item className="custom-navdropdown-style" href="katakana"><span className='custom-span-padding'>Katakana</span>ア</NavDropdown.Item>
                                    <NavDropdown.Item className="custom-navdropdown-style" href="vocabulaire"><span className='custom-span-padding'>Vocabulaire</span><TbVocabulary /></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="custom-navdropdown-style" href="theorie"><span className='custom-span-padding'>Théorie</span><HiAcademicCap /></NavDropdown.Item>
                                    <NavDropdown.Item className="custom-navdropdown-style" href="quiz"><span className='custom-span-padding'>Quiz</span><FaQuestion /></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex position-relative custom-form" onSubmit={handleSearchSubmit}>
                                <Form.Control type="search" placeholder="Rechercher des mots" className="me-2 custom-form-bordercolor custom-form" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                                <Button variant="outline-light" type="submit" className='custom-search-header-button'>Rechercher</Button>
                                
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
                        </div>
                    )}
                    {!isMobile && (
                        <>
                            <Nav className="me-auto custom-nav">
                                <Nav.Link className="custom-nav-transition custom-nav-style" href="home">Accueil</Nav.Link>
                                <Nav.Link className="custom-nav-transition custom-nav-style" href="ressources">Ressources</Nav.Link>

                                <NavDropdown className="custom-nav-transition custom-nav-style" title="Apprentissage" id="basic-nav-dropdown">
                                    <NavDropdown.Item className="custom-navdropdown-style" href="hiragana"><span className='custom-span-padding'>Hiragana</span>あ</NavDropdown.Item>
                                    <NavDropdown.Item className="custom-navdropdown-style" href="katakana"><span className='custom-span-padding'>Katakana</span>ア</NavDropdown.Item>
                                    <NavDropdown.Item className="custom-navdropdown-style" href="vocabulaire"><span className='custom-span-padding'>Vocabulaire</span><TbVocabulary /></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="custom-navdropdown-style" href="theorie"><span className='custom-span-padding'>Théorie</span><HiAcademicCap /></NavDropdown.Item>
                                    <NavDropdown.Item className="custom-navdropdown-style" href="quiz"><span className='custom-span-padding'>Quiz</span><FaQuestion /></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex position-relative custom-form" onSubmit={handleSearchSubmit}>
                                <Form.Control type="search" placeholder="Rechercher des mots" className="me-2 custom-form-bordercolor custom-form" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                                <Button variant="outline-light" type="submit" className='custom-search-header-button'>Rechercher</Button>
                                
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
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderContent;