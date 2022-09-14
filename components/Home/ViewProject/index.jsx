import Image from 'next/image'
import React from 'react'
import CustomArrBtn from '../../common/CustomArrowBtn'
import { ProjectImageInnerWrapper, ProjectImageWrapper, ProjectTitleHeading, ProjectTitleWrapper, ViewProjectSection } from './style'

const ViewProject = () => {
  return (
    <div className="container">
      <ViewProjectSection>
          <ProjectTitleWrapper>
            <ProjectTitleHeading>View our projects</ProjectTitleHeading>
            <CustomArrBtn title='View More' color='#282938'/>
          </ProjectTitleWrapper>
          <ProjectImageWrapper>
            <Image src='/home/card1.png' width='843px' height='600px'/>
            <ProjectImageInnerWrapper>
            <Image src='/home/card2.png' width='405px' height='284px'/>
            <Image src='/home/card3.png' width='405px' height='284px'/>
            </ProjectImageInnerWrapper>
          </ProjectImageWrapper>
      </ViewProjectSection>
    </div>
  )
}

export default ViewProject