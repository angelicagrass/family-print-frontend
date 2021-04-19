import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: relative;
  margin-top: 1vh;
  width: 100%;
  color: white;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  border-radius: 1px;

&:hover {
  background-color: white;
  color: black;
}
`

const IcondDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 36px;
  pointer-events: none;
  padding-left: 5px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

`

const StyledSelect = styled.select`
  width: 100%;
  height: 50px;
  font-size: 100%;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background-color: black;
  border: none;
  border-bottom: 2px solid black;
  color: white;
  padding: 10px;
  padding-right: 38px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;

  &:hover {
  background-color: white;
  color: black;
}
`

const CustomOptions = styled.option`
    display:none;
    position:absolute;
    top:100%;
    right:0;
    left:0;
    z-index:999;
    margin:0 0;
    padding:0 0;
    list-style:none;
    border:1px solid #ccc;
    background-color:white;
    -webkit-box-shadow:0 1px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow:0 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow:0 1px 2px rgba(0, 0, 0, 0.2);


`

const SelectList = () => {
  return (
    <StyledDiv>
      <StyledSelect class="form-select" aria-label="Default select example">
            <CustomOptions selected>STORLEK</CustomOptions>
            <option value="1">A4</option>
            <option value="2">30 x 40cm</option>
            <option value="3">50 x 70cm</option>
      </StyledSelect>
      <IcondDiv><i class="fas fa-chevron-circle-down fa-lg"></i></IcondDiv>
    </StyledDiv>
  )
}

export default SelectList

