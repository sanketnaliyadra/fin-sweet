import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const ViewProjectSection = styled.div`
   padding: 80px 0;
   ${maxWidth(ScreenSize.Phone,`padding: 40px 0`)}

`
export const ProjectTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
   ${maxWidth(ScreenSize.Phone,`justify-content: space-around`)}
`
export const ProjectTitleHeading = styled.h1`
    font-size: 40px;
    font-weight: 600;
    color: var(--font-color);
    ${maxWidth(ScreenSize.Tablet,`font-size: 32px`)}
   ${maxWidth(ScreenSize.Phone,`font-size: 18px`)}
`
export const ProjectImageWrapper = styled.div`
    display: flex;
   ${maxWidth(ScreenSize.Phone,`flex-direction: column`)}
`
export const ProjectImageInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 0 24px;
   ${maxWidth(ScreenSize.Phone,`padding: 0;
   span:nth-child(1) {
    margin: 18px 0 !important;
   }
   `)}
`