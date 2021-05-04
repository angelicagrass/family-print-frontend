import React from 'react'
import styled from 'styled-components'

const StyledDot = styled.div`

display: inline-flex;
vertical-align: middle;
border: 0;
border-radius: 50%;
box-shadow: none;
cursor: pointer;
font-weight: 700;
padding: 2px;
font-size: 15px;
background: ${props => props.theme.colors.main};
color: black;
width: 20px;
height: 20px;
margin-left: 10px;
z-index: 10;
justify-content: center;
text-align: center;
text-transform: lowercase;
align-items: center;
color: white;
font-wight: 800px;

${props => props.arrowDirection === 'down' && {
  transform: "translate(210px, -10px) rotate(-90deg)",
}}

${props => props.arrowDirection === 'up' && {
  transform: "translate(210px, -10px) rotate(90deg)",
}}

${props => props.btnType === 'dangerBtn' && {
  backgroundColor: "grey",
  fontWeight: "400"
}}
`
function Dot({ btnType, onClick, arrowDirection, children }) {
  return (
    <StyledDot btnType={btnType} onClick={onClick} arrowDirection={arrowDirection}>
      {children}
    </StyledDot>
  )
}

export default Dot
