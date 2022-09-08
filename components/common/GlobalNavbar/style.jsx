import styled from "styled-components";
import { maxWidth } from "../../../utils/responsive/maxWidth";
import { ScreenSize } from "../../../utils/responsive/ScreenSize";

export const GlobalNavbarContainer = styled.div`
    background:  var(--finPrimary);
    width: 100%;
`;

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
        ${maxWidth(
        ScreenSize.Phone,
        ` font-size: 20px;
        `
    )};
    `

export const NavListContainer = styled.div`
    display: flex;
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    padding-right: 48px;
    list-style: none;
`
export const NavListItem = styled.li`
    padding: 0 14px;
    color: var(--white);
`

export const NavButton = styled.button`
    color: var(--white);
    background: transparent;
    font-family: 'Poppins';
    padding: 12px 30px;
    border: 1px solid var(--Btn-border);
    border-radius: 24px;
`