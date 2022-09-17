import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { minWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const FooterSection = styled.div`
    background: var(--finPrimary);
    `
export const FooterTopSection = styled.div`
    color: white;
    display: flex;
    padding-top: 66px;
    ${maxWidth(ScreenSize.Phone,`flex-direction: column`)}
    `
export const FooterBottomSection = styled.div`
    padding: 22px 0;
    color: var(--font-color);
    background: var(--white);
    ${maxWidth(ScreenSize.Phone,`background: var(--finPrimary);`)}
`
export const FooterLeftContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${maxWidth(ScreenSize.Phone,`margin: 0 18px;`)}

`
export const FooterLogoContainer  = styled.div`
    max-width: 70%;
    ${maxWidth(ScreenSize.Phone,`max-width: 100%;
    span:nth-child(1){
        display: block !important;
    }
    `)}
`
export const LeftDescription = styled.p`
    margin: 24px 0;
    font-size: 14px;
    font-weight: 400;
    opacity: 80%;
    ${maxWidth(ScreenSize.Phone,`text-align: center`)};
`
export const FooterContactWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    background: var(--btn-bg);
    padding: 12px 24px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    ${maxWidth(
     ScreenSize.TabletLandscape,
      `
      ${minWidth( ScreenSize.Phone, `flex-direction: column`)}
    `
    )};
    ${maxWidth(ScreenSize.Phone,`flex-direction: column; max-width: 100%;`)}
`
export const EmailWrapper = styled.div`
    
`
export const EmailTitle = styled.h4`
    font-size: 16px;
    font-size: 400;
    color: var(--font-color);
`
export const EmailContent = styled.p`
    font-size: 16px;
    font-size: 400;
    color: var(--font-color);
    opacity: 80%;
`
export const ContactWrapper = styled.div`
    
`
export const ContactTitle = styled.h4`
    font-size: 16px;
    font-size: 400;
    color: var(--font-color);
`
export const  ContactContent = styled.p`
     font-size: 16px;
    font-size: 400;
    color: var(--font-color);
    opacity: 80%;
`
export const FooterRightContainer = styled.div`
    flex: 1;
    ${maxWidth(ScreenSize.Phone,`margin: 18px`)}
`
export const SocialTitle = styled.h2`
    ${maxWidth(ScreenSize.Phone,`text-align: center; font-weight: 500; font-size: 32px;`)}
`
export const SocialDescription = styled.p`
    margin: 24px 0;
    font-size: 14px;
    font-weight: 400;
    opacity: 80%;
`
export const SocialIconWrapper = styled.div`
    max-width: 25%;
    display: flex;
    justify-content: space-between;
    ${maxWidth(
     ScreenSize.TabletLandscape,
      `
      ${minWidth( ScreenSize.Phone, `max-width: 40%`)}
    `
    )};
    ${maxWidth(ScreenSize.Phone,`max-width: 60%`)}

`
export const FooterNavInner = styled.div`
    display: flex;
    justify-content: space-between;
    ${maxWidth(ScreenSize.TabletLandscape,`flex-direction: column`)}
    ${maxWidth(ScreenSize.Phone,`flex-direction: column-reverse`)}
`
export const CopyrightWrapper = styled.p`
    font-size: 18px;
    font-weight: 500;
    ${maxWidth(ScreenSize.TabletLandscape,`display: flex;font-size: 14px; justify-content: center; margin-bottom: 8px`)}
    ${maxWidth(ScreenSize.Phone,`margin-top:8px; color: white; font-size: 16px; font-weight: 400`)}

`
export const FooterNavigationWrapper = styled.div`
    
`
export const NavList = styled.ul`
    display: flex;
    ${maxWidth(ScreenSize.TabletLandscape,`justify-content: center;`)}
    ${maxWidth(ScreenSize.Tablet,`flex-wrap: wrap`)}
`
export const ListItem = styled.li`
    a{
        text-decoration: none;
        color: var(--font-color);
    }
    cursor: pointer;
    list-style: none;
    padding: 0 16px;
    ${maxWidth(ScreenSize.Tablet,`color: #fff; font-size: 18px; line-height: 2;`)}
    ${maxWidth(ScreenSize.Phone,`color: #fff; font-size: 16px; font-weight: 300 line-height: 2;
    a{
        color: white;
    }
    `)}
`