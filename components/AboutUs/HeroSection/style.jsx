import styled from "styled-components";
import { FontOpacity, FontPrimaryBold, FontTitleHeading } from "../../../utils/fontStyle";

export const AboutHeroSectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 90px 0;
`
export const AboutHeadDetailWrapper = styled.div`
    display: flex;
    flex: 1 0 40%;
    max-width: 40%;
    flex-direction: column;
`

export const AboutusHeading = styled.h6`
   ${FontTitleHeading}
`
export const AboutMainHeading = styled.h2`
    ${FontPrimaryBold}
   
`
export const AboutSubHeading = styled.p`
    ${FontOpacity}
`
export const AboutHeroImgWrapper = styled.div`
    flex: 1 0 40%;
    max-width: 40%
`