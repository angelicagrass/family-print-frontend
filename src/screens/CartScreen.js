import React from 'react'
import MainBox from '../components/Main.js'
import { StateContext } from '../globalstate/GlobalState.js'
import styled from 'styled-components'
import { Col, Row, Container, Image } from 'react-bootstrap'

const MyContainer = styled(Container)`
  border-top: 2px solid lightgrey;
  margin-top: 10px;
  padding-top: 5px;
`

const MyRow = styled(Row)`
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
`

const OrderDiv = styled.div`
  


`

const CartScreen = () => {
  const { cartItems } = React.useContext(StateContext)
  return (
      <MainBox>
        <OrderDiv></OrderDiv>
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