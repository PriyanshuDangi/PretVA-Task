import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import logo from '../../assets/image/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} width="150px" className="d-inline-block align-top" alt="" loading="lazy" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={classes.navLinks}>
                <Nav className="mr-auto" style={{margin: 'auto'}}>
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Services</Nav.Link>
                    <Nav.Link href="/" className={classes.active}>
                        Search
                    </Nav.Link>
                    <Nav.Link href="/">Feedback {'&'} Support</Nav.Link>
                </Nav>
                <Nav className={classes.buttons}>
                    <div>
                        <Button variant="outline-secondary" className>
                            My Account
                        </Button>
                    </div>
                    <div>
                        <Button variant="dark">Logout</Button>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
