import Image from 'next/image';
import React from 'react'
import {MultipleBlogData } from '../../../data';
import CustomArrBtn from '../../common/CustomArrowBtn';
import { BlogCard, BlogContainer, BlogContent, BlogDate, BlogMainTitle, BlogSection, BlogTitle } from './style';

const MultipleBlogs = () => {
  return (
    <div className="container">
      <BlogSection>
        <BlogMainTitle>Our blog</BlogMainTitle>
        <BlogContainer>
          {MultipleBlogData && MultipleBlogData.map((ele, i) => {
            return (
              <BlogCard key={i}>
                <Image src={ele.url} width={405} height={285} alt='img'/>
                <BlogDate>{ele.date}</BlogDate>
                <BlogTitle>{ele.title}</BlogTitle>
                <BlogContent>{ele.content}</BlogContent>
                <CustomArrBtn title='Read More' color='#282938' />
              </BlogCard>
            )
          }
          )}
        </BlogContainer>
      </BlogSection>
    </div>
  )
}

export default MultipleBlogs