import Image from 'next/image'
import React from 'react'
import { FHeroSection, HeroBgImage, HeroBtnWrapper, HeroDetailInner, HeroDetailWrapper, HeroInnerContainer, HeroSectionHeading, HeroSubHeading, HeroViewWorkBtn } from './style'

const FeatureHeroSection = () => {
    return (
        <FHeroSection>
            <div className='container'>
            <HeroInnerContainer>
                    <HeroDetailWrapper>
                        <HeroDetailInner>
                            <HeroSectionHeading>All the features you need</HeroSectionHeading>
                            <HeroSubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</HeroSubHeading>
                            <HeroBtnWrapper>
                                <HeroViewWorkBtn>View Pricing</HeroViewWorkBtn>
                            </HeroBtnWrapper>
                        </HeroDetailInner>
                    </HeroDetailWrapper>
                    <HeroBgImage>
                        <Image src='/features/feature-bg.svg' width={638} height={409} layout='responsive' />
                    </HeroBgImage>
                </HeroInnerContainer>
            </div>
        </FHeroSection>
    )
}

export default FeatureHeroSection