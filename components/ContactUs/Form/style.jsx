import styled from "styled-components";
import { FontNormal, FontOpacity } from "../../../utils/fontStyle";

export const ContactFormSectionWrap = styled.div`
    margin: 80px auto;
    display: flex ;
    flex-direction: column;
    max-width: 70%;
`;
export const ContactTitle = styled.h2`
    ${FontNormal}
    text-align: center;
`
export const ContactDescription = styled.p`
    ${FontOpacity}
    text-align: center;
    max-width: 70%;
    margin: 0 auto;
`
export const FormWrapper = styled.div`
    background: var(--container-bg);
    padding: 48px;
    border-radius: 8px;
`
export const FormInnerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 28px;
    row-gap: 18px;
`
export const FormContainer = styled.div`
    display: flex;
    flex: 1 0 45%;
    flex-direction: column;
`
export const FormLabel = styled.h6`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
`
export const FormField = styled.input`
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    outline: none;
    ::placeholder{
        font-size: 14px;
    }
`
export const FormFieldTextArea = styled.textarea`
 padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    outline: none;
    ::placeholder{
        font-size: 14px;
    }
`
export const FormContactActionBtn = styled.button`
    background-color: var(--font-color);
   color: var(--white);
   font-family: 'Poppins', sans-serif;
   padding: 12px 48px;
    border-radius: 28px;
    margin-top: 18px;
    cursor: pointer;
`