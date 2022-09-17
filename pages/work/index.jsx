import React from 'react'
import Footer from '../../components/common/Footer'
import GlobalNavbar from '../../components/common/GlobalNavbar/GlobalNavbar'
import PortfolioNavigationContainer from '../../components/Work/PortfolioNav'
import WorkHeader from '../../components/Work/WorkHeader'

const WorkPortfolio = () => {
  return (
    <>
      <GlobalNavbar/>
      <WorkHeader/> 
      <PortfolioNavigationContainer/>
      <Footer/>
    </>
    )
}

export default WorkPortfolio