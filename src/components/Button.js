import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
padding:0.3em 1.2em;
font-size: 1rem;
background-color: ${props => props.theme.colors.main};
outline: none;
border: none;
color: white;
border-radius: 2em;
transition: all 0.2s;

&:hover {
  background-color: ${props => props.theme.colors.lightmain};
}
`

const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{ children }</StyledButton>
}

export default Button
