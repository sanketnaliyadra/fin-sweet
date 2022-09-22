import styled from "styled-components";
import { FontOpacity, FontPrimaryBold } from "../../../../utils/fontStyle";

export const CaseStudiesHeroSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px 0;
`
export const CStudyMainTitle = styled.p`
    ${FontOpacity};
    font-weight: 500;
`
export const CStudyTitle = styled.h2`
   ${FontPrimaryBold}
   max-width: 50%;
   font-size: 40px;
   margin: 12px 0;
`
export const CStudyDescription = styled.p`
    ${FontOpacity};
    max-width: 70%;
    margin-bottom: 36px;
`
export const ProjectMetaData = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
`
export const ClientDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const ClientTitle = styled.p`
     ${FontOpacity};

`
export const ClientSocial = styled.h6`
    color: var(--font-color);
    font-size: 20px;
    font-weight: 500;
`

export const ServiceDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const ServiceTitle = styled.p`
    ${FontOpacity}
`
export const ServiceName = styled.h6`
    color: var(--font-color);
    font-size: 20px;
    font-weight: 500;
`
export const  DeliverableDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const DeliverableTitle = styled.p`
    ${FontOpacity}
`
export const DeliverableName = styled.h6`
    color: var(--font-color);
    font-size: 20px;
    font-weight: 500;
`