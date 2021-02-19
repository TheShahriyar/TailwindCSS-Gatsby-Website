import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const getImage = graphql`
  {
    Image1: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Image2: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Image3: file(relativePath: { eq: "4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const LatestNews = () => {
  const data = useStaticQuery(getImage)
  return (
    <>
      <div className="latest-news-section px-10 md:px-20 py-20 md:py-32">
        <div className="section-title">
          <p className="text-gray-500 text-xl md:text-2xl mb-3">Centro di Conoscenza</p>
          <h3 className="text-4xl md:text-6xl text-gray-500 mb-10 md:mb-20 font-extrabold">Ultime novità</h3>
        </div>
        <div className="news-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="news-item shadow">
            <Img fluid={data.Image1.childImageSharp.fluid} alt="" className="w-full" />
            <div className="news-desc p-5">
              <p className="text-gray-500 font-medium mb-5 uppercase">Nome categoria</p>
              <h4 className="mb-10 h-16 text-gray-600 font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur</h4>
              <a href="#" className="text-gray-500 text-xl flex items-center">Più info <span className="w-6 h-0.5 bg-red-600 block ml-3">&nbsp;</span></a>
            </div>
          </div>
          <div className="news-item shadow">
            <Img fluid={data.Image2.childImageSharp.fluid} alt="" className="w-full" />
            <div className="news-desc p-5">
              <p className="text-gray-500 font-medium mb-5 uppercase">Nome categoria</p>
              <h4 className="mb-10 h-16 text-gray-600 font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur</h4>
              <a href="#" className="text-gray-500 text-xl flex items-center">Più info <span className="w-6 h-0.5 bg-red-600 block ml-3">&nbsp;</span></a>
            </div>
          </div>
          <div className="news-item shadow">
            <Img fluid={data.Image3.childImageSharp.fluid} alt="" className="w-full" />
            <div className="news-desc p-5">
              <p className="text-gray-500 font-medium mb-5 uppercase">Nome categoria</p>
              <h4 className="mb-10 h-16 text-gray-600 font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur</h4>
              <a href="#" className="text-gray-500 text-xl flex items-center">Più info <span className="w-6 h-0.5 bg-red-600 block ml-3">&nbsp;</span></a>
            </div>
          </div>
          <div className="news-item shadow">
            <Img fluid={data.Image1.childImageSharp.fluid} alt="" className="w-full" />
            <div className="news-desc p-5">
              <p className="text-gray-500 font-medium mb-5 uppercase">Nome categoria</p>
              <h4 className="mb-10 h-16 text-gray-600 font-bold text-2xl">Lorem ipsum dolor sit amet, consectetur</h4>
              <a href="#" className="text-gray-500 text-xl flex items-center">Più info <span className="w-6 h-0.5 bg-red-600 block ml-3">&nbsp;</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNews
