import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Links from './Links.js'


const Navigation = () => {
    return (
        <header>
            <Navbar className="navbar" bg="light" variant='light' expand="lg" collapseOnSelect>
                <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="mr-auto">
                           <Links />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation