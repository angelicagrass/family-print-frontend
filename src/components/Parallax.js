import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components'
import React from 'react'

const MyDiv = styled.div`
height: 200px;
max-width: 100%;
float: right;
margin: 3vh;
color: ${props => props.theme.colors.main};

`

const MyParallax = () => {
    return (
        <>
        <Parallax 
            blur={{ min: -15, max: 50 }} 
            strength={600}>
            <Background className="custom-bg">
                <img src="/img/paratest2.png" alt="fill murray" />
             </Background>
            <MyDiv>
            <i class="fas fa-shopping-bag fa-3x"></i>
            </MyDiv>
        </Parallax>
        </>
    )
}

export default MyParallax