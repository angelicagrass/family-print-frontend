import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import styled from 'styled-components'

const StyledBottom = styled.div`
  padding:0.3em 1.2em;
  font-size: 1rem;
  background: rgb(168,219,168);
  background: linear-gradient(344deg, rgba(168,219,168,1) 0%, rgba(131,175,155,1) 59%, rgba(100,159,131,1) 95%);
  outline: none;
  border: none;
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 2px;
  margin-top: 2vh;
`

const SocialDiv = styled.div`
  display: flex;
  column-gap: 15px;
`

const KlarnaDiv = styled.div`
  background-image: url('/img/short-white.png');
  background-repeat: no-repeat;
  background-position: center;
  z-index: 100;
  height:120px;
`

const Footer = () => {
    return (
<MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Family Print</h5>
            <p><a href="/kopvillkor">Köpvillkor &amp; Info</a></p>
            <SocialDiv>
                <i className="fab fa-facebook fa-2x darkcolor"></i>
                <i className="fab fa-instagram-square fa-2x darkcolor"></i>
                <i className="fas fa-envelope fa-2x darkcolor"></i>
            </SocialDiv>
          </MDBCol>
          <MDBCol md="6"></MDBCol>
        </MDBRow>
      </MDBContainer>

      <StyledBottom>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <KlarnaDiv />
          </MDBContainer>
        </div>
      </StyledBottom>

    </MDBFooter>
    )
}

export default Footer
