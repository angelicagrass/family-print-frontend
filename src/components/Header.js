import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GradientDiv = styled.div`
width: auto;
height: 1vh;
background: rgb(168,219,168);
background: linear-gradient(37deg, rgba(168,219,168,1) 17%, rgba(131,175,155,1) 49%, rgba(100,159,131,1) 95%);

`

const StyledHeader = styled.div`
/* background: rgb(168,219,168);
background: linear-gradient(37deg, rgba(168,219,168,1) 17%, rgba(131,175,155,1) 49%, rgba(100,159,131,1) 95%); */
/* opacity: 1; */

background-color: white;
width: 100%auto;
border-bottom: 2px solid ${props => props.theme.colors.main};
`

const StyledImg = styled.div`
background-image: url('/img/svart2.png');
height: 210px;
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
            <GradientDiv></GradientDiv>
        </StyledHeader>
        
    )
}

export default Header


