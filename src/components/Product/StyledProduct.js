import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const MyCard = styled(Card)`
transition: all 0.6s;

&:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
}
`
