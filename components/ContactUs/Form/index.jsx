import React from 'react'
import { ContactDescription, ContactFormSectionWrap, ContactTitle, FormContactActionBtn, FormContainer, FormField, FormFieldTextArea, FormInnerWrapper, FormLabel, FormWrapper } from './style'

const ContactUsForm = () => {
    return (
        <div className="container">
            <ContactFormSectionWrap>
                <ContactTitle>Contact Us</ContactTitle>
                <ContactDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</ContactDescription>
                <FormWrapper>
                    <FormInnerWrapper>
                        <FormContainer>
                            <FormLabel>Name</FormLabel>
                            <FormField placeholder='Enter your name'/>
                        </FormContainer>
                        <FormContainer>
                            <FormLabel>Email</FormLabel>
                            <FormField placeholder='Enter your Email'/>
                        </FormContainer>
                        <FormContainer>
                            <FormLabel>Subject</FormLabel>
                            <FormField placeholder='Provide Context'/>
                        </FormContainer>
                        <FormContainer>
                            <FormLabel>Subject</FormLabel>
                            <FormField placeholder='Select Subject'/>
                        </FormContainer>
                        <FormContainer>
                            <FormLabel>Message</FormLabel>
                            <FormFieldTextArea rows={6} type='text-area' placeholder='Write Your question here'/>
                        </FormContainer>
                    </FormInnerWrapper>
                    <FormContactActionBtn>Send Messege</FormContactActionBtn>
                </FormWrapper>
            </ContactFormSectionWrap>
        </div>
    )
}

export default ContactUsForm