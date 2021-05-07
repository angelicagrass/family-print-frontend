import { Row, Col, Image, Container } from 'react-bootstrap'
import Glass from './Glass/Glass.js'
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

const MyImage = styled(Image)`
  margin-top: 10px;
  margin-bottom: 10px;

@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  margin-top: 0px;
}
`

const StartImages = () => {
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col>
          <MyImage src="/img/start-image-1.jpg" rounded fluid/> </Col>
        <Col>
          <MyImage src="/img/start-image-2.jpg" rounded fluid/> </Col>
      </Row>
      <Glass>
        <MyText>ERBJUDANDE</MyText>
        <MyLastText>FRÅN 49KR</MyLastText>
      </Glass>
    </Container>
  )
}

export default StartImages
