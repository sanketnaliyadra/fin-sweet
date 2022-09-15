import styled from "styled-components";
import { FontNormal, FontOpacity, FontTitleHeading } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const AbtTeamSection = styled.div`
    background: var(--container-bg);
`
export const AbtTeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    ${maxWidth(ScreenSize.Tablet,`padding: 50px 0`)}
    ${maxWidth(ScreenSize.Phone,`padding: 30px 0`)}
`
export const TeamTitle = styled.h2`
    ${FontNormal}
    text-align: center;
    margin-bottom: 32px;
`
export const TeamCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${maxWidth(ScreenSize.Phone,`flex-wrap: wrap; margin: 0px 18px;`)}
`
export const TeamCardWrapper = styled.div`
    display: flex;
    flex: 1 0 23%;
    max-width: 23%;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    padding: 28px 42px;
    border-radius: 6px;
    ${maxWidth(ScreenSize.Phone,`flex: 1 0 100%; max-width: 100%; padding: 18px 42px;  margin-bottom: 24px;`)}
`
export const ProfileName = styled.h6`
    ${FontTitleHeading}
    margin: 16px 0 0 0;
    white-space: nowrap;
    ${maxWidth(ScreenSize.Tablet,`font-size: 14px;`)}
`
export const ProfileRole = styled.p`
    ${FontOpacity}
    font-size: 14px;
    text-align: center;
`