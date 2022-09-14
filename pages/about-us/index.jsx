import React from 'react'
import AboutHeroSection from '../../components/AboutUs/HeroSection/AboutHeroSection'
import WhoWeAre from '../../components/AboutUs/WhoWeAre'
import GlobalNavbar from '../../components/common/GlobalNavbar/GlobalNavbar'

const AboutUs = () => {
  return (
    <>
      <GlobalNavbar/>
      <AboutHeroSection/>
      <WhoWeAre/>
    </>
  )
}

export default AboutUs