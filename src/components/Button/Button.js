import React from 'react'
import styled from 'styled-components'
import { StyledButton } from './StyledButton.js'

const Button = ({ onClick, block, children }) => {
  return <StyledButton onClick={onClick} block={block}>{ children }</StyledButton>
}

export default Button
