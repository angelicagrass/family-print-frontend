import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products.js'
import Product from './Product.js'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin-top: 5vh;


`


const LatestProducts = () => {
  return (
    <StyledDiv>
    <h1 class="text-muted">Nyheter</h1>
    <Row className="justify-content-md-center">
      {products.map(product => (
        <Col sm={12} md={6} lg={4} xl={3}>
         <Product product={product} />
        </Col>
      ))} 
    </Row>  
    </StyledDiv>
  )
}

export default LatestProducts
