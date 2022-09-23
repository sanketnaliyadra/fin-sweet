import Link from 'next/link'
import React from 'react'
import CustomArrBtn from '../../common/CustomArrowBtn'
import { FormBtn, FormDescription, FormInput, FormTitle, FormWrapper, HeadInner, InquiryContainer, InquiryDescription, InquiryFormContainer, InquiryFormInner, InquiryHeadingContainer, InquiryTitle } from './style'

const Inquiry = () => {
    return (
        <div className='container'>
            <InquiryContainer>
                <InquiryHeadingContainer>
                    <HeadInner>
                        <InquiryTitle>Building stellar websites for early startups</InquiryTitle>
                        <InquiryDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</InquiryDescription>
                    </HeadInner>
                </InquiryHeadingContainer>
                <InquiryFormContainer>
                    <InquiryFormInner>
                        <FormTitle>Send inquiry</FormTitle>
                        <FormDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</FormDescription>
                        <FormWrapper>
                            <FormInput type="text" placeholder="Your Name" />
                            <FormInput type="email" placeholder="Email" />
                            <FormInput type="url" placeholder="Paste your Figma design URL" />
                            <FormBtn>Send an Inquiry</FormBtn>
                            <Link href="/contact-us"><a><CustomArrBtn title='Get in touch with us' color='#ffffff' /></a></Link>
                        </FormWrapper>
                    </InquiryFormInner>
                </InquiryFormContainer>
            </InquiryContainer>
        </div>
    )
}

export default Inquiry