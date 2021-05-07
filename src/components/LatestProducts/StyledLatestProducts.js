import styled from 'styled-components'

export const StyledDiv = styled.div`
  margin-top: 1vh;

  @media only screen and (max-width: ${props => props.theme.screen.medium}) {
    margin-top: 5vh;
}
`