import React, { useState, useEffect } from 'react'
import MainBox from '../components/Main.js'
import { useParams } from 'react-router-dom'
import Product from '../components/Product.js'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'


const StyledDiv = styled.div`
  margin-top: 1vh;
`

const CategoryScreen = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getsubcategory/${id}`)
      res = await res.json()
      setProducts(res)
    }
    fetchProducts()
  },[id])

  return (
    <MainBox>
      <StyledDiv>
        <h1 className="text-muted">HEJ HEJ</h1>
        <Row className="justify-content-md-center"> {products.map((product, index) => (
          <Col key={ index} sm={12} md={6} lg={4} xl={3}>
            <Product key={index} product={product} /> </Col> ))} </Row>
      </StyledDiv>
    </MainBox>
  )
}

export default CategoryScreen