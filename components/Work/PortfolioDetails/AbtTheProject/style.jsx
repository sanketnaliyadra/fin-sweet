import styled from "styled-components";
import { FontNormal, FontOpacity } from "../../../../utils/fontStyle";

export const AbtProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto 36px auto;
`
export const AbtProjectTitle = styled.h4`
    ${FontNormal}
`
export const AbtProjectDescription = styled.p`
    ${FontOpacity}
    margin: 16px 0;
`
export const AbtProjectList = styled.ul`
    margin-bottom: 22px;
    margin-left: 36px;
`
export const AbtProjectListItem = styled.li`
    ${FontOpacity}
`
export const HowWeDoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0;
`
export const HowWeDoTitle = styled.h4`
    ${FontNormal}
`
export const HowWeDoDescription = styled.p`
    ${FontOpacity}
    margin: 16px 0;
`
export const ProjectKeyImgWrapper = styled.div`
    padding: 16px 0;
`