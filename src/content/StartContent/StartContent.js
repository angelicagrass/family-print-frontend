import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import CustomCard from '../../components/CustomCard/CustomCard.js'
import text from '../../theme/text.js'
import { MyTextBox, MyDiv } from './StyledStartContent.js'

const StartContent = () => {
  return (
    <MyDiv>
      <Container>
        <Row xs={1} md={2} >
          <Col md={true}>
            <MyTextBox>{text.presentation}</MyTextBox>
          </Col>
          <Col md={true}>
            <CustomCard text={text.enviroment} />
          </Col>
        </Row>
      </Container>
    </MyDiv>
  )
}

export default StartContent