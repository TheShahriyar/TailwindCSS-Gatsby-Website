import React, { Component } from 'react'
import { Link } from "gatsby"

import Logo from "../assets/svg/logo-red-white.svg"
import SecLogo from "../assets/svg/logo-red-grey.svg"
import { AiOutlineAlignRight } from "react-icons/ai";
import { BiX, BiPlus, BiMinus } from "react-icons/bi";

export default class HeaderMobile extends Component {

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

  navOpen = (e) => {
    this.setState({
      isOpen: true,
    });
    document.body.style.overflowY = "hidden";
  }
  navClose = () => {
    this.setState({
      isOpen: false,
    });
    document.body.style.overflowY = "visible";
  }

  secToggle = () => {
    this.setState({
      isSecOpen: !this.state.isSecOpen,
    })
  }

  terToggle = () => {
    this.setState({
      isTerOpen: !this.state.isTerOpen,
    })
  }


  render() {
    return (
      <>
        <header className={`px-5 py-3 top-0 left-0 right-0 z-1 ${this.state.scrolled ? "fixed lg:absolute bg-gray-900 lg:bg-transparent" : "absolute"}`}>
          <nav className="flex items-center flex-wrap">
            <div className="logo inline-block">
              <Link to="/">
                <img src={Logo} alt="" className="w-20"/>
              </Link>
            </div>
            <button className="inline-flex ml-auto text-3xl text-white" onClick={this.navOpen}>
              <AiOutlineAlignRight/>
            </button>
            <div className={`navbar-nav w-full h-screen ${this.state.isOpen ? "block" :  "hidden"} absolute top-0 left-0 bg-white lg:relative lg:bg-transparent`}>
              
              <div className="mobile-nav-sec-header flex justify-between items-center lg:hidden px-5 py-5">
                <img src={SecLogo} alt="Mobile Nav" className="h-full w-20" />
                <div className="close-nav text-red-600 text-4xl" onClick={this.navClose}><BiX/></div>
              </div>

              <div className="py-10">
                <div className="">
                  <div className="flex justify-between items-center pl-5 pr-8 py-2" onClick={this.terToggle}>
                    <Link to="/" className=" hover:text-red-600 md:text-lg">Servizi</Link>
                    {this.state.isTerOpen ? <span><BiMinus/></span> : <span><BiPlus/></span>}
                  </div>
                  <div className={`dropdown flex flex-col justify-center pl-10 py-5 ${this.state.isTerOpen ? "block" :  "hidden"}`}>
                    <div className="">
                      <div className="flex items-center pr-5" onClick={this.secToggle}>
                        <Link to="/" className=" hover:text-red-600 pr-3">Ingegneria strutturale</Link>
                        {this.state.isSecOpen ? <span className=""><BiMinus/></span> : <span className=""><BiPlus/></span>}
                      </div>
                      <div className={`flex flex-col justify-center w-full pl-5 py-3 ${this.state.isSecOpen ? "block":"hidden"}`}>
                        <Link to="/" className="hover:text-red-600 mb-2">Diagnostica strutturale</Link>
                        <Link to="/" className="hover:text-red-600 mb-2">Monitoraggio statico e dinamico</Link>
                        <Link to="/" className="hover:text-red-600 mb-2">Prove di carico statiche e dinamiche</Link>
                        <Link to="/" className="hover:text-red-600 mb-2">Sicurezza nei cantieni</Link>
                        <Link to="/" className="">Geotecnica</Link>
                      </div>
                    </div>
                    <div className="py-2">
                      <Link to="/" className="hover:text-red-600">Diagnostica strutturale</Link>
                    </div>
                    <div className="">
                      <Link to="/" className="hover:text-red-600">Sollevamento ponti e grandi strutture</Link>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <Link to="/" className="px-5 py-2 hover:text-red-600">About</Link>
                </div>
                <div className="flex">
                  <Link to="/" className="px-5 py-2 hover:text-red-600">Service</Link>
                </div>
                <div className="flex">
                  <Link to="/" className="px-5 py-2 hover:text-red-600">Portfolio</Link>
                </div>
                <div className="flex">
                  <Link to="/" className="px-5 py-2 hover:text-red-600">Contact</Link>
                </div>
                <div className="flex items-center pl-5 pt-3">
                  <Link to="/" className="pr-3">IT</Link>
                  <Link to="/" className="border-l border-r border-red-600 px-3">EN</Link>
                  <Link to="/" className="pl-3">FR</Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
}
