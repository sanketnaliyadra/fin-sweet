import React from 'react'
import CustomArrBtn from '../../common/CustomArrowBtn'
import { WorkStrategyData } from '../../../data'
import {WorkSection, WorkDetailWrapper, WorkHeading, WorkStrategyContainer, WorkSubHeading, WorkContentWrapper, WorkContentTitle, WorkContentDetail, WorkContentInner, WorkDetailContainer } from './style'
import Image from 'next/image'

const WorkStrategy = () => {
    return (
        <WorkSection>
            <div className="container">
                <WorkStrategyContainer>
                    <WorkDetailContainer>
                        <WorkDetailWrapper>
                            <WorkHeading>How we work</WorkHeading>
                            <WorkSubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</WorkSubHeading>
                            <CustomArrBtn title='Get in touch with us' color='#2405F2'></CustomArrBtn>
                        </WorkDetailWrapper>
                    </WorkDetailContainer>
                    <WorkContentWrapper>
                        {WorkStrategyData && WorkStrategyData.map((ele, i) => {
                            return (
                                <WorkContentInner key={i}>
                                    <Image src={ele.image} width='50px' height='50px' alt='img'/>
                                    <WorkContentTitle>{ele.title}</WorkContentTitle>
                                    <WorkContentDetail>{ele.detail}</WorkContentDetail>
                                </WorkContentInner>
                            )
                        })}
                    </WorkContentWrapper>
                </WorkStrategyContainer>
            </div>
        </WorkSection>
    )
}

export default WorkStrategy