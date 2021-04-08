import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.div`

background-color: white;
width: 100%auto;
border-bottom: 5px solid ${props => props.theme.colors.main};
`

const StyledImg = styled.div`
background-image: url('/img/testlogga3.jpg');
height: 250px;
background-repeat: no-repeat;
background-position: center;

`

const StyledBag = styled.div`
float:right;
margin: 3vh;
color: ${props => props.theme.colors.main};



`

const Header = () => {
    return (
        <StyledHeader>
            <StyledBag>
                <i class="fas fa-shopping-bag fa-3x"></i>
            </StyledBag>
            <Link to='/'>
                <StyledImg />
            </Link>
        </StyledHeader>
    )
}

export default Header


