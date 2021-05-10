import styled from 'styled-components'
import{ Link } from 'react-router-dom'

export const MyWrapper = styled.div`
  max-width: 100%;
  max-height: 300px;
  background-color: white;

@media only screen and (max-width: ${props => props.theme.screen.mobile}) {
  display: none;
  font-size:1px;
}
`
export const MySmallWrapper = styled.div`
  max-width: 100%;
  max-height: 200px;
  background-color: white;

@media only screen and (min-width: ${props => props.theme.screen.mobile}) {
  display: none;
  font-size:1px;
}
`
export const MySmallDiv = styled.div`
  height: 60px;
  max-width: 100%;
  float: right;
  margin: 3vh;
  color: ${props => props.theme.colors.main};
`

export const MyDiv = styled.div`
  height: 200px;
  max-width: 100%;
  float: right;
  margin: 3vh;
  color: ${props => props.theme.colors.main};
`

export const MyLink = styled(Link)`
  color: ${props => props.theme.colors.main};
  transition: all 0.4s;

&:hover {
  color: ${props => props.theme.colors.lightmain};
}
`