import React from 'react'
import { StateContext } from '../../globalstate/GlobalState.js'
import { MyDiv } from './StyledCartCounter.js'


const CartCounter = () => {
  const { counter } = React.useContext(StateContext)

  return (
    <MyDiv>
        {counter}  
    </MyDiv>
  )
}

export default CartCounter