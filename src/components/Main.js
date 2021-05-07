import React from 'react'
import styled from 'styled-components'

const MainBx = styled.div`
  background-color: white;
  border-radius: 3px;
  min-height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  width: 90%;
  max-width: 1300px;
  margin-top: 5vh;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 5vh;
  padding-right: 1vh;
  padding-left: 1vh;
  padding-bottom: 3vh;

  @media only screen and (max-width: ${props => props.theme.screen.mobile}) {
  margin-top: 3vh;
}
`




const MainBox = ({ children }) => {
    return (
        <MainBx>
          {children}
        </MainBx>
    )
}

export default MainBox