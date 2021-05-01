import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components'
import CustomCard from './CustomCard.js'
import text from '../theme/text.js'

const MyDiv = styled.div`
  margin-top: 20vh;

@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  margin-top: 5vh;
}

@media only screen and (max-width: ${props => props.theme.screen.mobile}) {
  margin-top: 1vh;
}
`

const MyTextBox = styled.div`
  padding: 10px 10px 40px 10px;
  font-size: 16px;
  border-radius: 8px;
  min-height: 20vh;
  margin: 5px;
  font-weight: 900;

  @media only screen and (max-width: ${props => props.theme.screen.medium}) {
  padding-top: 1vh;
}

`

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