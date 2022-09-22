import styled from "styled-components";
import { FontNormal, FontOpacity } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const WorkPortfolioSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 0;
    ${maxWidth(ScreenSize.Phone, `margin: 40px 0;`)}
`
export const WorkNavbarWrapper = styled.div`
    display: flex;
    justify-content: center;

`
export const WorkNavList = styled.ul`
    display: flex;
    ${maxWidth(ScreenSize.Phone, `flex-wrap: wrap; row-gap: 8px;`)}
`
export const WorkListItem = styled.li`
    color: ${props => props.color};
    text-decoration: none;
    /* color: var(--font-color); */
    list-style: none;
    padding: 0 12px;
    cursor: pointer;
    ${maxWidth(ScreenSize.Phone, `padding: 0 10px;`)}
`
export const WorkCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
`



