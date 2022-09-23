import styled from "styled-components";
import { FontNormal, FontOpacity, FontPrimaryBold, FontTitleHeading } from "../../../utils/fontStyle";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const AbtBenefitSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
    ${maxWidth(ScreenSize.Tablet,`padding: 60px 0;`)};
    ${maxWidth(ScreenSize.Phone,`padding: 30px 0;`)};
`
export const BenefitTitle = styled.h2`
    ${FontPrimaryBold}
    font-size: 38px;
    text-align: center;
    margin-bottom: 28px;
    ${maxWidth(ScreenSize.Tablet,`font-size: 32px`)}
    ${maxWidth(ScreenSize.Phone,`font-size: 24px`)}
`
export const BenefitCardContainer = styled.div`
    display: flex;
    gap: 24px;
    ${maxWidth(ScreenSize.TabletLandscape,`flex-wrap: wrap;`)}
`
export const BenefitCard = styled.div`
   flex: 1 0 33%;
   ${maxWidth(ScreenSize.Phone,`flex: 1 0 100%;`)}
`
export const BenefitCardInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: var(--container-bg);
    padding: 34px 28px;
    border-radius: 6px;
`
export const BenefitCardTitle = styled.h4`
    ${FontTitleHeading};
    margin: 16px 0;
`
export const BenefitCardDetail = styled.p`
    ${FontOpacity}
    font-size: 15px;
`
export const ClientProductWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 42px;
    ${maxWidth(ScreenSize.Tablet,`flex-direction: column`)}
`
export const ClientCount = styled.div`
    display: flex;
    flex-direction: column;
    ${maxWidth(ScreenSize.Tablet,`align-items: center; margin-bottom: 24px;`)}
`
export const UserCount = styled.h4`
    ${FontNormal}
    ${maxWidth(ScreenSize.Tablet,`font-size: 28px`)}
`
export const UserDetail = styled.p`
    ${FontOpacity}
    font-size: 14px;
`
export const FirmImgWrapper = styled.div`
    display: flex;
    span{
        margin: 0 0 0 18px !important;
    }
    img{
        opacity: 0.8;
    }
    ${maxWidth(ScreenSize.Tablet,`span{
        margin: 0 0 0 8px !important;
    }`)}
`
