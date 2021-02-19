import React from 'react'
import Features from '../components/Features'
import LatestNews from '../components/LatestNews'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Slideshow from '../components/Slideshow'
import WhyChoose from '../components/WhyChoose'

const Homepage = () => {
  return (
    <>
      <Layout>
        <SEO title="Homepage"/>
        <Slideshow />
        <Features />
        <WhyChoose />
        <LatestNews/>
      </Layout>
    </>
  )
}

export default Homepage
