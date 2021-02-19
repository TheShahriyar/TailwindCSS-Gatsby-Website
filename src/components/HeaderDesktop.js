import React, { Component } from 'react'
import { Link } from "gatsby"

import Logo from "../assets/svg/logo-red-white.svg"
import SecLogo from "../assets/svg/logo-white-grey.svg"
import { BiChevronDown } from "react-icons/bi";

import MenuImage from "../images/6.jpg"

export default class HeaderDesktop extends Component {

  state = {
    scrolled: false,
    isOpen: false,
    isSecOpen: false,
    isTerOpen: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let pageScroll = window.scrollY > 500

      if (pageScroll) {
        this.setState({
          scrolled: true,
        })
      } else {
        this.setState({
          scrolled: false,
        })
      }
    })
  }

  navToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }


  render() {
    console.log(this.state.isTerOpen);
    return (
      <>
        <header className={`px-5 lg:px-20 py-3 lg:py-5 top-0 left-0 right-0 z-10 ${this.state.scrolled ? "fixed lg:absolute bg-gray-900 lg:bg-transparent" : "absolute"}`}>
          <nav className="flex items-center flex-wrap">
            <div className="logo inline-block z-20">
              <Link to="/" className={`${this.state.isOpen ? "hidden" : "block"}`}>
                <img src={Logo} alt="" className="w-20 lg:w-36"/>
              </Link>
              <Link to="/" className={`${this.state.isOpen ? "block" : "hidden"}`}>
                <img src={SecLogo} alt="" className="w-20 lg:w-36"/>
              </Link>
            </div>
            <div className={`navbar-nav w-full z-10 lg:w-auto lg:inline-flex lg:flex-grow bg-white lg:bg-transparent`}>
              
              <div className="navbar-ul lg:inline-flex lg:flex-row lg:ml-auto py-10 lg:py-0">
                <div className="navbar-li">
                  <div className="flex justify-between items-center px-5 py-2" onClick={this.navToggle}>
                    <Link to="/" className="lg:inline-flex lg:w-auto lg:text-white lg:text-xl md:text-lg">Servizi</Link>
                    <span className="lg:text-white"><BiChevronDown/></span>
                  </div>
                  <div className={`dropdown-mega bg-red-600 -z-1 absolute left-0 -top-11 w-full h-screen pl-20 pt-5 overflow-y-hidden ${this.state.isOpen ? "blok": "hidden"}`}>
                    <div className="flex justify-between">
                      <div className="navigation-part flex flex-col justify-center 2xl:w-1/4 xl:w-1/2 lg:w-1/2 pr-12">
                        <div className="dropdown-li">
                          <Link to="/" className="text-white 2xl:text-5xl xl:text-4xl lg:text-3xl font-bold leading-tight hover:text-gray-700">Ingegneria strutturale</Link>
                          <div className={`dropdown-third absolute 2xl:left-1/4 xl:left-1/3 lg:left-1/3 top-0 bg-red-600 h-screen 2xl:w-1/3 xl:w-1/3 lg:w-1/3 px-10 z-1`}>
                            <div className="flex flex-col justify-center h-full xl:pt-32 lg:pt-20 2xl:pt-0 px-10">
                              <Link to="/" className="text-white 2xl:text-4xl xl:text-3xl lg:text-xl font-semibold mb-10 hover:text-gray-700">Diagnostica strutturale</Link>
                              <Link to="/" className="text-white 2xl:text-4xl xl:text-3xl lg:text-xl font-semibold mb-10 hover:text-gray-700">Monitoraggio statico e dinamico</Link>
                              <Link to="/" className="text-white 2xl:text-4xl xl:text-3xl lg:text-xl font-semibold mb-10 hover:text-gray-700">Prove di carico statiche e dinamiche</Link>
                              <Link to="/" className="text-white 2xl:text-4xl xl:text-3xl lg:text-xl font-semibold mb-10 hover:text-gray-700">Sicurezza nei cantieni</Link>
                              <Link to="/" className="text-white 2xl:text-4xl xl:text-3xl lg:text-xl font-semibold hover:text-gray-700">Geotecnica</Link>
                            </div>
                          </div>
                        </div>
                        <div className="py-14">
                          <Link to="/" className="text-white 2xl:text-5xl xl:text-4xl lg:text-3xl font-bold leading-tight hover:text-gray-700">Diagnostica strutturale</Link>
                        </div>
                        <div className="">
                          <Link to="/" className="text-white 2xl:text-5xl xl:text-4xl lg:text-3xl font-bold leading-tight hover:text-gray-700">Sollevamento ponti e grandi strutture</Link>
                        </div>
                      </div>
                      <div className="bg-img-part relative">
                        <img src={MenuImage} alt="" className="h-screen object-cover" />
                        <div className="overlay">&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-li flex">
                  <Link to="/" className="lg:inline-flex lg:w-auto px-5 py-2 lg:text-white lg:text-xl md:text-lg">About</Link>
                </div>
                <div className="navbar-li flex">
                  <Link to="/" className="lg:inline-flex lg:w-auto px-5 py-2 lg:text-white lg:text-xl md:text-lg">Service</Link>
                </div>
                <div className="navbar-li flex">
                  <Link to="/" className="lg:inline-flex lg:w-auto px-5 py-2 lg:text-white lg:text-xl md:text-lg">Portfolio</Link>
                </div>
                <div className="navbar-li flex">
                  <Link to="/" className="lg:inline-flex lg:w-auto px-5 py-2 lg:text-white lg:text-xl md:text-lg">Contact</Link>
                </div>
                <div className="navbar-li flex items-center lg:justify-center lg:pl-10 pl-5 lg:pt-0 pt-3">
                  <Link to="/" className="pr-3 lg:text-white">IT</Link>
                  <Link to="/" className="border-l border-r border-red-600 px-3 lg:text-white">EN</Link>
                  <Link to="/" className="pl-3 lg:text-white">FR</Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
}
