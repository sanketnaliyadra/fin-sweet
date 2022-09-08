import Image from 'next/image'
import React from 'react'
import { HeroBgImage, HeroBtnWrapper, HeroDetailInner, HeroDetailWrapper, HeroInnerContainer, HeroSectionContainer, HeroSectionHeading, HeroSubHeading, HeroViewPriceBtn, HeroViewWorkBtn } from './style'
import {CgArrowLongRight} from 'react-icons/cg'
const HeroSection = () => {
    return (
        <HeroSectionContainer>
            <div className="container">
                <HeroInnerContainer>
                    <HeroDetailWrapper>
                        <HeroDetailInner>
                            <HeroSectionHeading>Building stellar websites for early startups</HeroSectionHeading>
                            <HeroSubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</HeroSubHeading>
                            <HeroBtnWrapper>
                                <HeroViewWorkBtn>View our work</HeroViewWorkBtn>
                                <HeroViewPriceBtn>View Pricing <CgArrowLongRight/></HeroViewPriceBtn>
                            </HeroBtnWrapper>
                        </HeroDetailInner>
                    </HeroDetailWrapper>
                    <HeroBgImage>
                        <Image src='/home/header-bg.svg' width='638px' height='362px' layout='responsive' />
                    </HeroBgImage>
                </HeroInnerContainer>
            </div>
        </HeroSectionContainer>
    )
}

export default HeroSection