import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Button from '../../components/Button/Button.js'
import MainBox from '../../components/Main/Main.js'
import { StateContext } from '../../globalstate/GlobalState.js'
import SelectedList from '../../components/SelectList/SelectList.js'
import { useHistory} from 'react-router-dom'
import { MyDiv, ThumbImagesDiv, MyImage, InfoDiv} from './StyledProductScreen.js'


const ProductScreen = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const { cartItems, setCartItems } = React.useContext(StateContext)
  const { sizePrice } = React.useContext(StateContext)
  const { counter, setCounter } = React.useContext(StateContext)
  const [arrayIndex, setArrayIndex] = useState(0)
  const history = useHistory()
  

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getproduct/${id}`)
      res = await res.json()
      setProduct(res)
    }
    fetchProducts()
  },[id])

  const checkItemsInLocaleStorage = (product) => {
    const exist = cartItems.find((x) => x._id === product._id)
    !exist
    ? setCartItems([...cartItems, {...product}])
    : setCartItems(cartItems.map((x) => x._id === product._id 
    ? {...exist, qtyInCart: exist.qtyInCart + 1} 
    : x))
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    
  <MainBox>
    <MyDiv onClick={() => history.goBack()}>
      <i class="fas fa-angle-double-left fa-2x"></i>
    </MyDiv>
      <Row className='justify-content-center'>
        <Col md={5}>
          <Image src={product.thumbImageUrls && product.thumbImageUrls[arrayIndex]} alt={product.name} fluid /> </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2> </ListGroup.Item>
            <ListGroup.Item> Pris: {sizePrice 
              ? sizePrice + product.price
              : product.price} sek 
            </ListGroup.Item>
            <ListGroup.Item>
              <SelectedList>{product}</SelectedList>
              <Button block onClick={()=> { 
                      checkItemsInLocaleStorage(product)
              }}>KÖP</Button>
            </ListGroup.Item>
            <ListGroup.Item> Beskrivning: {product.caption} </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    <ThumbImagesDiv>
        {product.thumbImageUrls &&
          product.thumbImageUrls.map((img, index) => { return (
            <MyImage src={img} alt="" key={index}
            onClick={() => setArrayIndex(index)}/>
          )})} 
    </ThumbImagesDiv>
      <InfoDiv>
        <p><i className="fas fa-check-circle fa-lg"></i> Betala säkert med Klarna Checkout!</p>
        <p><i className="fas fa-check-circle fa-lg"></i> Frågor? Maila oss på info@familyprint.se</p>
        <p><i className="fas fa-check-circle fa-lg"></i> Leveranstid upp till 10 arbetsdagar.</p>
      </InfoDiv>
  </MainBox>
  )
}

export default ProductScreen
