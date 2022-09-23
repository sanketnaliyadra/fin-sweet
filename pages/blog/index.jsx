import React from 'react'
import BlogHeroSection from '../../components/Blog/BlogHeroSection'
import MultipleBlogs from '../../components/Blog/MultipleBlogs'
import Footer from '../../components/common/Footer'
import GlobalNavbar from '../../components/common/GlobalNavbar/GlobalNavbar'

const index = () => {
    return (
        <>
            <GlobalNavbar />
            <div className='container'>
                <BlogHeroSection />
                <MultipleBlogs/>
            </div>
            <Footer />
        </>
    )
}

export default index