import React from 'react'
import MainBox from '../components/Main.js'
import LatestProducts from '../components/LatestProducts'
import StartImages from '../components/StartImages.js'

const HomeScreen = () => {
  return (
      <MainBox>
        <StartImages />
        <LatestProducts />
      </MainBox>
  )
}

export default HomeScreen
