import React from 'react'
import styled from 'styled-components'
import Links from './Links.js'


const CatBar = styled.div`
background-color: white;
height: 60px;
width: 100%;
padding: 17px;
`

const Categories = () => {
    return (
        <CatBar>
          <Links />
        </CatBar>
    )
}

export default Categories