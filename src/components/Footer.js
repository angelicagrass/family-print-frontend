import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import styled from 'styled-components'

const StyledBottom = styled.div`
padding:0.3em 1.2em;
font-size: 1rem;
background-color: ${props => props.theme.colors.dark};
outline: none;
border: none;
color: white;
border-radius: 2em;
`

const SocialDiv = styled.div`
  display: flex;
  column-gap: 20px;
  /* justify-content: space-between; */





`



const Footer = () => {
    return (
<MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Family Print</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <SocialDiv>
                <i className="fab fa-facebook fa-3x darkcolor"></i>
                <i class="fab fa-instagram-square fa-3x darkcolor"></i>
                <i class="fas fa-envelope fa-3x darkcolor"></i>
            </SocialDiv>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: FamilyPrint.se 
        </MDBContainer>
      </div>
    </MDBFooter>
    )
}

export default Footer
