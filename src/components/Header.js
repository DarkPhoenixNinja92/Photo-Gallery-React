import { Button, Container, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Row, Col } from "reactstrap"

const Header = () => {
    return(
            <Navbar dark color = 'primary' sticky = 'top' expand = 'md'>
                <NavbarBrand className='ms-5' href = '/'>
                    <img className='float-start' src = '' alt = 'nucamp logo'/>
                    <h1 className='mb-1'>A Bird Watcher's Paradise</h1>
                    <h2>Bird Photos as Far as the Eye can See</h2>
                </NavbarBrand>
                <Button outline><i className='fa fa-sign-in fa-lg'/>Login</Button>
            </Navbar>
        );
}

export default Header;