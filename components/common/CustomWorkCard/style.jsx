import styled from "styled-components"
import { FontNormal, FontOpacity } from "../../../utils/fontStyle"

export const WorkCard = styled.div`
    display: flex;
    flex: 1 0 50%;
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