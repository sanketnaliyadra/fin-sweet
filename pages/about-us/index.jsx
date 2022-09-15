import React from 'react'
import AbtBenefits from '../../components/AboutUs/AbtBenefits'
import AbtMission from '../../components/AboutUs/AbtMission'
import AboutHeroSection from '../../components/AboutUs/HeroSection/AboutHeroSection'
import AbtTeam from '../../components/AboutUs/Team'
import WhoWeAre from '../../components/AboutUs/WhoWeAre'
import Footer from '../../components/common/Footer'
import GlobalNavbar from '../../components/common/GlobalNavbar/GlobalNavbar'

const AboutUs = () => {
  return (
    <>
      <GlobalNavbar/>
      <AboutHeroSection/>
      <WhoWeAre/>
      <AbtMission/>
      <AbtBenefits/>
      <AbtTeam/>
      <Footer/>
    </>
  )
}

export default AboutUs