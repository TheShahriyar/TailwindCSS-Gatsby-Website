import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const DarkenBG = ({children, image}) => {
  return (
    <>
      <BackgroundImage Tag="div" className="w-full relative h-screen">
        {children}
      </BackgroundImage>
    </>
  )
}

const StyledDarkenBG = styled(DarkenBG)`
  &::before,
  &::after {
    filter: invert(
      ${({ isDarken }) => {
        return isDarken ? '80%' : '0%'
      }}
    );
  }
`

export default StyledDarkenBG
