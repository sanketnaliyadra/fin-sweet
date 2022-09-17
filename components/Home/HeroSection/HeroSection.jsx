import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomArrBtn from '../../common/CustomArrowBtn'
import { HeroBgImage, HeroBtnWrapper, HeroDetailInner, HeroDetailWrapper, HeroInnerContainer, HeroSectionContainer, HeroSectionHeading, HeroSubHeading, HeroViewPriceBtn, HeroViewWorkBtn } from './style'

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
                                <Link href="/work"><a><HeroViewWorkBtn >View our work</HeroViewWorkBtn></a></Link>
                                <CustomArrBtn title='View Pricing' color='#ffffff' />
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