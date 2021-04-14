import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
padding:0.6em 1.3em;
width: 100%;
font-size: 1rem;
background-color: ${props => props.theme.colors.main};
outline: none;
border: none;
color: white;
border-radius: 1px;
transition: all 0.4s;

&:hover {
  background-color: ${props => props.theme.colors.lightmain};
}
`

const Button = ({ primary, children }) => {
  return <StyledButton primary={primary}>{ children }</StyledButton>
}

export default Button
