import React from 'react'
import { Link } from 'react-router-dom'
import { GradientDiv, StyledHeader, StyledImg, StyledBag} from './StyledHeader.js'

const Header = () => {
    return (
        <StyledHeader>
            <StyledBag>
                <Link to='/kassa'> <i class="fas fa-shopping-bag fa-3x"></i> </Link>
            </StyledBag>
            <StyledImg />
            <GradientDiv></GradientDiv>
        </StyledHeader>
    )
}

export default Header


