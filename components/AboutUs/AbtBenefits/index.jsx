import Image from 'next/image'
import React from 'react'
import { abtBenefitData, abtBenefitImgData } from '../../../data'
import { AbtBenefitSection, BenefitCard, BenefitCardContainer, BenefitCardDetail, BenefitCardInner, BenefitCardTitle, BenefitTitle, ClientCount, ClientProductWrapper, FirmImgWrapper, UserCount, UserDetail } from './style'

const AbtBenefits = () => {
    return (
        <div className='container'>
            <AbtBenefitSection>
                <BenefitTitle>The benefits of working<br/> with us</BenefitTitle>
                <BenefitCardContainer>
                    {abtBenefitData && abtBenefitData.map((ele, i) => {
                        return (
                            <BenefitCard>
                                <BenefitCardInner>
                                    <Image src={ele.image} width={32} height={32} />
                                    <BenefitCardTitle>{ele.title}</BenefitCardTitle>
                                    <BenefitCardDetail>{ele.detail}</BenefitCardDetail>
                                </BenefitCardInner>
                            </BenefitCard>
                        )
                    })}
                </BenefitCardContainer>
                <ClientProductWrapper>
                    <ClientCount>
                        <UserCount>100000+</UserCount>
                        <UserDetail>Finsweet Users</UserDetail>
                    </ClientCount>
                    <FirmImgWrapper>
                        {abtBenefitImgData && abtBenefitImgData.map((ele,i) => {
                            return(
                                <Image src={ele.img} width={136} height={32} />
                                )
                        })}
                    </FirmImgWrapper>
                </ClientProductWrapper>
            </AbtBenefitSection>
        </div>
    )
}

export default AbtBenefits