import React from 'react'
import MainBox from '../components/Main.js'
import LatestProducts from '../components/LatestProducts'
import StartImages from '../components/StartImages.js'
import CustomCard from '../components/CustomCard.js'

const HomeScreen = () => {
  return (
      <MainBox>
        <StartImages />
        <LatestProducts />
        <CustomCard></CustomCard>
      </MainBox>
  )
}

export default HomeScreen
