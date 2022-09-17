import styled from "styled-components";
import { FontOpacity, FontPrimaryBold } from "../../../utils/fontStyle";

export const WorkHeaderSection = styled.div`
    background: var(--container-bg);
`
export const WorkHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;
`
export const WorkSubTitle = styled.p`
    ${FontOpacity};
`
export const WorkHeaderTitle = styled.h2`
    ${FontPrimaryBold};
    margin-bottom: 12px;
`
export const WorkHeaderDescription = styled.p`
    ${FontOpacity};
    max-width: 60%;
    text-align: center;
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


