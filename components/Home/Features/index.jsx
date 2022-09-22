import Image from 'next/image';
import React from 'react'
import { FeatureData } from '../../../data';
import { FaUsers } from 'react-icons/fa'
import { FeatureCard, FeatureCardDetail, FeatureCardInner, FeatureCardTitle, FeatureContainer, FeatureHeading, FeatureSection, FeatureSubHeading, FeatureSubSectionWrapper } from './style';

const Features = () => {
  return (
    <FeatureSection>
      <div className="container">
        <FeatureContainer>
          <div>
            <FeatureHeading>Features</FeatureHeading>
            <FeatureSubHeading>Design that solves<br /> problems, one product at<br /> a time</FeatureSubHeading>
          </div>
          <FeatureSubSectionWrapper>
            {FeatureData && FeatureData.map((ele, i) => {
              return (
                <FeatureCard key={i}>
                  <FeatureCardInner>
                    <Image src={ele.image} width={32} height={32} />
                    <FeatureCardTitle>{ele.title}</FeatureCardTitle>
                    <FeatureCardDetail>{ele.detail}</FeatureCardDetail>
                  </FeatureCardInner>
                </FeatureCard>
              )
            })}
          </FeatureSubSectionWrapper>
        </FeatureContainer>
      </div>
    </FeatureSection>
  )
}

export default Features