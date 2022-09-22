import Link from 'next/link'
import React from 'react'
import { WContactBtn, WContactDescription, WContactTitle, WorkContactContainer, WorkContactInner } from './style'

const WorkContact = () => {
    return (
        <div className='container'>
            <WorkContactContainer>
                <WorkContactInner>
                    <WContactTitle>Let build something great together</WContactTitle>
                    <WContactDescription>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</WContactDescription>
                    <WContactBtn><Link href='/contact-us'><a>Contact Us</a></Link></WContactBtn>
                </WorkContactInner>
            </WorkContactContainer>
        </div>
    )
}

export default WorkContact