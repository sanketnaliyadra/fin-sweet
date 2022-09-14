import React from 'react'
import { ClientReviewContainer, ClientReviewSection, ReviewHeadWrapper, ReviewTitle, ReviewTitleDetail } from './style'
import {clientReviewData} from '../../../data'
import ImageSlider from '../../common/React-Slick'

const ClientReview = () => {
    return (
        <ClientReviewSection>
            <div className="container">
                <ClientReviewContainer>
                    <ReviewHeadWrapper>
                        <ReviewTitle>What our clients<br/> say about us</ReviewTitle>
                        <ReviewTitleDetail>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</ReviewTitleDetail>
                    </ReviewHeadWrapper>
                    {/* <ClientReviewSlider>
                        <div>
                        <ImageSlider clientReviewData={clientReviewData}/>
                        </div>
                    </ClientReviewSlider> */}
                </ClientReviewContainer>
            </div>
        </ClientReviewSection>
    )
}

export default ClientReview