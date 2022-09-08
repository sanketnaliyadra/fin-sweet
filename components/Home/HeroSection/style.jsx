import styled from "styled-components";

export const HeroSectionContainer = styled.div`
    display: flex;
    width: 100%;
    background: var(--finPrimary);
`
export const HeroInnerContainer = styled.div`
    display: flex;
    padding: 110px 0;
`
export const HeroDetailWrapper = styled.div`
    display: flex;
    flex: 1;
`
export const HeroDetailInner = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    max-width: 80%;
`;

export const HeroSectionHeading = styled.h2`
    font-size: 40px;
    font-weight: 600;
    color: var(--white);
`

export const HeroSubHeading = styled.p`
    font-size: 14px;
    color: var(--white);
`
export const HeroBtnWrapper = styled.div`
    display: flex;
`

export const HeroViewWorkBtn = styled.button`
    background: var(--btn-bg);
    padding: 14px 42px;
    border: none;
    border-radius: 22px;
    margin-right: 32px;
    font-family: 'Poppins';
`

export const HeroViewPriceBtn = styled.button`
color: var(--white);
    border: none;
    background: transparent;
    font-family: 'Poppins';
    svg {
        color: var(--white);
        vertical-align: middle;
        margin-left: 8px;
        font-size: 18px;
    }
`
export const HeroBgImage = styled.div`
    flex: 1;
`