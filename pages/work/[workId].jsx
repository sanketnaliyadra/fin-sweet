import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from '../../components/common/Footer'
import GlobalNavbar from '../../components/common/GlobalNavbar/GlobalNavbar'
import CaseStudiesHeroSection from '../../components/Work/PortfolioDetails/CaseStudyHero'
import {caseStudiesData} from '../../data';
import AbtTheProject from '../../components/Work/PortfolioDetails/AbtTheProject'
import WorkContact from '../../components/Work/Work-Contact'

const PortfolioDetails = () => {
  const [projectIndex, setprojectIndex] = useState([])
  const router = useRouter();
  const {workId} = router.query;
  useEffect(() => {
    if(workId){
      setprojectIndex(caseStudiesData.filter((ele,i) => ele.id === parseInt(workId)))
    }
  }, [workId])
  
  console.log('user',projectIndex)
  console.log("workid",typeof workId)
  return (
    <>
      <GlobalNavbar/>
      <div className='WorkContainer'>
        {projectIndex && projectIndex.map((data,i) => {
          return (
            <CaseStudiesHeroSection key={i} {...data}/>
          )
        })}
      <AbtTheProject/>
      <WorkContact/>
      </div>
      <Footer/>
    </>
  )
}

export default PortfolioDetails