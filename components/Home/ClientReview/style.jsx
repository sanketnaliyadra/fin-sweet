import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const ClientReviewSection = styled.div`
    background: rgb(244 246 252 / 50%);
`
export const ClientReviewContainer = styled.div`
    display: flex;
    padding: 90px 0;
    ${maxWidth(ScreenSize.Tablet,`padding: 70px 0`)}
    ${maxWidth(ScreenSize.Phone,`padding: 50px 0`)}
`
export const ReviewHeadWrapper = styled.div`
    display: flex;
    flex: 1 0 40%;
    flex-direction: column;
`
export const ReviewTitle = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: var(--font-color);
    ${maxWidth(ScreenSize.Phone,`font-size: 24px; font-weight: 500; text-align: center; margin-bottom: 12px`)}
`
export const ReviewTitleDetail = styled.p`
    font-size: 14px;
    color: var(--font-color);
    opacity: 0.7;
    ${maxWidth(ScreenSize.Phone,`text-align: center`)}
`
export const ClientReviewSlider = styled.div`
    flex: 1 0 60%;
`
