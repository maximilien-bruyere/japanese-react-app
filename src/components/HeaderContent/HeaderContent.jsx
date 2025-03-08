import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
                <Nav.Link href="quiz">Quiz</Nav.Link>
                <NavDropdown title="Liste" id="basic-nav-dropdown">
                <NavDropdown.Item href="hiragana">Hiragana</NavDropdown.Item>
                <NavDropdown.Item href="katakana">Katakana</NavDropdown.Item>
                <NavDropdown.Item href="vocabulaire">Vocabulaire</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>

            <Nav className="justify-content-end" activeKey="/home">
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