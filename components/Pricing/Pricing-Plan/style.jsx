import styled from "styled-components";
import { FontNormal, FontOpacity, FontPrimaryBold, FontTitleHeading } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const PricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0 0 0;
    align-items: center;
    ${maxWidth(ScreenSize.Phone,`max-width: 90%; margin: 0 auto; align-items: flex-start; padding: 40px 0 0 0;`)}
`
export const PricingTitle = styled.h2`
    font-size: 36px;
    font-weight: 600;
    color: var(--font-color);
    ${maxWidth(ScreenSize.Phone,`font-size: 32px;`)}
`
export const PricingDescription = styled.p`
    ${FontOpacity}
    max-width: 50%;
    margin: 12px 0 48px 0;
    text-align: center;
    ${maxWidth(ScreenSize.Phone,`max-width: 100%; margin: 12px 0 28px 0; text-align: start;` )}
`
export const PricePlanCardContainer = styled.div`
    display: flex;
    column-gap: 28px;
    ${maxWidth(ScreenSize.Phone,`flex-wrap: wrap; row-gap: 24px; flex-direction: column;`)}
`
export const PricingCard = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    flex: 1 0 33%;
    flex-direction: column;
    padding: 42px 38px;
    background: #F4F6FC;
    border-radius: 8px;
    &:nth-child(even){
        background: #1C1E53;
        & h6 , h4, h4 + p, div > p{
            color: #F4F6FC;
        }
        & span {
            color: var(--btn-bg);
        }
        & button {
            background: var(--btn-bg);
            color: #000;
            border: none;
        }
    ::after{
        content: '';
        position: absolute;
        display: block;
        top: -147px;
        height: 600px;
        width: 800px;
        border-radius: 50%;
        background: rgba(255,255,255,0.06);
        left: 50%;
        transform: translateX(-50%);
    }
    }
    ${maxWidth(ScreenSize.Phone,`padding: 22px 38px;` )}
`
export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`
export const PriceNum = styled.h6`
   ${FontNormal}
   margin-right: 16px;
`
export const PriceDesign = styled.span`
   font-size: 14px;
   color: #2405F2;
`
export const CardTitle = styled.h4`
    ${FontTitleHeading}
    font-size: 20px;
    `
export const CardDetail = styled.p`
    ${FontOpacity};
    min-height: 100px;
    margin: 12px 0 0 0;
    ${maxWidth(ScreenSize.Phone,`margin: 12px 0 18px 0; min-height: 0;` )}
`
export const BenefitPoint = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 210px;
    ${maxWidth(ScreenSize.Phone,`min-height: 180px;` )}
`
export const PointWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg{
        color:#97DAAD;
        margin-right: 6px;
        font-size: 28px;
    }

`
export const BenefitTitle = styled.p`
    ${FontOpacity}
`
export const PriceActionBtn = styled.button`
   background-color: var(--font-color);
   color: var(--white);
   font-family: 'Poppins', sans-serif;
   padding: 12px 48px;
    display: block;
    margin: 0 auto;
    border-radius: 28px;
    margin-top: 18px;
`