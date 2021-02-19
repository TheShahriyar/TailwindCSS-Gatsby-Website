import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
