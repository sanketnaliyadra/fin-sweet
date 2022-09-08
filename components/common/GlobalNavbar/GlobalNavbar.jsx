import Image from 'next/image'
import React from 'react'
import { GlobalNavbarContainer, NavbarWrapper, NavListContainer, NavList, NavListItem, NavButton} from './style.jsx'

const GlobalNavbar = () => {
  return (
    <GlobalNavbarContainer>
      <div className='container'>
        <NavbarWrapper>
          <Image src='/home/logo.svg' width={120} height={40} />
          <NavListContainer>
            <NavList>
              <NavListItem>Home</NavListItem>
              <NavListItem>About us</NavListItem>
              <NavListItem>Features</NavListItem>
              <NavListItem>Pricing</NavListItem>
              <NavListItem>FAQ</NavListItem>
              <NavListItem>Blog</NavListItem>
            </NavList>
            <NavButton>Contact us</NavButton>
          </NavListContainer>
        </NavbarWrapper>
      </div>
    </GlobalNavbarContainer>
  )
}

export default GlobalNavbar