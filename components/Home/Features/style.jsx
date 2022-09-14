import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const FeatureSection = styled.div`
    background: var(--container-bg);
`
export const FeatureContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 80px 0;
    ${maxWidth(ScreenSize.Phone,`padding: 40px 0;
    br {
        display: none;
    }
    `)}
`
export const FeatureHeading = styled.h4`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: var(--font-color);
`
export const FeatureSubHeading = styled.h2`
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    color: var(--font-color);
    margin-bottom: 24px;
    ${maxWidth(ScreenSize.Tablet,`font-size: 32px`)}
    ${maxWidth(ScreenSize.Phone,`font-size: 24px; font-weight: 500`)}
`
export const FeatureSubSectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    flex: 1 0 33%;
    border-radius: 8px;
    ${maxWidth(ScreenSize.Tablet,`flex: 1 0 50%;`)}
    ${maxWidth(ScreenSize.Phone,`padding: 8px 10px; flex: 1 0 100%;`)}
`
export const FeatureCardInner = styled.div`
    background: var(--white);
    padding: 28px;
    border-radius: 6px
`

export const FeatureCardTitle = styled.h3`
    margin: 12px 0;
    ${maxWidth(ScreenSize.Phone,`font-weight: 500; margin: 8px 0`)}

`

export const FeatureCardDetail = styled.p`
    ${maxWidth(ScreenSize.Phone,`font-size: 14px`)}
`