import React from 'react'
import { Link } from 'react-router-dom'
import MainBox from '../../components/Main/Main.js'
import { StateContext } from '../../globalstate/GlobalState.js'
import { Col, Image, Row } from 'react-bootstrap'
import Button from '../../components/Button/Button.js'
import Dot from '../../importedComponents/Dot.js'
import DiscountBox from '../../components/DiscountBox/DiscountBox.js'
import { MyContainer, MyRow, OrderDiv, MyText, HeaderLine, MyImage, PriceDiv, DiscountDiv, RedText, StyledNumber, StyledCounter, TotalDiv, TotalRow } from './StyledCartScreen.js'



const CartScreen = () => {
  const { cartItems, setCartItems } = React.useContext(StateContext)
  const { animation, setAnimation } = React.useContext(StateContext)
  const { discountValue } = React.useContext(StateContext)
  const { counter, setCounter } = React.useContext(StateContext)
  
  const totalPrice = [...cartItems].reduce((total, obj) => obj.price * obj.qtyInCart + total,0)
  const withDiscount = Math.round(totalPrice * discountValue)
  const theDiscountValue = totalPrice - withDiscount

  function decrementQty (index) {
    const newArray = [...cartItems]
    newArray[index].qtyInCart -= 1
    setCounter(counter - 1)

    newArray[index].qtyInCart === 0 
      ? setCartItems(newArray.filter(item => item !== newArray[index]))
      : setCartItems(newArray)
  }

  function increaseQty (index) {
    const newArray = [...cartItems]
    newArray[index].qtyInCart += 1
    setCounter(counter + 1)
    setCartItems(newArray)
  }

  function remove (index) {
    const newArray = [...cartItems]
    setCounter(counter - newArray[index].qtyInCart)
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
              <Col md={3}>
               <Link to={`/product/${item.id}`}>{item.name} </Link>
              </Col>
              <Col md={3} style={{margin: '0 auto 30px auto'}}>
                <StyledCounter>
                  <Dot onClick={()=> decrementQty(index) } btnType={'counterBtn'}>-</Dot>
                  <StyledNumber>{item.qtyInCart}</StyledNumber>
                  <Dot onClick={()=> increaseQty(index)} btnType={'counterBtn'}>+</Dot>
                </StyledCounter>
              </Col>
              <Col md={2}>{item.price * item.qtyInCart} SEK</Col>
              <Col md={2}><i onClick={() => {remove(index)}} class="fas fa-trash-alt"></i></Col>
            </MyRow>
          </MyContainer>
          </> )) )} {!cartItems.length <=1 && 
          <div>
            <PriceDiv>
              <Button onClick={() => {setAnimation(true)}}>ANGE VÄRDEKOD</Button>
              <h3>Totalt: {totalPrice} SEK</h3>
              </PriceDiv>
              {!cartItems.length <= 0 && 
                <TotalDiv>  
                <h3>Fraktkostnad 49 SEK</h3>
                {discountValue
                ? <><RedText>rabatt: {theDiscountValue} SEK </RedText>
                  <h3>Att Betala: {withDiscount} SEK</h3></>
                : <h3>Att betala: {totalPrice} SEK</h3>
                }
                </TotalDiv>
              }
            <HeaderLine></HeaderLine>
            <MyImage src={ '/img/slutforkop.jpg'} /> </div> } </div>
            <DiscountBox />
  </MainBox> )
}

export default CartScreen
