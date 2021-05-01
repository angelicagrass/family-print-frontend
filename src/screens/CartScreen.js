import React from 'react'
import MainBox from '../components/Main.js'
import { StateContext } from '../globalstate/GlobalState.js'
import styled from 'styled-components'

import { Col, Row, Container, Image } from 'react-bootstrap'

const MyContainer = styled(Container)`
border: 2px solid black;
margin-top: 10px;
`

const MyRow = styled(Row)`
`

const CartScreen = () => {
  const { cartItems, setCartItems } = React.useContext(StateContext)
  return (
      <MainBox>
        {cartItems.map(item => (
          <MyContainer>
            <MyRow>
                <Col md={3}>
                  <Image src={item.imageurl} width="70px"></Image>
                </Col>
                <Col md={3}>{item.name}</Col>
                <Col md={3}>{item.price} SEK</Col>
                <Col md={3}><i class="fas fa-trash-alt"></i></Col>
            </MyRow>
          </MyContainer>
        ))}
      </MainBox>
  )
}

export default CartScreen