import styled from 'styled-components'
import { Row, Container } from 'react-bootstrap'

export const MyContainer = styled(Container)`
  border-top: 2px solid lightgrey;
  margin-top: 10px;
  padding: 20px;
  height: fit-content;
`

export const MyRow = styled(Row)`
  text-align: center;
  vertical-align: middle;
  line-height: 70px;

  @media only screen and (max-width: ${props => props.theme.screen.medium}) {
  line-height: 50px;
}
`

export const OrderDiv = styled.div`
  position: relative;
  height: 50px;
  background-color: ${props => props.theme.colors.superlight};
  width: 90%;
  margin: 0 auto 30px auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  z-index: 100;

  @media only screen and (max-width: ${props => props.theme.screen.medium}) {
  height: 100px;
}
`

export const MyText = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const HeaderLine = styled.div`
  height: 50px;
  border-bottom: 3px #ebebeb solid;
  margin-bottom: 50px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`

export const MyImage = styled.img`
  margin-top: -125px;
`
export const PriceDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 100px;
  width: 80%;
  margin: 30px auto; 
  padding-top: 20px;

  @media only screen and (max-width: ${props => props.theme.screen.medium}) {
  flex-direction: column;
  height: 130px;
  
  align-items: center;
}
`

export const DiscountDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
  width: 80%;
  margin: 10px auto; 
`
export const RedText = styled.h4`
color: red;
`

// Component by David Heinebäck
export const StyledNumber = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 0;
  margin-left: 8px;
  width: 40px;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: linear-gradient(90deg, rgba(180,180,180,0.60) 0%, rgba(172,172,172,0.53) 43%, rgba(167,165,165,0.57) 61%);
  backdrop-filter: brightness(150%) saturate(150%) blur(5px);
  background-clip: padding-box;
  color: rgba(0, 0, 0, 0.7);
  height: 40px;
`

// Component by David Heinebäck
export const StyledCounter = styled.div`
  position: relative;
  padding: 10px;
  width: 150px;
  margin: 0 auto;

`

export const TotalDiv = styled.div`
  background: ${props => props.theme.colors.superlight};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-radius: 10px;
  height: 200px;
  width: 50%;
  margin-left: 45%;
  text-align: right;
  padding: 20px;
  padding-top: 40px;
  margin-bottom: 40px;
  font-weight: 900;

h3 {
  color: ${props => props.theme.colors.darkgrey};
}

@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  width: 300px;
  margin: auto;
  padding-top: 60px;
  
  h3 {
    font-size: 15px;
  }
}
`
export const KlarnaDiv = styled.div`
  background-image: url('https://i.postimg.cc/FH24chpT/klarnamockup.jpg');
  background-repeat: no-repeat;
  background-position: center; 
  height: 70vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: ${props => props.theme.screen.mobile}) {
    background-size: 100% 100%;

}
`
