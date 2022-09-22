import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { portfolioData } from '../../../data'
import { CustomArrBtn } from '../../common/CustomArrowBtn/index'
import CustomWorkCard from '../../common/CustomWorkCard'
import { WorkCardContainer, WorkListItem, WorkNavbarWrapper, WorkNavList, WorkPortfolioSection } from './style'

const tabs = [{ id: 1,name: 'All', value: 'All' }, { id: 2,name: 'UI Design', value: 'UI' }, { id: 3,name: 'Webflow Design', value: 'webflow' }, { id: 4,name: 'Figma Design', value: 'figma' }]

const PortfolioNavigationContainer = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(portfolioData)
    const [color,setColor] = useState('All');
    return (
        <div className="container">
            <WorkPortfolioSection>
                <WorkNavbarWrapper>
                    <WorkNavList>
                        {tabs && tabs.map((tab, index) => {
                            
                            return (
                                <>
                                    <WorkListItem key={index} color={tab.value === color ? '#2405F2': null} onClick={() => {setActiveTabIndex(tab.value === 'All' ? portfolioData : portfolioData.filter((ele) => ele.categories === tab.value)); setColor(tab.value)}}>{tab.name}</WorkListItem>
                                </>
                            )
                        }
                        )}
                    </WorkNavList>
                </WorkNavbarWrapper>
                <WorkCardContainer>
                    {activeTabIndex && activeTabIndex.map((ele, i) => {
                        return (
                            <CustomWorkCard {...ele} />
                        )
                    })}
                </WorkCardContainer>
            </WorkPortfolioSection>
        </div>
    )
}

export default PortfolioNavigationContainer