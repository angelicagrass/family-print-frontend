import { Row, Col, Image, Container } from 'react-bootstrap'
import Glass from '../../components/Glass/Glass.js'
import React from 'react'
import { MyImage, MyText, MyLastText} from './StyledStartImages.js'

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
