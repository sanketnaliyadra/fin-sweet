import Image from 'next/image'
import React from 'react'
import { portfolioData } from '../../../data'
import {CustomArrBtn} from '../../common/CustomArrowBtn/index'
import CustomWorkCard from '../../common/CustomWorkCard'
import {  WorkCardContainer,  WorkListItem, WorkNavbarWrapper, WorkNavList, WorkPortfolioSection } from './style'

const PortfolioNavigationContainer = () => {
    return (
        <div className="container">
        <WorkPortfolioSection>
            <WorkNavbarWrapper>
                <WorkNavList>
                    <WorkListItem>All</WorkListItem>
                    <WorkListItem>UI Design</WorkListItem>
                    <WorkListItem>Webflow Design</WorkListItem>
                    <WorkListItem>Figma Design</WorkListItem>
                </WorkNavList>
            </WorkNavbarWrapper>
            <WorkCardContainer>
                {portfolioData && portfolioData.map((ele,i) => {
                    return (
                        <CustomWorkCard {...ele}/>
                    )
                })}
            </WorkCardContainer>
        </WorkPortfolioSection>
        </div>
    )
}

export default PortfolioNavigationContainer