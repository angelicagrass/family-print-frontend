import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const StyledProductAction = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 100%;
text-align: center;
justify-content: center;

${props => props.selectbox && {
  position: "relative",
  border: "1px solid lightgrey",
  boxShadow: "2px 2px 2px grey",
  cursor: "pointer",
  fontWeight: "700",
  marginBottom: "20px",
  fontSize: "14px",
  textTransform: "uppercase"
  }}
`

const StyledSelect = styled.div`
position: absolute;
border: 1px solid lightgray;
cursor: pointer;
font-weight: 700;
width: 85%;
/* margin-left: 0.8%; */
margin-top: 50px;
`
const StyledOption = styled.div`
position:relative;
width: 100%;
border: 0;
background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
backdrop-filter: brightness(150%) saturate(80%) blur(5px);
background-clip: padding-box;
cursor: pointer;
font-weight: 700;
padding: 0.5rem 0.5rem;
text-shadow: 2px 2px 2px white;
z-index:10000000;
&:hover {
background: ${props => props.theme.colors.main};
opacity: 0.8;
color: black;
text-shadow: none;

}

`


function ProductActions({ children }) {
  const [arrowDirection, setArrowDirection] = useState('down')
  const [arrowToggle, setArrowToggle] = useState(false)
  const [option, setOption] = useState('Choose type')

  useEffect(() => {
    arrowToggle ? setArrowDirection('up') : setArrowDirection('down')
  }, [arrowToggle])

  return (
    <StyledProductAction>
      { 
      <>
      <StyledProductAction onClick={() => setArrowToggle(!arrowToggle)} selectbox>
        {option}
      </StyledProductAction>
      {arrowToggle &&
      <StyledSelect>{children.size.map((child, index) =>
        <StyledOption
          onClick={() => {
            setArrowToggle(false)
            setOption(child)
          }} 
          val={index}>
            {child}
        </StyledOption>)}
        {option !== 'Storlek' &&
        <StyledOption
        onClick={() => {
          setArrowToggle(false)
          setOption('Storlek')
        }}>
        unselect
      </StyledOption>
        
        }
      </StyledSelect>}
      </>
      }
    </StyledProductAction>
  )
}

export default ProductActions
