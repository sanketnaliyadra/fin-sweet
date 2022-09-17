import styled from "styled-components";
import { FontNormal, FontOpacity } from "../../../utils/fontStyle";

export const WorkPortfolioSection = styled.div`
    display: flex;
    flex-direction: column;
`
export const WorkNavbarWrapper = styled.div`
    display: flex;
`
export const WorkNavList = styled.ul`
    display: flex;
`
export const WorkListItem = styled.li`
    list-style: none;
`
export const WorkCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const WorkCard = styled.div`
    display: flex;
    flex-direction: column;
`
export const WorkImgWrapper = styled.div`
`
export const WorkCardTitle = styled.h6`
    ${FontNormal}
`
export const WorkCardDescription = styled.p`
    ${FontOpacity}
`
