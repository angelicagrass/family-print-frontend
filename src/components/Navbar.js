import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Links from './Links.js'
import styled from 'styled-components'


// const StyleNav = styled.header`
// min-height: 30vh;

// `

const Navigation = () => {
    return (
        <header>
            <Navbar className="navbar" bg="light" variant='light' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="ml-auto">
                           <Links />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation