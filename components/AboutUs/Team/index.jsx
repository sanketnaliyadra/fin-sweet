import Image from 'next/image'
import React from 'react'
import { teamProfileData } from '../../../data'
import { AbtTeamContainer, AbtTeamSection, ProfileName, ProfileRole, TeamCardContainer, TeamCardWrapper, TeamTitle } from './style'

const AbtTeam = () => {
  return (
    <AbtTeamSection>
        <div className="container">
            <AbtTeamContainer>
                <TeamTitle>Meet our team</TeamTitle>
                <TeamCardContainer>
                    {teamProfileData && teamProfileData.map((ele,i) => {
                        return (
                            <TeamCardWrapper>
                                <Image src={ele.img} width={150} height={150}/> 
                                <ProfileName>{ele.name}</ProfileName>
                                <ProfileRole>{ele.role}</ProfileRole>
                            </TeamCardWrapper>
                        )
                    })}
                </TeamCardContainer>
            </AbtTeamContainer>
        </div>
    </AbtTeamSection>
  )
}

export default AbtTeam