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

const Features = () => {
  const data = useStaticQuery(getImage)
  return (
    <>
      <div className="features-section py-20 md:py-32 px-10 md:px-20">
        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-600 lg:w-3/5 mb-10 md:mb-20">Offriamo servizi di consulenza, ricerca, supporto ingegneristico e tecnico</h3>
        <div className="features grid grid-cols-1 lg:grid-cols-3 gap-y-10 sm:gap-y-16 gap-x-0 lg:gap-20">
          <div className="feature-item relative group">
            <Img fluid={data.Image1.childImageSharp.fluid} alt="" className="w-full" />
            <a href="#" className="feature-details w-full absolute left-0 bottom-16 text-white px-10">
              <h4 className="text-3xl font-bold">Ingegneria <br /> strutturale</h4>
              <p className="hidden group-hover:flex items-center text-lg font-normal pt-3 relative">Più info <span className="w-6 h-0.5 bg-red-600 block ml-3">&nbsp;</span></p>
            </a>
          </div>
          <div className="feature-item relative group">
            <Img fluid={data.Image2.childImageSharp.fluid} alt="" className="w-full" />
            <a href="#" className="feature-details w-full absolute left-0 bottom-16 text-white px-10">
              <h4 className="text-3xl font-bold">Diagnostica <br /> strutturale</h4>
              <p className="hidden group-hover:flex items-center text-lg font-normal pt-3">Più info <span className="w-6 h-0.5 bg-red-600 block ml-3">&nbsp;</span></p>
            </a>
          </div>
          <div className="feature-item relative group">
            <Img fluid={data.Image3.childImageSharp.fluid} alt="" className="w-full" />
            <a href="#" className="feature-details w-full absolute left-0 bottom-16 text-white px-10">
              <h4 className="text-3xl font-bold">Sollevamento ponti <br /> e grandi strutture</h4>
              <p className="hidden group-hover:flex items-center text-lg font-normal pt-3">Più info <span className="w-6 h-0.5 bg-red-600 block ml-3">&nbsp;</span></p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
