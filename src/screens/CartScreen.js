import React from 'react'
import MainBox from '../components/Main.js'
import { StateContext } from '../globalstate/GlobalState.js'
import styled from 'styled-components'
import { Col, Row, Container, Image } from 'react-bootstrap'
import Button from '../components/Button.js'

const MyContainer = styled(Container)`
  border-top: 2px solid lightgrey;
  margin-top: 10px;
  padding: 20px;
  height: fit-content;
`

const MyRow = styled(Row)`
  text-align: center;
  vertical-align: middle;
  line-height: 70px;
`

const OrderDiv = styled.div`
  position: relative;
  height: 70px;
  background-color: #ebebeb;
  width: 90%;
  margin: 0 auto 30px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`

const MyText = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const HeaderLine = styled.div`
  height: 50px;
  border-bottom: 3px #ebebeb solid;
  margin-bottom: 50px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`

const MyImage = styled.img`
  margin-top: -125px;
`
const PriceDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border:3px #ebebeb solid;
  height: 150px;
  width: 80%;
  margin: 30px auto; 
  padding-top: 20px;
`

const CartScreen = () => {
  const { cartItems } = React.useContext(StateContext)
  return (
    <MainBox>
      <div>
        <OrderDiv>
          <MyText><i class="fas fa-truck"></i>...Psst! Visste du att du får fri frakt om du handlar för över 500 SEK</MyText>
        </OrderDiv>
        <div>
          <HeaderLine></HeaderLine>
          <MyImage src={ '/img/dinavaror.jpg'} /> </div> {cartItems.map(item => (
        <MyContainer>
          <MyRow>
            <Col md={3}>
              <Image src={item.imageurl} width="70px"></Image>
            </Col>
            <Col md={3}>{item.name}</Col>
            <Col md={3}>{item.price} SEK</Col>
            <Col md={3}><i class="fas fa-trash-alt"></i></Col>
          </MyRow>
        </MyContainer> ))} </div>
      <PriceDiv>
      <Button >ANGE VÄRDEKOD</Button>
        <h3>Totalt: 398 SEK</h3></PriceDiv>
        <HeaderLine></HeaderLine>
          <MyImage src={ '/img/slutforkop.jpg'} />

    </MainBox>
  )
}

export default CartScreen