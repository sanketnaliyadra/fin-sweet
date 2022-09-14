import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../../../styles/Nav.module.css';
import { GlobalNavbarContainer, NavbarWrapper, NavListItem, NavButton, MobileNav } from './style.jsx'

const GlobalNavbar = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <GlobalNavbarContainer>
      <div className='container'>
        <NavbarWrapper>
          <div className={styles.menuIcon} onClick={handleClick}>
            {active ? <AiOutlineClose /> : <FaBars />}
          </div>
          <Image src='/home/logo.svg' width={120} height={40} />
          <div className={styles.NavListContainer}>
            <ul className={active ? (styles.navMenu + ' ' + styles.active) : styles.navMenu}>
              <NavListItem>Home</NavListItem>
              <NavListItem>About us</NavListItem>
              <NavListItem>Features</NavListItem>
              <NavListItem>Pricing</NavListItem>
              <NavListItem>FAQ</NavListItem>
              <NavListItem>Blog</NavListItem>
            </ul>
            <NavButton>Contact us</NavButton>
          </div>
        </NavbarWrapper>
      </div>
    </GlobalNavbarContainer>
  )
}

export default GlobalNavbar