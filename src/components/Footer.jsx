import React from 'react'

import UniLogo1 from "../images/iso.svg"
import UniLogo2 from "../images/university-logo.svg"

import {FaLinkedinIn, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-section bg-gray-200 px-10 md:px-20 py-10 flex lg:flex-row flex-col md:justify-between md:items-center">
        <div className="copyright-text text-xl text-gray-600 mb-5 lg:mb-0 lg:w-1/2">&copy; {currentYear} Secured Solutions</div>
        <div className="footer-links text-xl mb-10 lg:mb-0 lg:w-1/2">
          <a href="#" className="border-r border-red-600 pr-2 text-gray-600">Aviso legale</a>
          <a href="#" className="pl-2 text-gray-600">Politica sulla privacy</a>
        </div>
        <div className="footer-logo mb-10 lg:mb-0 flex lg:w-1/2">
          <img src={UniLogo1} alt="" className="w-24 mr-10" />
          <img src={UniLogo2} alt="" className="w-24" />
        </div>
        <div className="footer-social lg:w-1/2">
          <div className="social-icons flex text-3xl text-gray-600">
            <a href="#" ><FaLinkedinIn /></a>
            <a href="#" className="px-4"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#" className="pl-5 pr-3 text-lg border-r border-red-600">IT</a>
            <a href="#" className="text-lg px-3 border-r border-red-600">EN</a>
            <a href="#" className="text-lg pl-3">FR</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
