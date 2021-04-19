import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components'
import CustomCard from './CustomCard.js'
import text from '../theme/text.js'

const MyDiv = styled.div`
margin-top: 20vh;
`

const MyTextBox = styled.div`
  padding: 50px 10px;
  font-size: 16px;
  border-radius: 8px;
  min-height: 20vh;
  margin: 0;
  font-weight: 900;
`

const StartContent = () => {
  return (
    <MyDiv>
      <Container>
        <Row xs={1} md={2} >
          <Col md={8}>
            <MyTextBox>{text.presentation}</MyTextBox>
          </Col>
          <Col md={4}>
            <CustomCard text={text.enviroment} />
          </Col>
        </Row>
      </Container>
    </MyDiv>
  )
}

export default StartContent