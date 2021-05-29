import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import { StyledBottom, SocialDiv, KlarnaDiv } from './StyledFooter.js'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Family Print</h5>
            <p><Link to="/kopvillkor">Köpvillkor &amp; Info</Link></p>
            <SocialDiv> <a href="https://www.facebook.com"><i className="fab fa-facebook fa-2x darkcolor"></i></a> <i className="fab fa-instagram-square fa-2x darkcolor"></i> <i className="fas fa-envelope fa-2x darkcolor"></i> </SocialDiv>
          </MDBCol>
          <MDBCol md="6"></MDBCol>
        </MDBRow>
      </MDBContainer>
      <StyledBottom>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <KlarnaDiv /> </MDBContainer>
        </div>
      </StyledBottom>
    </MDBFooter>
    )
}

export default Footer
