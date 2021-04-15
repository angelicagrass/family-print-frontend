import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;
align-items: top;
flex-wrap: wrap;
padding: 30px;
height: 500px;

`

const CardDiv = styled.div`
position: relative;
max-width: 300px;
height: 215px;
background: #fff;
margin-right: 10px;
margin-left: 10px;
margin-top: 20vh;
padding: 20px 15px;
display: flex;
flex-direction: column;
box-shadow: 0 5px 20px rgba(0,0,0,0.5);
transition: 0.3s ease-in-out;

&:hover {
  height: 420px;

}


`

const ImgDiv = styled.div`
position: relative;
width: 260px;
/* height: 260px; */
top: -60px;
left: 8px;
z-index: 1;
box-shadow: 0 5px 20px rgba(0,0,0,0.2);

`

const TheImg = styled.img`
max-width: 100%;
border-radius: 4px;
padding: 10px 15px;
text-align: center;

`

const ContentDiv = styled.div`
position: relative;
margin-top: -140px;
color: #111;
visibility: hidden;
opacity: 0;
transition: 0.3 ease-in-out;
`


const CustomCard = () => {
  return (
    <ContainerDiv className='mycontainer'>
      <CardDiv className='mycard'>
        <ImgDiv>
          <TheImg src="/img/start-image-2.jpg" />
        </ImgDiv>
        <ContentDiv className='mycontent'>
          <h3>Vi testar</h3>
          <p>beskrivning hamnar här, en massa text hamnar här så vi testar på vad som kommer att synas</p>
        </ContentDiv>
      </CardDiv>
      <CardDiv className='mycard'>
        <ImgDiv>
          <TheImg src="/img/start-image-2.jpg" />
        </ImgDiv>
        <ContentDiv className='mycontent'>
          <h3>Vi testar</h3>
          <p>beskrivning hamnar här, en massa text hamnar här så vi testar på vad som kommer att synas</p>
        </ContentDiv>
      </CardDiv>
      <CardDiv className='mycard'>
        <ImgDiv>
          <TheImg src="/img/start-image-2.jpg" />
        </ImgDiv>
        <ContentDiv className='mycontent'>
          <h3>Vi testar</h3>
          <p>beskrivning hamnar här, en massa text hamnar här så vi testar på vad som kommer att synas</p>
        </ContentDiv>
      </CardDiv>
    </ContainerDiv>
  )
}

export default CustomCard
