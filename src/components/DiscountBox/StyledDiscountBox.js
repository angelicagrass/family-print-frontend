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
border: 2px solid ${props => props.theme.colors.main};
width: 400px;
height: 250px;
margin-left: auto;
margin-right: auto;
background-color: beige;
border-radius: 4px;
padding: 30px 20px;
top: -400px;
animation: drop 1s ease forwards;

@keyframes drop {
0%{}
70%{transform: translateY(900px)}
100%{transform: translateY(850px)}
}
`