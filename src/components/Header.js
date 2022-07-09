import { Button, Container, Navbar, Collapse, NavbarToggler, Nav, NavItem, Row, Col, NavbarText } from "reactstrap"
import '../App.css';
import SearchBar from "./SearchBar";

const Header = () => {
    return(
                <header className="jumbotron jumbotron-fluid">
                    <Container className="align-self-center">
                        <Row>
                            <Col>
                                <h1>A Bird Watcher's Paradise</h1>
                                <h2>Bird Photos as Far as the Eye can See</h2>
                                <SearchBar/>
                            </Col>
                        </Row>
                    </Container>
                </header>
        );
}

export default Header;