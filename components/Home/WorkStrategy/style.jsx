import styled from "styled-components";
import { maxWidth, minWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const WorkSection = styled.div`
    background: var(--container-bg);
`

export const WorkStrategyContainer = styled.div`
    display: flex;
    padding: 100px 0;
    ${maxWidth(ScreenSize.Phone,`flex-direction: column; padding: 50px 0`)}
`
export const WorkDetailContainer = styled.div`
    flex: 40%;
`
export const WorkDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 80%;
    ${maxWidth(ScreenSize.Tablet,`max-width: 90%;`)}
    ${maxWidth(ScreenSize.Phone,`align-items: center; max-width: 100%; margin-bottom: 48px`)}
`

export const WorkHeading  = styled.h1`
        color: var(--font-color);
        margin-bottom: 20px;
        font-size: 40px;
    ${maxWidth(ScreenSize.Tablet,`${minWidth(ScreenSize.Phone,`font-size: 36px`)}`)}
    ${maxWidth(ScreenSize.Phone,`font-size: 32px`)}
`
export const WorkSubHeading = styled.p`
    color: var(--font-color);
    opacity: 0.7;
    margin-bottom: 16px;
    ${maxWidth(ScreenSize.Phone,`text-align: center; font-size: 14px`)}

`
export const WorkContentWrapper = styled.div`
    display: flex;
    flex: 60%;
    flex-wrap: wrap;
`

export const WorkContentTitle = styled.h2`
    font-size: 22px;
    font-weight: 500;
    color: var(--font-color);
    margin: 8px 0;
    ${maxWidth(ScreenSize.Phone,`font-size: 18px`)}
`
export const WorkContentDetail = styled.p`
        color: var(--font-color);
        opacity: 0.7;
        font-size: 14px;
        ${maxWidth(ScreenSize.Phone,`text-align: center`)}
`

export const WorkContentInner = styled.div`
    flex: 50%;
    padding: 0 16px 20px 0;
    ${maxWidth(ScreenSize.Phone,`
        flex: 1 0 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 22px 0;
    `)}
`