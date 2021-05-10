import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Links from '../Links/Links.js'
import { GradientDiv, MyHeader } from './StyledNavbar.js'

const Navigation = () => {
    return (
        <MyHeader>
            <GradientDiv />
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
        </MyHeader>
    )
}

export default Navigation