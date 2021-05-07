import React from 'react'
import styled from 'styled-components'

export const StyledBottom = styled.div`
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

export const SocialDiv = styled.div`
  display: flex;
  column-gap: 15px;
`

export const KlarnaDiv = styled.div`
  background-image: url('/img/short-white.png');
  background-repeat: no-repeat;
  background-position: center;
  z-index: 100;
  height:120px;
`