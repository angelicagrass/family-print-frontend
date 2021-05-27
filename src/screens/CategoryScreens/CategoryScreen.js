import React, { useState, useEffect } from 'react'
import MainBox from '../../components/Main/Main.js'
import { useParams } from 'react-router-dom'
import Product from '../../components/Product/Product.js'
import { Col, Row } from 'react-bootstrap'
import { StyledDiv } from './StyledCategoryScreens.js'
import Loader from '../../components/Loader/Loader.js'


const CategoryScreen = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getsubcategory/${id}`)
      res = await res.json()
      setProducts(res)
      setLoading(false)
    }
    fetchProducts()
  },[id])

  return (
    <MainBox>
      {loading 
      ? <Loader />
      : <StyledDiv>
          <Row className="justify-content-md-center"> {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
          <Product key={index} product={product} /> </Col> ))} </Row>
        </StyledDiv>
      }
    </MainBox>
  )
}

export default CategoryScreen