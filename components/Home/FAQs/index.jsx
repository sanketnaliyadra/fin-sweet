import React from 'react'
import CustomAccordian from '../../common/CustomAccordian'
import CustomArrBtn from '../../common/CustomArrowBtn'
import { FAQsData } from '../../../data';
import { FAQsAccordianContainer, FAQsSection, FAQsTitle, FAQsTitleContainer, FAQsInner } from './style'

const FAQs = () => {
    return (
        <div className="container">
            <FAQsSection>
                <FAQsTitleContainer>
                    <FAQsInner>
                        <FAQsTitle>Frequently asked questions</FAQsTitle>
                        <CustomArrBtn title='Contact us for more info' color='#2405F2' />
                    </FAQsInner>
                </FAQsTitleContainer>
                <FAQsAccordianContainer>
                    {FAQsData && FAQsData.map((data, i) => {
                        return (
                            <>
                                <CustomAccordian title={data.title} content={data.content} id={data.id} />
                            </>
                        )
                    })}
                </FAQsAccordianContainer>
            </FAQsSection>
        </div>
    )
}

export default FAQs