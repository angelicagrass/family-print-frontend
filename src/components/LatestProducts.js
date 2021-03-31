import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products.js'
import Product from './Product.js'

const LatestProducts = () => {
  return (
    <>
    <h1>Senaste produkterna</h1>
    <Row className="justify-content-md-center">
      {products.map(product => (
        <Col sm={12} md={6} lg={4} xl={3}>
         <Product product={product} />
        </Col>
      ))} 
    </Row>  
    </>
  )
}

export default LatestProducts