import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

export const StyledLink = styled(Link)`
    text-decoration: none;
    white-space: nowrap;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  &:hover {
    color: grey;
  }
`

export const MyRow = styled(Row)`
@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  all: unset;
}
`