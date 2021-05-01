import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components'
import React from 'react'
import{ Link } from 'react-router-dom'

const MyWrapper = styled.div`
max-width: 100%;
max-height: 300px;
background-color: white;
`

const MyDiv = styled.div`
height: 200px;
max-width: 100%;

float: right;
margin: 3vh;
color: ${props => props.theme.colors.main};
`

const MyLink = styled(Link)`
color: ${props => props.theme.colors.main};
transition: all 0.4s;

&:hover {
color: ${props => props.theme.colors.lightmain};
}
`


const MyParallax = () => {
    return (
        <>
        <MyWrapper>
            <Parallax
                blur={{ min: -15, max: 50 }} 
                strength={600}>           
                <Background href='/' className="custom-bg">
                    <img src="/img/paratest2.png" alt="fill murray" />
                </Background>
                <MyDiv>
                    <MyLink to ='/kassa'>
                        <i className="fas fa-shopping-bag fa-3x"></i>
                    </MyLink>
                </MyDiv>
            </Parallax>
        </MyWrapper>
        </>
    )
}

export default MyParallax