import React from 'react'
import { ContentDiv, TheImg, ImgDiv, CardDiv, ContainerDiv } from './StyledCustomCard.js'

const CustomCard = (props) => {
  return (
    <ContainerDiv className='mycontainer'>
      <CardDiv className='mycard'>
        <ImgDiv>
          <TheImg src="/img/miljotest.png" /> </ImgDiv>
        <ContentDiv className='mycontent'>
          <p>{props.text}</p>
        </ContentDiv>
      </CardDiv>
    </ContainerDiv>
  )
}

export default CustomCard
