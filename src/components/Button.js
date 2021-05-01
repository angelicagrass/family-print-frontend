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

const Button = ({ onClick, primary, children }) => {
  return <StyledButton onClick={onClick} primary={primary}>{ children }</StyledButton>
}

export default Button
