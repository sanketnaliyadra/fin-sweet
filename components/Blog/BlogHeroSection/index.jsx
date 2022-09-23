import Image from 'next/image'
import React from 'react'
import { BlogDetails, BlogHeroTitle, BlogPostedDate, BlogSectionContainer, BlogWriterName, BlogWriterWrapper } from './style'

const BlogHeroSection = () => {
    return (
        <BlogSectionContainer>
            <BlogHeroTitle>A UX Case Study on Creating a Studious Environment for Students</BlogHeroTitle>
            <BlogWriterWrapper>
                <BlogWriterName>Andrew Jonson</BlogWriterName>
                <BlogPostedDate>Posted on 27th January 2021</BlogPostedDate>
            </BlogWriterWrapper>
            <Image src='/blog/blogbackground.png' height={477} width={1280} />
            <BlogDetails>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</BlogDetails>
        </BlogSectionContainer>
    )
}

export default BlogHeroSection