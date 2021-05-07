import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Product.js'
import styled from 'styled-components'
import { StyledDiv } from './StyledLatestProducts.js'

const LatestProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getproducts`)
      res = await res.json()
      setProducts(res)
    }
    fetchProducts()
  },[])

  return (
    <StyledDiv>
      <h1 class="text-muted">Nyheter</h1>
      <Row className="justify-content-md-center"> {products.map(product => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <Product product={product} /> </Col> ))} </Row>
    </StyledDiv>
  )
}

export default LatestProducts
