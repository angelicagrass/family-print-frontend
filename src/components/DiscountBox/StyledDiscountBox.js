import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`

export const DiscountDiv = styled.div`
position: absolute;
z-index: 100000000;
border: 3px solid transparent;
width: 400px;
height: 250px;
margin-left: auto;
margin-right: auto;
background-color: rgba(255,255,255,0.1);
backdrop-filter: blur(10px);
background-clip: padding-box;
box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
border-radius: 4px;
padding: 30px 20px;
top: -400px;
animation: drop 1s ease forwards;

@-moz-document url-prefix() {
  background-color: rgba(255,255,255,0.1);
}

@media only screen and (max-width: ${props => props.theme.screen.medium}) {
  width: 300px;
}

@keyframes drop {
0%{}
70%{transform: translateY(900px)}
100%{transform: translateY(850px)}
}
`