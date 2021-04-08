import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`

width: 200px;

`

const StyledSelect = styled.select`


`



const SelectList = () => {
  return (
    <StyledDiv>
      <StyledSelect class="form-select" aria-label="Default select example">
            <option selected>Storlek</option>
            <option value="1">A4</option>
            <option value="2">30 x 40cm</option>
            <option value="3">50 X 70cm</option>
      </StyledSelect>
    </StyledDiv>
  )
}

export default SelectList

