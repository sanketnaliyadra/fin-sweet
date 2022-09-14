import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { minWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const HeroSectionContainer = styled.div`
    display: flex;
    width: 100%;
    background: var(--finPrimary);
`
export const HeroInnerContainer = styled.div`
    display: flex;
    padding: 110px 0;
    ${maxWidth(ScreenSize.TabletLandscape, `padding: 70px 0`)}
    ${maxWidth(ScreenSize.Phone, `flex-direction: column; padding: 50px 0;`)}
`
export const HeroDetailWrapper = styled.div`
    display: flex;
    flex: 1;
   
`
export const HeroDetailInner = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    max-width: 80%;
    ${maxWidth(ScreenSize.Tablet, `max-width: 90%`)}
    ${maxWidth(ScreenSize.Phone, `margin-bottom: 48px; padding-left: 24px; max-width: 100%;`)}
`;

export const HeroSectionHeading = styled.h2`
    font-size: 40px;
    font-weight: 600;
    color: var(--white);
    ${maxWidth(ScreenSize.Tablet, `font-size: 32px; font-weight: 500; margin-bottom: 12px;`)}
`

export const HeroSubHeading = styled.p`
    font-size: 14px;
    color: var(--white);
`
export const HeroBtnWrapper = styled.div`
    display: flex;
    margin-top: 12px;
    ${maxWidth(ScreenSize.Tablet, `margin-top: 22px`)}
`

export const HeroViewWorkBtn = styled.button`
    background: var(--btn-bg);
    padding: 14px 42px;
    border: none;
    border-radius: 22px;
    margin-right: 32px;
    font-family: 'Poppins';
    ${maxWidth(
    ScreenSize.TabletLandscape,
    `
      ${minWidth(ScreenSize.TabletLarge, `padding: 12px 24px;`)}
    `
)};
     ${maxWidth(
    ScreenSize.TabletLarge,
    `
      ${minWidth(ScreenSize.Phone, `padding: 8px 18px; margin-right: 24px`)}
    `
)};
    
`


export const HeroViewPriceBtn = styled.button`
color: var(--white);
    border: none;
    background: transparent;
    font-family: 'Poppins';
    svg {
        color: var(--white);
        vertical-align: middle;
        margin-left: 8px;
        font-size: 18px;
    }
`
export const HeroBgImage = styled.div`
    flex: 1;
`