import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderContent = () => {

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

            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 custom-form-control"
                    aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
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