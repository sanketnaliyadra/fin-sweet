import styled from "styled-components";
import { FontNormal, FontOpacity, FontPrimaryBold, FontTitleHeading } from "../../../utils/fontStyle";

export const PricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0 0 0;
    align-items: center;
`
export const PricingTitle = styled.h2`
    font-size: 36px;
    font-weight: 600;
    color: var(--font-color);
`
export const PricingDescription = styled.p`
    ${FontOpacity}
    max-width: 50%;
    margin: 12px 0 48px 0;
    text-align: center;
`
export const PricePlanCardContainer = styled.div`
    display: flex;
    column-gap: 28px;
`
export const PricingCard = styled.div`
    display: flex;
    flex: 1 0 33%;
    flex-direction: column;
    padding: 42px 38px;
    background: #F4F6FC;
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
export const PriceDesign = styled.p`
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
`
export const BenefitPoint = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 210px;
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