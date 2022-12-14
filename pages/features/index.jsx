import React from 'react'
import AbtBenefits from '../../components/AboutUs/AbtBenefits'
import AbtMission from '../../components/AboutUs/AbtMission'
import Footer from '../../components/common/Footer'
import GlobalNavbar from '../../components/common/GlobalNavbar/GlobalNavbar'
import FeatureHeroSection from '../../components/Features/HeroSection'
import FAQs from '../../components/Home/FAQs'

const Features = () => {
    return (
        <>
        <GlobalNavbar/>
        <FeatureHeroSection/>
        <AbtBenefits/>
        <AbtMission/>
        <FAQs/>
        <Footer/>
        </>
    )
}

export default Features