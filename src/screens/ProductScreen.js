import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Button from '../components/Button.js'
import MainBox from '../components/Main.js'
import styled from 'styled-components'
import { StateContext } from '../globalstate/GlobalState.js'
import SelectedList from '../components/SelectList.js'

const MyDiv = styled.div`
float: left;
margin-top: -4vh;
`

const ThumbImagesDiv = styled.div`


`

const ProductScreen = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const { cartItems, setCartItems } = React.useContext(StateContext)

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getproduct/${id}`)
      res = await res.json()
      setProduct(res)
    }
    fetchProducts()
  },[id])

  return (
  <MainBox>
    <MyDiv>
      <Link to='/'>
        <Button>Gå tillbaka</Button>
      </Link>
    </MyDiv>

    <Row className='justify-content-center'>
      <Col md={5}>
        <Image src={product.imageurl} alt={product.name} fluid />
      </Col>
      <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              Pris: {product.price} sek
            </ListGroup.Item>
            <ListGroup.Item>
              <SelectedList />
                <Button onClick={() => {
                setCartItems([...cartItems, {...product}])
                console.log(cartItems)}}>KÖP</Button>
            </ListGroup.Item>
            <ListGroup.Item>
              Beskrivning: {product.caption}
            </ListGroup.Item> 
        </ListGroup>
      </Col>
    </Row>
    <ThumbImagesDiv></ThumbImagesDiv>

      <br></br>
      <p><i className="fas fa-check-circle fa-lg"></i> Betala säkert med Klarna Checkout!</p>
      <p><i className="fas fa-check-circle fa-lg"></i> Frågor? Maila oss på info@familyprint.se</p>
      <p><i className="fas fa-check-circle fa-lg"></i> Leveranstid upp till 10 arbetsdagar.</p>
  </MainBox>
  )
}

export default ProductScreen
