import React from 'react'
import { StyledDiv, IcondDiv, StyledSelect, CustomOptions } from './StyledSelectList.js'
import { StateContext } from '../../globalstate/GlobalState.js'

const SelectList = ({children}) => {
  const { sizePrice, setSizePrice } = React.useContext(StateContext)

  const handleChange = (e) => {
    const number = Number(e.target.value)
    setSizePrice(number)
  }

  return (
    <StyledDiv>
      <StyledSelect onChange={handleChange} className="form-select" aria-label="Default select example">
            <CustomOptions selected>STORLEK</CustomOptions>
            {children.size && children.size.map((size, index) => { return (
              <option key={index} value={index}>{size}</option>
            )})}
      </StyledSelect>
      <IcondDiv><i className="fas fa-chevron-circle-down fa-lg"></i></IcondDiv>
    </StyledDiv>
  )
}

export default SelectList

