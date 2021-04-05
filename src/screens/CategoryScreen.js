import React from 'react'
import MainBox from '../components/Main.js'
import products from '../products.js'
import { useParams } from 'react-router-dom'
import Product from '../components/Product.js'
import { Col, Row } from 'react-bootstrap'


const CategoryScreen = () => {
  const { category, subcategory } = useParams()

  const product = products.filter((p) => p.subcategory === subcategory)
  console.log(product)
  
  return (
    <MainBox>
      <h1 class="text-muted">{subcategory.replace('-', ' ')}</h1>
     <Row className="justify-content-md-center">
        {product.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
          </Col>
        ))} 
      </Row>
    </MainBox>
  )
}

export default CategoryScreen
