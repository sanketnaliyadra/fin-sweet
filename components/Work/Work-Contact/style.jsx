import styled from "styled-components";
import { FontOpacity, FontPrimaryBold } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const WorkContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    ${maxWidth(ScreenSize.Phone,`margin-bottom: 50px;`)}
`
export const WorkContactInner = styled.div`
    max-width: 60%;
    ${maxWidth(ScreenSize.Phone,`max-width: 90%;`)}
`
export const WContactTitle = styled.h2`
    ${FontPrimaryBold}
    font-size: 40px;
    text-align: center;
    ${maxWidth(ScreenSize.Phone,`font-size: 28px;`)}
`
export const WContactDescription = styled.p`
    ${FontOpacity}
    text-align: center;
    max-width: 80%;
    display: block;
    margin: 16px auto;
    ${maxWidth(ScreenSize.Phone,`max-width: 90%;`)}
`
export const WContactBtn = styled.button`
    background: var(--btn-bg);
    font-family: 'Poppins';
    padding: 12px 30px;
    border: 1px solid var(--Btn-border);
    border-radius: 24px;
    display: block;
    margin: 0 auto;
    a{
        text-decoration: none;
        color: var(--font-color);
        cursor: pointer;
    }
`