import React from 'react'
import Hero from './Sections/Hero'
import Work from './Sections/Work'
import Stats from './Sections/Stats'
import { Hire } from './Sections/Hire'
import { Footer } from './Sections/Footer'

export default function HomePage() {
  return (
    <>
        <Hero />
        <Stats />
        <Work />
        {/* <Hire /> */}
        <Footer />
    </>
  )
}
