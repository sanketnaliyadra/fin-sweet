import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const InquiryContainer = styled.div`
    display: flex;
    background-image: url('/home/inquiry-bg.png');
    object-fit: contain;
    ${maxWidth(ScreenSize.Phone,`flex-direction: column`)}
    `
export const InquiryHeadingContainer = styled.div`
    flex: 1;
    background: rgba(28, 30, 83, 0.5);
`
export const InquiryFormContainer = styled.div`
    flex: 1;
    background: var(--finPrimary);
`
export const InquiryFormInner = styled.div`
    padding: 10% 18%;
    ${maxWidth(ScreenSize.Phone,`padding: 7% 10%`)}
`
export const HeadInner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10% 18%;
    ${maxWidth(ScreenSize.Phone,`padding: 7% 10%`)}
`
export const InquiryTitle = styled.h1`
    font-size: 32px;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 14px;
    ${maxWidth(ScreenSize.Phone,`font-size: 26px; font-weight: 500`)}
`
export const InquiryDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: var(--white);
    ${maxWidth(ScreenSize.Phone,`font-size: 12px;`)}
`
export const FormTitle = styled.h2`
    font-size: 28px;
    font-weight: 500;
    color: var(--white);
    margin-bottom: 8px;
    ${maxWidth(ScreenSize.Phone,`font-size: 24px;`)}
`
export const FormDescription = styled.p`
    font-size: 14px;
    margin-bottom: 28px;
    font-weight: 400;
    color: var(--white);
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column ;
    a{
        text-align: center;
    }
`
export const FormInput = styled.input`
    color: var(--white);
    padding: 14px;
    margin-bottom: 14px;
    background: transparent;
    border: 1.5px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    :focus-visible{
        outline: none;
    }
    ${maxWidth(ScreenSize.Phone,`margin-bottom: 8px`)}
`
export const FormBtn = styled.button`
    background: var(--btn-bg);
    padding: 14px 42px;
    border: none;
    border-radius: 22px;
    margin-right: 32px;
    font-family: 'Poppins';
    width: 100%;
    margin: 12px 0 18px 0;
`