import styled from 'styled-components'

export const MyText = styled.h1`
  color: white;
  margin: 0;
  font-weight: 900;
`
export const MyLastText = styled.h1`
  color: white;
  margin: 0;
  font-weight: 900;
  border-bottom: 4px solid white;
  padding-bottom: 10px;
`

export const MyImage = styled(Image)`
  margin-top: 10px;
  margin-bottom: 10px;

@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  margin-top: 0px;
}
`
