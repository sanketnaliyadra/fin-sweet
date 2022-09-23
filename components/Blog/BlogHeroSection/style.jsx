import styled from "styled-components";
import { FontOpacity, FontPrimaryBold } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const BlogSectionContainer = styled.div`
    margin: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${maxWidth(ScreenSize.Tablet,`margin: 40px 0;`)}
`
export const BlogHeroTitle = styled.h2`
    ${FontPrimaryBold};
    font-size: 40px;
    text-align: center;
    max-width: 70%;
    margin: 0 auto 8px auto;
    ${maxWidth(ScreenSize.Tablet,`max-width: 100%; font-size: 28px;`)}
`
export const BlogWriterWrapper = styled.div`
    display: flex;
    margin-bottom: 14px;
`
export const BlogWriterName = styled.p`
    ${FontOpacity}
    margin-right: 8px;
`
export const BlogPostedDate = styled.span`
    font-size: 16px;
    font-size: 500;
`
export const BlogDetails = styled.p`
    ${FontOpacity}
    max-width: 70%;
    text-align: center;
    margin-top: 36px;
    ${maxWidth(ScreenSize.Tablet,`max-width: 100%;`)}
`
