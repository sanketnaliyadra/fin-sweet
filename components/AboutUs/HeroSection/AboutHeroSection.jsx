import Image from 'next/image'
import React from 'react'
import { AboutHeadDetailWrapper, AboutHeroImgWrapper, AboutHeroSectionContainer, AboutMainHeading, AboutSubHeading, AboutusHeading } from './style'

const AboutHeroSection = () => {
  return (
    <div className="container">
      <AboutHeroSectionContainer>
        <AboutHeadDetailWrapper>
          <AboutusHeading>About us</AboutusHeading>
          <AboutMainHeading>Our designs solve problems</AboutMainHeading>
          <AboutSubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</AboutSubHeading>
        </AboutHeadDetailWrapper>
        <AboutHeroImgWrapper>
          <Image src='/AboutUs/aboutmain.png' width={547} height={336} alt='img'/>
        </AboutHeroImgWrapper>
      </AboutHeroSectionContainer>
    </div>
  )
}

export default AboutHeroSection