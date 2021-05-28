import React from 'react'
import BounceLoader
 from 'react-spinners/ClipLoader'
import { MyDiv } from './StyledLoader.js'

const Loader = () => {
  return (
    <MyDiv>
      <BounceLoader color={props => props.theme.colors.main} size={50} />
    </MyDiv>
  )
}

export default Loader