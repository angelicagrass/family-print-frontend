import React from 'react'
import { Card } from 'react-bootstrap'
import { MyCard } from './StyledProduct.js'
import { Link } from 'react-router-dom'

//test att lägga till

const Product = ({ product }) => {
  return (

    <MyCard className='my-3 p-3 rounded'>
      <Link to={`/product/${product.id}`} >
        <Card.Img src={product.imageurl} variant='top' /> </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
        </Link>
        <Card.Text as='p'>{product.price} sek </Card.Text>
      </Card.Body>
    </MyCard>
  )
}

export default Product
