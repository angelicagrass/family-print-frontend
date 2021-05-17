import React from 'react'

import { StyledButton } from './StyledButton.js'

const Button = ({ onClick, block, children, buttonType }) => {
  return <StyledButton onClick={onClick} block={block} buttonType={buttonType}>{ children }</StyledButton>
}

export default Button
