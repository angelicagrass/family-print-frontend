import React, { useState } from 'react'
import MainBox from '../components/Main.js'
import { StateContext } from '../globalstate/GlobalState.js'
import styled from 'styled-components'
import { Col, Row, Container, Image } from 'react-bootstrap'
import Button from '../components/Button.js'
// import StyledCounter from '../importedComponents/ProductActions.js'
import Dot from '../importedComponents/Dot.js'


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
  height: 50px;
  background-color: #ebebeb;
  width: 90%;
  margin: 0 auto 30px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  z-index: 100;
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

  height: 150px;
  width: 80%;
  margin: 30px auto; 
  padding-top: 20px;
`
// Davids
const StyledNumber = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 0;
  margin-left: 8px;
  width: 40px;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
  backdrop-filter: brightness(150%) saturate(150%) blur(5px);
  background-clip: padding-box;
  color: rgba(0, 0, 0, 0.7);
  height: 40px;
`
// Davids
const StyledCounter = styled.div`
  position: relative;
  /* justify-content: left;
  align-items: left; */
  padding: 10px;
  width: 150px;
  margin: 0 auto;

`

const CartScreen = () => {
  const { cartItems, setCartItems } = React.useContext(StateContext)
  const totalPrice = [...cartItems].reduce((total, obj) => obj.price * obj.qtyInCart + total,0)

  function decrementQty (index) {
    const newArray = [...cartItems]
    newArray[index].qtyInCart -= 1

    newArray[index].qtyInCart === 0 
      ? setCartItems(newArray.filter(item => item !== newArray[index]))
      : setCartItems(newArray)
  }

  function increaseQty (index) {
    const newArray = [...cartItems]
    newArray[index].qtyInCart += 1
    setCartItems(newArray)
  }

  function remove (index) {
    const newArray = [...cartItems]
    setCartItems(newArray.filter(item => item !== newArray[index]))
  }



  return (
    <MainBox>
    <div>
      <OrderDiv>
        <MyText><i class="fas fa-truck"></i>...Psst! Visste du att du får fri frakt om du handlar för över 500 SEK</MyText>
      </OrderDiv>
      <div>
          <HeaderLine></HeaderLine>
          <MyImage src={ '/img/dinavaror.jpg'} /></div> 
          {cartItems.length <=0 
      ? (<h2>Varukorgen är tom</h2>) 
      : (cartItems.map((item, index) => (
        <>
          <MyContainer>
            <MyRow>
              <Col md={2}>
                <Image src={item.imageurl} width="70px"></Image>
              </Col>
              <Col md={3}>{item.name}</Col>
              <Col md={3} style={{margin: '0 auto 30px auto'}}>
                <StyledCounter>
                  <Dot onClick={()=> decrementQty(index) } btnType={'counterBtn'}>-</Dot>
                  <StyledNumber>{item.qtyInCart}</StyledNumber>
                  <Dot onClick={()=> increaseQty(index)} btnType={'counterBtn'}>+</Dot>
                </StyledCounter>
              </Col>
              <Col md={2}>{item.price * item.qtyInCart} SEK</Col>
              <Col md={2}><button onClick={() => {remove(index)}} class="fas fa-trash-alt"></button></Col>
            </MyRow>
          </MyContainer>
          </> )) )} {!cartItems.length <=1 && 
          <div>
            <PriceDiv>
              <Button>ANGE VÄRDEKOD</Button>
              <h3>Totalt: {totalPrice} SEK</h3></PriceDiv>
            <HeaderLine></HeaderLine>
            <MyImage src={ '/img/slutforkop.jpg'} /> </div> } </div>
  </MainBox> )
}

export default CartScreen
