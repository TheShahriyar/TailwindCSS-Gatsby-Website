import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const getImage = graphql`
  {
    Image1: file(relativePath: { eq: "half-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const WhyChoose = () => {
  const data = useStaticQuery(getImage)
  return (
    <>
      <div className="why-choose-section grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-10">
        <div className="md:col-span-2">
          <Img fluid={data.Image1.childImageSharp.fluid} alt="" className="h-full object-cover" />
        </div>
        <div className="text-section md:col-span-3 px-10 lg:px-48 py-20 bg-gray-200 flex flex-col items-center justify-center">
          <h3 className="text-4xl md:text-6xl text-gray-600 font-extrabold mb-10 md:mb-16">Perchè scegliere Secured Solutions</h3>
          <p className="text-gray-500 text-2xl">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint</p>
          <a href="#" className="self-start px-10 py-5 bg-red-600 text-white font-medium hover:bg-red-500 mt-20">SCOPRI DI PIÙ</a>
        </div>
      </div>
    </>
  )
}

export default WhyChoose
