import React from 'react'

import { StyledButton } from './StyledButton.js'

const Button = ({ onClick, block, children }) => {
  return <StyledButton onClick={onClick} block={block}>{ children }</StyledButton>
}

export default Button
