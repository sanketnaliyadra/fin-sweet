import styled from "styled-components";
import { FontNormal, FontOpacity } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const AbtMissionSection = styled.div`
    background: #EEF4FA;
`
export const AbtMissionMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    ${maxWidth(ScreenSize.Tablet,`padding: 60px 0;`)}
    ${maxWidth(ScreenSize.Phone,`padding: 40px 0;`)}
`
export const MissionTitle = styled.p`
    font-size: 16px;
    color: var(--font-color);
    font-weight: 600;
`
export const MissionHeading = styled.h2`
    ${FontNormal}
    ${maxWidth(ScreenSize.TabletLandscape,` margin: 8px 0; font-size: 28px`)}
    ${maxWidth(ScreenSize.Phone,`font-size: 20px; margin: 6px 0;`)}
`
export const MissionSubHeading = styled.p`
    ${FontOpacity}
    ${maxWidth(ScreenSize.Tablet,`font-size: 14px;`)}
`
export const MissionCardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    &:nth-child(even){
        flex-direction: row-reverse;
        margin-top: 60px;
    }
    ${maxWidth(ScreenSize.Phone,` flex-direction: column-reverse;
     &:nth-child(even){
        flex-direction: column-reverse;
        margin-top: 20px;
    }
    `)}
`
export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 50%;
    max-width: 50%;
    padding: 44px 28px;
    justify-content: space-between;
    ${maxWidth(ScreenSize.Tablet,`padding: 18px 24px`)}
    ${maxWidth(ScreenSize.Phone,`max-width: 100%;`)}
`
export const MissionImgWrapper = styled.div`
    flex: 1 0 40%;
    max-width: 40%;
    ${maxWidth(ScreenSize.Phone,`max-width: 100%;`)}
`