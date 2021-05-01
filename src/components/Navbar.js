import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Links from './Links.js'
import styled from 'styled-components'

const GradientDiv = styled.div`
width: auto;
height: 1vh;
background: rgb(168,219,168);
background: linear-gradient(37deg, rgba(168,219,168,1) 17%, rgba(131,175,155,1) 49%, rgba(100,159,131,1) 95%);
`

const MyHeader = styled.header`
position: sticky;
top: 0;
z-index: 1000000;
`

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