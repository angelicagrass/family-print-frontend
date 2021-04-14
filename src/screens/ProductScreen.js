import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
// import products from '../products.js'
import Button from '../components/Button.js'
// import Button from 'react-bootstrap/Button';
import MainBox from '../components/Main.js'
import styled from 'styled-components'
import SelectedList from '../components/SelectList.js'


const MyDiv = styled.div`
float: left;
margin-top: -4vh;
`

const ProductScreen = () => {
  const { id } = useParams()

  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch(`https://family-print-backend-staging.herokuapp.com/getproduct/${id}`)
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
            <SelectedList />
          </ListGroup.Item>
          <ListGroup.Item>
            Beskrivning: {product.caption}
          </ListGroup.Item>
            <ListGroup.Item><Button block>KÖP</Button></ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
      <br></br>
      <p><i class="fas fa-check-circle fa-lg"></i> Betala säkert med Klarna Checkout!</p>
      <p><i class="fas fa-check-circle fa-lg"></i> Frågor? Maila oss på info@familyprint.se</p>
      <p><i class="fas fa-check-circle fa-lg"></i> Leveranstid upp till 10 arbetsdagar.</p>
  </MainBox>
  )
}

export default ProductScreen
