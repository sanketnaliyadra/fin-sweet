import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { pricingPlanData } from '../../../data';
import { BenefitPoint, BenefitTitle, CardDetail, CardTitle, PointWrapper, PriceActionBtn, PriceDesign, PriceNum, PricePlanCardContainer, PriceWrapper, PricingCard, PricingContainer, PricingDescription, PricingTitle } from './style';

const PricingPlanning = () => {
    return (
        <div className='container'>
            <PricingContainer>
                <PricingTitle>Our Pricing Plans</PricingTitle>
                <PricingDescription>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</PricingDescription>
                <PricePlanCardContainer>
                    {pricingPlanData && pricingPlanData.map((ele, i) => {
                        return (
                            <PricingCard key={i}>
                                <PriceWrapper>
                                    <PriceNum>{ele.price}</PriceNum>
                                    <PriceDesign>{ele.design}</PriceDesign>
                                </PriceWrapper>
                                <CardTitle>{ele.title}</CardTitle>
                                <CardDetail>{ele.detail}</CardDetail>
                                <BenefitPoint>
                                    {ele.benefitPoint && ele.benefitPoint.map((data, i) => {
                                        return (
                                            <PointWrapper>
                                                <BsFillPlayFill />
                                                <BenefitTitle>{data}</BenefitTitle>
                                            </PointWrapper>
                                        )
                                    })}
                                </BenefitPoint>
                                <PriceActionBtn>{ele.btn}</PriceActionBtn>
                            </PricingCard>
                        )
                    })}
                </PricePlanCardContainer>
            </PricingContainer>
        </div>
    )
}

export default PricingPlanning