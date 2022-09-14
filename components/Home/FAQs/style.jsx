import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const FAQsSection = styled.div`
    display: flex;
    padding: 90px 0;
    ${maxWidth(ScreenSize.Tablet,`padding: 70px 0;`)}
    ${maxWidth(ScreenSize.Phone,`padding: 50px 0; flex-direction: column`)}
`
export const FAQsTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const FAQsInner = styled.div`
    padding-top: 18px;
    max-width: 70%;
    ${maxWidth(ScreenSize.Phone,`margin-bottom: 16px; max-width: 100%; padding-top: 0;
    button{
        margin: 0 auto; display: block;
    }`)}
`
export const FAQsTitle = styled.h2`
    font-size: 32px;
    color: var(--font-color);
    margin-bottom: 12px;
    ${maxWidth(ScreenSize.Phone,`font-size: 24px; text-align: center`)}
`
export const FAQsAccordianContainer = styled.div`
    display: flex;
    flex-direction: column;
`
