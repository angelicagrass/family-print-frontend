import { Row, Col, Image, Container } from 'react-bootstrap'

import React from 'react'

const StartImages = () => {
  return (
    <Container>
      <Row md={2}>
        <Col>
          <Image src="/img/start-image-1.jpg" rounded fluid/>
        </Col>
        <Col>
          <Image src="/img/start-image-2.jpg" rounded fluid/>
        </Col>
      </Row>
    </Container>
  )
}

export default StartImages
