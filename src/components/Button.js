import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding:0.6em 1.3em;
  width: ${props => props.block ? "100%" : "200px"};
  font-size: 1rem;
  background: ${props => props.theme.colors.main};
  outline: none;
  border: none;
  color: white;
  border-radius: 1px;
  transition: all 0.6s;
  height: 45px;

&:hover {
  background: ${props => props.theme.colors.lightmain};

}
`

const Button = ({ onClick, block, children }) => {
  return <StyledButton onClick={onClick} block={block}>{ children }</StyledButton>
}

export default Button
