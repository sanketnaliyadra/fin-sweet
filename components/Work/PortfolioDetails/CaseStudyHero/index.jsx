import Image from 'next/image'
import React from 'react'
import { caseStudiesData } from '../../../../data';
import { CaseStudiesHeroSectionContainer, ClientDetailsWrapper, ClientSocial, ClientTitle, CStudyDescription, CStudyMainTitle, CStudyTitle, DeliverableDetailsWrapper, DeliverableName, DeliverableTitle, ProjectMetaData, ServiceDetailsWrapper, ServiceName, ServiceTitle } from './style';

const CaseStudiesHeroSection = ({mainTitle,title,description,url,service,deliverable}) => {
    return (
            <>
                <CaseStudiesHeroSectionContainer>
                    <CStudyMainTitle>{mainTitle}</CStudyMainTitle>
                    <CStudyTitle>{title}</CStudyTitle>
                    <CStudyDescription>{description}</CStudyDescription>
                    <Image src={url} height={641} width={1063} />
                    <ProjectMetaData>
                        <ClientDetailsWrapper>
                            <ClientTitle>Client</ClientTitle>
                            <ClientSocial>Facebook.com</ClientSocial>
                        </ClientDetailsWrapper>
                        <ServiceDetailsWrapper>
                            <ServiceTitle>Service</ServiceTitle>
                            <ServiceName>{service}</ServiceName>
                        </ServiceDetailsWrapper>
                        <DeliverableDetailsWrapper>
                            <DeliverableTitle>Deliverable</DeliverableTitle>
                            <DeliverableName>{deliverable}</DeliverableName>
                        </DeliverableDetailsWrapper>
                    </ProjectMetaData>
                    <hr />
                </CaseStudiesHeroSectionContainer>
            </>
    )
}

export default CaseStudiesHeroSection