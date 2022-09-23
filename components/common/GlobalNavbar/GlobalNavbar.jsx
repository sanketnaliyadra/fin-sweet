import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../../../styles/Nav.module.css';
import { GlobalNavbarContainer, NavbarWrapper, NavListItem, NavButton, MobileNav } from './style.jsx'
import Link from 'next/link';

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
          <Link href="/"><a><Image src='/home/logo.svg' width={120} height={40} alt='img'/></a></Link>
          <div className={styles.NavListContainer}>
            <ul className={active ? (styles.navMenu + ' ' + styles.active) : styles.navMenu}>
              <NavListItem><Link href='/'><a>Home</a></Link></NavListItem>
              <NavListItem><Link href='/about-us'><a>About us</a></Link></NavListItem>
              <NavListItem><Link href='/Features'><a>Features</a></Link></NavListItem>
              <NavListItem><Link href='/pricing'><a>Pricing</a></Link></NavListItem>
              <NavListItem><Link href='/blog'><a>Blog</a></Link></NavListItem>
            </ul>
            <NavButton><Link href='/contact-us'><a>Contact us</a></Link></NavButton>
          </div>
        </NavbarWrapper>
      </div>
    </GlobalNavbarContainer>
  )
}

export default GlobalNavbar