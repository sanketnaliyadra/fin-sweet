import styled from "styled-components";
import { FontNormal, FontOpacity, FontTitleHeading } from "../../../utils/fontStyle";

export const WhoWeAreContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const AbtDescriptionSection = styled.div`
    display: flex;
    justify-content: space-between;
    background: aliceblue;
    padding: 70px 0;
`
export const DesLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 50%;
    /* max-width: 50%; */
    padding: 0 50px;
`
export const WHeading = styled.p`
    ${FontTitleHeading}
`
export const WMainHeading = styled.h2`
    ${FontNormal}
    margin: 12px 0;
`
export const WSubHeading = styled.div`
    ${FontOpacity}
`
export const DesRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 50%;
    /* max-width: 50%; */
    padding: 0 50px;
    justify-content: space-between;
`
export const AbtBgImgWrapper = styled.div`
    
`
export const AboutProcessContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
`
export const ProcessHeading = styled.h2`
    ${FontNormal}
    text-align: center;
    margin-bottom: 40px;
`
export const ProcessStepContainer = styled.div`
    display: flex;
`
export const AbtProcessCard = styled.div`
    display: flex;
    flex-direction: column;
`
export const AbtCircle = styled.div`
    ::after{
        content: '';
        display: block;
        border-radius: 50%;
        background: #2405F2;
        height: 14px;
        width: 14px;
    }
    ::before{
        content: '';
        display: block;
        position: relative;
        border: 1px dashed #2405F2;
        top: 8px;
        max-width: 60%;
        right: -40px;
        /* left: 0; */
        opacity: 40%;
    }
`
export const ProcessTitle = styled.h4`
    margin: 22px 0 12px 0;
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color);
`
export const ProcessDes = styled.p`
    ${FontOpacity};
`
