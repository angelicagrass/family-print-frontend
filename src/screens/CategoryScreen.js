import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product.js'
import Main from '../components/Main.js'

const CategoryScreen = () => {
  const { id } = useParams()
  return (
    <Main>


    </Main>
  )
}

export default CategoryScreen
