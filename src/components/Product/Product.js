import React from 'react'
import { Card } from 'react-bootstrap'
import { MyCard } from './StyledProduct.js'

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
