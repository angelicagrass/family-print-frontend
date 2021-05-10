import styled from 'styled-components'

export const GradientDiv = styled.div`
  width: auto;
  height: 1vh;
  background: rgb(168,219,168);
  background: linear-gradient(37deg, rgba(168,219,168,1) 17%, rgba(131,175,155,1) 49%, rgba(100,159,131,1) 95%);
`

export const MyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000000;
`