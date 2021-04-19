import { Row, Col, Image, Container } from 'react-bootstrap'
import Glass from './Glass.js'
import React from 'react'
import styled from 'styled-components'

const MyText = styled.h1`
  color: white;
  margin: 0;
  font-weight: 900;
`
const MyLastText = styled.h1`
  color: white;
  margin: 0;
  font-weight: 900;
  border-bottom: 4px solid white;
padding-bottom: 10px;
`

const StartImages = () => {
  return (
    <Container>
      <Row xs={1} md={2} >
        <Col>
          <Image style={{marginTop: '10px'}} src="/img/start-image-1.jpg" rounded fluid/>
        </Col>
        <Col>
          <Image style={{marginTop: '10px'}} src="/img/start-image-2.jpg" rounded fluid/>
        </Col>
      </Row>
      <Glass>
        <MyText>ERBJUDANDE</MyText>
        <MyLastText>FRÅN 49KR</MyLastText>
      </Glass>
    </Container>
  )
}

export default StartImages
