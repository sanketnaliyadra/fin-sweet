import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomArrBtn from '../../common/CustomArrowBtn'
import { ProjectImageInnerWrapper, ProjectImageWrapper, ProjectTitleHeading, ProjectTitleWrapper, ViewProjectSection } from './style'

const ViewProject = () => {
  return (
    <div className="container">
      <ViewProjectSection>
          <ProjectTitleWrapper>
            <ProjectTitleHeading>View our projects</ProjectTitleHeading>
            <Link href='/work'><a><CustomArrBtn title='View More' color='#282938'/></a></Link>
          </ProjectTitleWrapper>
          <ProjectImageWrapper>
            <Image src='/home/card1.png' width='843px' height='600px' alt='img'/>
            <ProjectImageInnerWrapper>
            <Image src='/home/card2.png' width='405px' height='284px' alt='img'/>
            <Image src='/home/card3.png' width='405px' height='284px' alt='img'/>
            </ProjectImageInnerWrapper>
          </ProjectImageWrapper>
      </ViewProjectSection>
    </div>
  )
}

export default ViewProject