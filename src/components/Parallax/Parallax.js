import { Parallax, Background } from 'react-parallax';
import React from 'react'
import { MyWrapper, MySmallWrapper, MySmallDiv, MyDiv, MyLink } from './StyledParallax.js'
import { Link } from 'react-router-dom'
import CartCounter from '../CartCounter/CartCounter.js'

const MyParallax = ({ children }) => {
    return (
    <>
        <MyWrapper>
            <Parallax blur={{ min: -15, max: 50 }} strength={600}>
                <Background className="custom-bg"> <img src="/img/paratest2.png" alt="fill murray" /> </Background>
                <CartCounter></CartCounter>
                <MyDiv>
                    <MyLink to='/kassa'> 
                    
                    <i className="fas fa-shopping-bag fa-3x"></i> 
                    </MyLink>
                </MyDiv>
            </Parallax>
        </MyWrapper>
        <MySmallWrapper>
            <Parallax blur={{ min: -15, max: 50 }} strength={800}>
                <Background href='/' className="custom-bg"> <img src="/img/mobilelogoXS.png" alt="fill murray" /> </Background>
                <MySmallDiv>
                    <MyLink to='/kassa'> <i className="fas fa-shopping-bag fa-3x"></i> </MyLink>
                </MySmallDiv>
            </Parallax>
        </MySmallWrapper>
    </>
    )
}

export default MyParallax