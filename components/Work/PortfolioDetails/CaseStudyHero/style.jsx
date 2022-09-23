import styled from "styled-components";
import { FontOpacity, FontPrimaryBold } from "../../../../utils/fontStyle";
import { maxWidth } from "../../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../../utils/responsive/ScreenSize";

export const CaseStudiesHeroSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 70px 0;
    ${maxWidth(ScreenSize.Phone,`margin: 40px 0;`)}
`
export const CStudyMainTitle = styled.p`
    ${FontOpacity};
    font-weight: 500;
    ${maxWidth(ScreenSize.Phone,`text-align: center;`)}
`
export const CStudyTitle = styled.h2`
   ${FontPrimaryBold}
   max-width: 50%;
   font-size: 40px;
   margin: 12px 0;
   ${maxWidth(ScreenSize.Phone,`max-width: 100%; text-align: center;`)}
`
export const CStudyDescription = styled.p`
    ${FontOpacity};
    max-width: 70%;
    margin-bottom: 36px;
   ${maxWidth(ScreenSize.Phone,`max-width: 90%; margin: 0 auto 24px auto;`)}
`
export const ProjectMetaData = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
   ${maxWidth(ScreenSize.Phone,`flex-wrap: wrap; max-width: 90%; margin: 16px auto; row-gap: 8px;`)}
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