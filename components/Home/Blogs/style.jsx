import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const BlogSection = styled.div`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
   ${maxWidth(ScreenSize.Phone,`padding: 40px 0`)}

`
export const BlogMainTitle = styled.h1`
    margin-bottom: 28px;
    font-size: 32px;
    color: var(--font-color);
   ${maxWidth(ScreenSize.Phone,`font-size: 28px; margin-bottom: 24px; text-align: center`)}

`
export const BlogContainer = styled.div`
   display: flex;
   ${maxWidth(ScreenSize.Phone,`flex-wrap: wrap`)}
`
export const BlogCard = styled.div`
     display: flex;
    flex-direction: column;
    &:nth-child(even){
        padding: 0 28px;
    }
    button {
        text-align: start;
    }
   ${maxWidth(ScreenSize.Phone,`padding: 12px`)}
`
export const BlogDate = styled.p`
    color: var(--font-color);
    opacity: 0.7;
    margin-top: 12px;
    font-size: 12px;
`
export const BlogTitle = styled.h2`
    margin: 8px 0;
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color);
   ${maxWidth(ScreenSize.Phone,`font-size: 16px`)}
`
export const BlogContent = styled.p`
    font-size: 14px;
    color: var(--font-color);
    opacity: 0.7;
    font-weight: 400;
    margin: 8px 0;
   ${maxWidth(ScreenSize.Phone,`font-size: 12px`)}
`
