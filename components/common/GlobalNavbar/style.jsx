import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const GlobalNavbarContainer = styled.div`
    background:  var(--finPrimary);
    width: 100%;
    ${maxWidth(
        ScreenSize.TabletLandscape,
        `
        .container {
            max-width: 100%
        }
        `)}
`;

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
        ${maxWidth(
        ScreenSize.Tablet,
        ` span {
            margin-left: 12% !important;
        }
        `
    )};
    `
export const MobileNav = styled.div`
    display: none;
    ${maxWidth(ScreenSize.Tablet, `display: inline-block; color: white; font-size: 26px; padding: 0 16px;
    
    `)}
`

// export const NavList = styled.ul`
//     display: flex;
//     align-items: center;
//     padding-right: 48px;
//     list-style: none;
//     ${maxWidth(ScreenSize.TabletLarge,`padding-right: 0`)}
// `
export const NavListItem = styled.li`
    padding: 0 14px;
    color: var(--white);
    ${maxWidth(ScreenSize.Tablet,`color: #fff; padding: 6px 0; font-size: 20px`)}
`

export const NavButton = styled.button`
    color: var(--white);
    background: transparent;
    font-family: 'Poppins';
    padding: 12px 30px;
    border: 1px solid var(--Btn-border);
    border-radius: 24px;
`