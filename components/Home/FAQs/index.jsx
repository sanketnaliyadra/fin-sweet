import React from 'react'
import CustomAccordian from '../../common/CustomAccordian'
import CustomArrBtn from '../../common/CustomArrowBtn'
import { FAQsData } from '../../../data';
import { FAQsAccordianContainer, FAQsSection, FAQsTitle, FAQsTitleContainer, FAQsInner } from './style'
import Link from 'next/link';

const FAQs = () => {
    return (
        <div className="container">
            <FAQsSection>
                <FAQsTitleContainer>
                    <FAQsInner>
                        <FAQsTitle>Frequently asked questions</FAQsTitle>
                        <Link href='/contact-us'><a><CustomArrBtn title='Contact us for more info' color='#2405F2' /></a></Link>
                    </FAQsInner>
                </FAQsTitleContainer>
                <FAQsAccordianContainer>
                    {FAQsData && FAQsData.map((data, i) => {
                        return (
                                <CustomAccordian key={i} title={data.title} content={data.content} id={data.id} />
                        )
                    })}
                </FAQsAccordianContainer>
            </FAQsSection>
        </div>
    )
}

export default FAQs