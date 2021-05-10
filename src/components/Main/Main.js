import React from 'react'
import { MainBx } from './StyledMain.js'

const MainBox = ({ children }) => {
    return (
        <MainBx>
          {children}
        </MainBx>
    )
}

export default MainBox