import React from 'react'
import styled from 'styled-components'
import { StyledDiv, IcondDiv, StyledSelect, CustomOptions } from './StyledSelectList.js'

const SelectList = () => {
  return (
    <StyledDiv>
      <StyledSelect className="form-select" aria-label="Default select example">
            <CustomOptions selected>STORLEK</CustomOptions>
              <option value="1">A4</option>
              <option value="2">30 x 40cm</option>
              <option value="3">50 x 70cm</option>
      </StyledSelect>
      <IcondDiv><i className="fas fa-chevron-circle-down fa-lg"></i></IcondDiv>
    </StyledDiv>
  )
}

export default SelectList

