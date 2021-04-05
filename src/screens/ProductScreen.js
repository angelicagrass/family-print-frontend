import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import products from '../products.js'
import Button from '../components/Button.js'
import MainBox from '../components/Main.js'
import styled from 'styled-components'


const MyDiv = styled.div`
float: left;
margin-top: -4vh;

`

const ProductScreen = ({ match }) => {
  const { id } = useParams()

  const product = products.find((p) => p._id === id)

  return (
  <MainBox>
    <MyDiv>
    <Link to='/'>
      <Button>Gå tillbaka</Button>
     </Link>
    </MyDiv>
    <Row className='justify-content-center'>
      <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
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
            Beskrivning: {product.description}
          </ListGroup.Item>
            <ListGroup.Item><Button primary>KÖP</Button></ListGroup.Item>
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
