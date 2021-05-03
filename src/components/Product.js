import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'


const MyCard = styled(Card)`
transition: all 0.6s;

&:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
`

const Product = ({ product }) => {
  return (
    <MyCard className='my-3 p-3 rounded'>
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.imageurl} variant='top' /> </a>
      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
        </a>
        <Card.Text as='p'>{product.price} sek </Card.Text>
      </Card.Body>
    </MyCard>
  )
}

export default Product
