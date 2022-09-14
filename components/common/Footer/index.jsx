import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { ContactContent, ContactTitle, ContactWrapper, CopyrightWrapper, EmailContent, EmailTitle, EmailWrapper, FooterBottomSection, FooterContactWrapper, FooterLeftContainer, FooterLogoContainer, FooterNavigationWrapper, FooterNavInner, FooterRightContainer, FooterSection, FooterTopSection, LeftDescription, ListItem, NavList, SocialDescription, SocialIconWrapper, SocialTitle } from './style'

const Footer = () => {
    return (
        <FooterSection>
            <div className='container'>
                <FooterTopSection>
                    <FooterLeftContainer>
                        <FooterLogoContainer>
                            <Image src='/home/logo.svg' width={160} height={33} />
                            <LeftDescription>We are always open to discuss your project and improve your online presence.</LeftDescription>
                        </FooterLogoContainer>
                        <FooterContactWrapper>
                            <EmailWrapper>
                                <EmailTitle>Email me at</EmailTitle>
                                <EmailContent>contact@website.com</EmailContent>
                            </EmailWrapper>
                            <ContactWrapper>
                                <ContactTitle>Call us</ContactTitle>
                                <ContactContent>0927 6277 28525</ContactContent>
                            </ContactWrapper>
                        </FooterContactWrapper>
                    </FooterLeftContainer>
                    <FooterRightContainer>
                        <SocialTitle>Lets Talk!</SocialTitle>
                        <SocialDescription>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</SocialDescription>
                        <SocialIconWrapper>
                            <BsFacebook />
                            <BsInstagram />
                            <BsTwitter />
                            <BsLinkedin />
                        </SocialIconWrapper>
                    </FooterRightContainer>
                </FooterTopSection>
            </div>
            <FooterBottomSection>
                <div className="container">
                    <FooterNavInner>
                        <CopyrightWrapper>Copyright 2022, Finsweet.com</CopyrightWrapper>
                        <FooterNavigationWrapper>
                            <NavList>
                                <ListItem><Link href='/'><a>Home</a></Link></ListItem>
                                <ListItem><Link href='about-us'><a>About us</a></Link></ListItem>
                                <ListItem><Link href=''><a>Features</a></Link></ListItem>
                                <ListItem><Link href=''><a>Pricing</a></Link></ListItem>
                                <ListItem><Link href=''><a>FAQ</a></Link></ListItem>
                                <ListItem><Link href=''><a>Blog</a></Link></ListItem>
                            </NavList>
                        </FooterNavigationWrapper>
                    </FooterNavInner>
                </div>
            </FooterBottomSection>
        </FooterSection>
    )
}

export default Footer