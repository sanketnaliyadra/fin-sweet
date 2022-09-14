import Head from 'next/head'
import Footer from '../components/common/Footer'
import GlobalNavbar from '../components/common/GlobalNavbar/GlobalNavbar'
import Blogs from '../components/Home/Blogs'
import ClientReview from '../components/Home/ClientReview'
import FAQs from '../components/Home/FAQs'
import Features from '../components/Home/Features'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import Inquiry from '../components/Home/Inquiry'
import ViewProject from '../components/Home/ViewProject'
import WorkStrategy from '../components/Home/WorkStrategy/WorkStrategy'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalNavbar />
      <HeroSection/>
      <WorkStrategy/>
      <ViewProject/>
      <Features/>
      <ClientReview/>
      <FAQs/>
      <Inquiry/>
      <Blogs/>
      <Footer/>
    </div>
  )
}
