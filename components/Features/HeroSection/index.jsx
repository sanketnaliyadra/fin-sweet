import Image from 'next/image'
import Link from 'next/link'
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
                                <Link href='/pricing'><a><HeroViewWorkBtn>View Pricing</HeroViewWorkBtn></a></Link>
                            </HeroBtnWrapper>
                        </HeroDetailInner>
                    </HeroDetailWrapper>
                    <HeroBgImage>
                        <Image src='/Features/featurebg.svg' width={638} alt='img' height={409} layout='responsive' />
                    </HeroBgImage>
                </HeroInnerContainer>
            </div>
        </FHeroSection>
    )
}

export default FeatureHeroSection