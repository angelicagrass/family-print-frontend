import React from 'react'
import styled from 'styled-components'



const MainBx = styled.div`
background-color: white;
border-radius: 3px;
min-height: 80vh;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
width: 90%;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
text-align: center;
padding-top: 50px;
`

const MainBox = ({ children }) => {
    return (
        <MainBx>
          {children}
        </MainBx>
    )
}

export default MainBox