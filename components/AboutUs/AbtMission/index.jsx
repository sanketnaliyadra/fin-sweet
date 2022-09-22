import Image from 'next/image'
import React from 'react'
import { featureCardData } from '../../../data';
import { AbtMissionMainContainer, AbtMissionSection, DetailWrapper, MissionCardWrapper, MissionHeading, MissionImgWrapper, MissionSubHeading, MissionTitle } from './style'

const AbtMission = () => {
    return (
        <AbtMissionSection>
            <div className="container">
                <AbtMissionMainContainer>
                    {featureCardData && featureCardData.map((ele, i) => {
                        return (
                                <MissionCardWrapper key={i}>
                                    <DetailWrapper>
                                        <MissionTitle>{ele.title}</MissionTitle>
                                        <MissionHeading>{ele.heading}</MissionHeading>
                                        <MissionSubHeading>{ele.subHeading}</MissionSubHeading>
                                    </DetailWrapper>
                                    <MissionImgWrapper>
                                        <Image src={ele.img} width={515} height={336} alt='img'/>
                                    </MissionImgWrapper>
                                </MissionCardWrapper>
                        )
                    })}
                </AbtMissionMainContainer>
            </div>
        </AbtMissionSection>
    )
}

export default AbtMission