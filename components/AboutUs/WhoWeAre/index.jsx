import Image from 'next/image'
import React from 'react'
import {AboutProcessData} from '../../../data';
import { AboutProcessContainer, AbtBgImgWrapper, AbtCircle, AbtDescriptionSection, AbtProcessCard, DesLeftContainer, DesRightContainer, ProcessDes, ProcessHeading, ProcessStepContainer, ProcessTitle, WHeading, WhoWeAreContainer, WMainHeading, WSubHeading } from './style'

const WhoWeAre = () => {
    return (
        <div className="container">
            <WhoWeAreContainer>
                <AbtDescriptionSection>
                    <DesLeftContainer>
                        <WHeading>Who we are</WHeading>
                        <WMainHeading>Goal focussed</WMainHeading>
                        <WSubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</WSubHeading>
                    </DesLeftContainer>
                    <DesRightContainer>
                        <WMainHeading>Continuous improvement</WMainHeading>
                        <WSubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</WSubHeading>
                    </DesRightContainer>
                </AbtDescriptionSection>
                <AbtBgImgWrapper>
                    <Image src='/AboutUs/about-bg.png' width={1280} height={340} />
                </AbtBgImgWrapper>
                <AboutProcessContainer>
                    <ProcessHeading>The process we follow</ProcessHeading>
                    <ProcessStepContainer>
                        {AboutProcessData && AboutProcessData.map((ele,i) => {
                            return (
                                <AbtProcessCard key={ele.id}>
                                    <AbtCircle></AbtCircle>
                                    <ProcessTitle>{ele.title}</ProcessTitle>
                                    <ProcessDes>{ele.Description}</ProcessDes>
                                </AbtProcessCard>
                            )
                        } )}
                    </ProcessStepContainer>
                </AboutProcessContainer>
            </WhoWeAreContainer>
        </div>
    )
}

export default WhoWeAre