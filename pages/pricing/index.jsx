import React from 'react'
import GlobalNavbar from '../../components/common/GlobalNavbar/GlobalNavbar'
import PricingPlanning from '../../components/Pricing/Pricing-Plan'
import Footer from '../../components/common/Footer'
import FAQs from '../../components/Home/FAQs'

const Pricing = () => {
  return (
    <>
    <GlobalNavbar/>
    <PricingPlanning/>
    <FAQs/>
    <Footer/>
    </>
  )
}

export default Pricing