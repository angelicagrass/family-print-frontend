import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Button from '../components/Button/Button.js'
import MainBox from '../components/Main.js'
import styled from 'styled-components'
import { StateContext } from '../globalstate/GlobalState.js'
import SelectedList from '../components/SelectList.js'


const MyDiv = styled.div`
  float: left;
  margin-top: -4vh;
`

const ThumbImagesDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  cursor: pointer;
  margin: 10px;
  justify-content: center;
`

const MyImage = styled.img`
  width: 90px;
  height: 100%;
  display: block;
  object-fit: cover;
  border: 1px solid #ddd;
  margin: 5px 5px;
  opacity: 0.7;
  border-radius: 5px;
  
  &:active {
    opacity: 1;
    border: 3px solid ${props => props.theme.colors.main};
  }
  &:hover {
    opacity: 1;
  }
`
const InfoDiv = styled.div`
  padding-top: 40px;
`

const ProductScreen = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const { cartItems, setCartItems } = React.useContext(StateContext)
  const [arrayIndex, setArrayIndex] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getproduct/${id}`)
      res = await res.json()
      setProduct(res)
    }
    fetchProducts()
  },[])

  const checkItemsInLocaleStorage = (product) => {
    const exist = cartItems.find((x) => x._id === product._id)

    !exist
    ? setCartItems([...cartItems, {...product}])
    : setCartItems(cartItems.map((x) => x._id === product._id 
    ? {...exist, qtyInCart: exist.qtyInCart + 1} 
    : x))
  }

  return (
  <MainBox>
    {/* <MyDiv>
      <Link to='/'>
        <Button>Gå tillbaka</Button>
      </Link>
    </MyDiv> */}
      <Row className='justify-content-center'>
        <Col md={5}>
          <Image src={product.thumbImageUrls && product.thumbImageUrls[arrayIndex]} alt={product.name} fluid /> </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2> </ListGroup.Item>
            <ListGroup.Item> Pris: {product.price} sek </ListGroup.Item>
            <ListGroup.Item>
              <SelectedList />
              
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
