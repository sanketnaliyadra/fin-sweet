import styled from "styled-components";
import { FontOpacity, FontPrimaryBold } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const WorkHeaderSection = styled.div`
    background: var(--container-bg);
`
export const WorkHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;
    ${maxWidth(ScreenSize.Phone,`align-items: flex-start; padding: 40px 0;`)}
`
export const WorkSubTitle = styled.p`
    ${FontOpacity};
`
export const WorkHeaderTitle = styled.h2`
    ${FontPrimaryBold};
    margin-bottom: 12px;
    ${maxWidth(ScreenSize.Phone,`font-size: 28px `)}
`
export const WorkHeaderDescription = styled.p`
    ${FontOpacity};
    max-width: 60%;
    text-align: center;
    ${maxWidth(ScreenSize.Phone,`max-width: 100%; text-align: start`)}
`
export const WorkSocialIcon = styled.div`
    max-width: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    svg{
        margin: 0 12px;
    }
`


