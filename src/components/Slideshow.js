import React from 'react'
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'



const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const getImage = graphql`
  {
    Slider1: file(relativePath: { eq: "slider1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    Slider2: file(relativePath: { eq: "slider2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Slideshow = () => {
  const data = useStaticQuery(getImage)
  return (
    <>
      <div className="slider w-full top-0 bg-cover relative h-screen overflow-hidden">
        <Slider {...settings} className="relative">
          <BackgroundImage Tag="div" fluid={data.Slider1.childImageSharp.fluid} backgroundColor={`#040e18`} className="w-full relative h-screen">
            <div className="slider-details overlay absolute left-0 right-0 top-0 w-3/5 mx-auto flex justify-center items-center text-center h-screen">
              <h1 className="text-white font-bold xl:text-8xl lg:text-6xl sm:text-4xl text-4xl">Lorem ipsum dolor sit amet, consectetur</h1>
            </div>
          </BackgroundImage>
          <BackgroundImage Tag="div" fluid={data.Slider2.childImageSharp.fluid} backgroundColor={`#040e18`} className="w-full relative h-screen">
            <div className="slider-details overlay absolute left-0 right-0 top-0 w-3/5 mx-auto flex justify-center items-center text-center h-screen">
              <h1 className="text-white font-bold xl:text-8xl lg:text-6xl sm:text-4xl text-4xl">Lorem ipsum dolor sit amet, consectetur</h1>
            </div>
          </BackgroundImage>
        </Slider>
      </div>
    </>
  )
}


export default Slideshow

