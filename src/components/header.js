import React from 'react'
import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"

const header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <HeaderDesktop />
      </div>
      <div className="lg:hidden">
        <HeaderMobile />
      </div>
    </>
  )
}

export default header

