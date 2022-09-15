import styled from "styled-components";
import { FontOpacity, FontPrimaryBold, FontTitleHeading } from "../../../utils/fontStyle";
import { maxWidth, minWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const AboutHeroSectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 90px 0;
   ${maxWidth(ScreenSize.Tablet,`padding: 70px 0;`)}
   ${maxWidth(ScreenSize.Phone,`flex-direction: column-reverse; padding: 44px 0`)}
`
export const AboutHeadDetailWrapper = styled.div`
    display: flex;
    flex: 1 0 40%;
    max-width: 40%;
    flex-direction: column;
   ${maxWidth(ScreenSize.Tablet,`flex: 1 0 45%; max-width: 45%;`)};
   ${maxWidth(ScreenSize.Phone,`max-width: 100%; margin-top: 32px; align-items: center;`)};
`

export const AboutusHeading = styled.h6`
   ${FontTitleHeading}
   ${maxWidth(ScreenSize.Tablet,`font-size: 16px;`)}
`
export const AboutMainHeading = styled.h2`
    ${FontPrimaryBold}
    ${maxWidth(ScreenSize.TabletLandscape,`${minWidth(ScreenSize.Tablet,`font-size: 36px`)}`)};
    ${maxWidth(ScreenSize.Tablet,`font-size: 28px;`)};
    ${maxWidth(ScreenSize.Phone,`text-align: center; margin: 8px 0; font-size: 24px`)};
`
export const AboutSubHeading = styled.p`
    ${FontOpacity}
   ${maxWidth(ScreenSize.Tablet,`font-size: 14px;`)}
`
export const AboutHeroImgWrapper = styled.div`
    flex: 1 0 40%;
    max-width: 40%;
   ${maxWidth(ScreenSize.Tablet,`flex: 1 0 45%; max-width: 45%;`)}
   ${maxWidth(ScreenSize.Phone,`max-width: 100%`)};
`