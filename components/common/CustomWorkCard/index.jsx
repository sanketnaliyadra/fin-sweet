import Image from 'next/image'
import React from 'react'
import CustomArrBtn from '../CustomArrowBtn'
import { WorkCard, WorkCardDescription, WorkCardTitle, WorkImgWrapper } from './style'

const CustomWorkCard = ({url,title,description}) => {
    return (
        <WorkCard>
            <WorkImgWrapper>
                <Image src={url} width={545} height={317} />
            </WorkImgWrapper>
            <WorkCardTitle>{title}</WorkCardTitle>
            <WorkCardDescription>{description}</WorkCardDescription>
            <CustomArrBtn title='View Portfolio' color='#282938'/>
        </WorkCard>
    )
}

export default CustomWorkCard