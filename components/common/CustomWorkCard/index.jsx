import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomArrBtn from '../CustomArrowBtn'
import { WorkCard, WorkCardDescription, WorkCardTitle, WorkImgWrapper } from './style'

const CustomWorkCard = ({url,title,description,btnTitle,id}) => {
    return (
        <WorkCard>
            <WorkImgWrapper>
                <Image src={url} width={545} height={317} />
            </WorkImgWrapper>
            <WorkCardTitle>{title}</WorkCardTitle>
            <WorkCardDescription>{description}</WorkCardDescription>
            <Link href={`/work/${id}`}><a><CustomArrBtn title={btnTitle} color='#282938'/></a></Link>
        </WorkCard>
    )
}

export default CustomWorkCard