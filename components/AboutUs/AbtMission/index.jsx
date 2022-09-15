import Image from 'next/image'
import React from 'react'
import { processMissionData } from '../../../data';
import { AbtMissionMainContainer, AbtMissionSection, DetailWrapper, MissionCardWrapper, MissionHeading, MissionImgWrapper, MissionSubHeading, MissionTitle } from './style'

const AbtMission = () => {
    return (
        <AbtMissionSection>
            <div className="container">
                <AbtMissionMainContainer>
                    {processMissionData && processMissionData.map((ele, i) => {
                        return (
                            <>
                                <MissionCardWrapper>
                                    <DetailWrapper>
                                        <MissionTitle>{ele.title}</MissionTitle>
                                        <MissionHeading>{ele.heading}</MissionHeading>
                                        <MissionSubHeading>{ele.subHeading}</MissionSubHeading>
                                    </DetailWrapper>
                                    <MissionImgWrapper>
                                        <Image src={ele.img} width={515} height={336} />
                                    </MissionImgWrapper>
                                </MissionCardWrapper>
                            </>
                        )
                    })}
                </AbtMissionMainContainer>
            </div>
        </AbtMissionSection>
    )
}

export default AbtMission