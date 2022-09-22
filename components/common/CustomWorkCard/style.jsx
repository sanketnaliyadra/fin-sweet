import styled from "styled-components"
import { FontNormal, FontOpacity } from "../../../utils/fontStyle"
import { maxWidth } from "../../../utils/responsive/maxWidth"
import { ScreenSize } from "../../../utils/responsive/ScreenSize"

export const WorkCard = styled.div`
    display: flex;
    flex: 1 0 45%;
    flex-direction: column;
    margin: 24px 0;
    button{
        text-align: start;
    }
    ${maxWidth(ScreenSize.Phone,`flex: 1 0 100%; margin: 16px 0; padding: 0 16px;`)}
`
export const WorkImgWrapper = styled.div`
`
export const WorkCardTitle = styled.h6`
    ${FontNormal}
    font-size: 28px;
    margin: 12px 0;
    ${maxWidth(ScreenSize.Phone,`font-size: 24px;`)}
`
export const WorkCardDescription = styled.p`
    ${FontOpacity}
    margin-bottom: 12px;
    ${maxWidth(ScreenSize.Phone,`font-size: 14px;`)}
`