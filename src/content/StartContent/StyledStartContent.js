import styled from 'styled-components'

export const MyDiv = styled.div`
  margin-top: 20vh;

@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  margin-top: 5vh;
}

@media only screen and (max-width: ${props => props.theme.screen.mobile}) {
  margin-top: 1vh;
}
`

export const MyTextBox = styled.div`
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