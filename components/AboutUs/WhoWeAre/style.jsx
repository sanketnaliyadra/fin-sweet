import styled from "styled-components";
import { FontNormal, FontOpacity, FontTitleHeading } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const WhoWeAreContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const AbtDescriptionSection = styled.div`
    display: flex;
    justify-content: space-between;
    background: aliceblue;
    padding: 70px 0;
   ${maxWidth(ScreenSize.Tablet,`padding: 50px 0;`)}
   ${maxWidth(ScreenSize.Phone,`flex-direction: column; padding: 40px 0;`)}
`
export const DesLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 50%;
    /* max-width: 50%; */
    padding: 0 50px;
   ${maxWidth(ScreenSize.Tablet,`justify-content: end`)};
   ${maxWidth(ScreenSize.Phone,`padding: 0 24px;`)};
`
export const WHeading = styled.p`
    ${FontTitleHeading}
`
export const WMainHeading = styled.h2`
    ${FontNormal}
    margin: 12px 0;
   ${maxWidth(ScreenSize.Tablet,`font-size: 28px;`)}
   ${maxWidth(ScreenSize.Phone,`font-size: 24px; margin: 8px 0;`)}
`
export const WSubHeading = styled.div`
    ${FontOpacity}
   ${maxWidth(ScreenSize.Tablet,`font-size: 14px;`)}
`
export const DesRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 50%;
    /* max-width: 50%; */
    padding: 0 50px;
    justify-content: flex-end;
   ${maxWidth(ScreenSize.Phone,`font-size: 24px; padding: 12px 24px;`)}
`
export const AbtBgImgWrapper = styled.div`
   ${maxWidth(ScreenSize.Phone,`margin-top: 18px`)}
`
export const AboutProcessContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    ${maxWidth(ScreenSize.Tablet,`padding: 50px 0;`)};
    ${maxWidth(ScreenSize.Phone,`padding: 30px 0;`)}
`
export const ProcessHeading = styled.h2`
    ${FontNormal}
    text-align: center;
    margin-bottom: 40px;
    ${maxWidth(ScreenSize.Phone,`font-size: 24px; margin-bottom: 28px;`)}
`
export const ProcessStepContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${maxWidth(ScreenSize.Phone,`flex-wrap: wrap; row-gap: 12px`)}
`
export const AbtProcessCard = styled.div`
    display: flex;
    flex: 1 0 23%;
    max-width: 23%;
    flex-direction: column;
    ${maxWidth(ScreenSize.Phone,`flex: 1 0 100%; max-width: 100%; padding: 0 24px; margin-bottom: 18px;`)}
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
    ${maxWidth(ScreenSize.Phone,`margin: 12px 0`)}
`
export const ProcessDes = styled.p`
    ${FontOpacity};
   ${maxWidth(ScreenSize.Tablet,`font-size: 14px;`)}
`
