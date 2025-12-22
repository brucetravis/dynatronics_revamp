import React, { useEffect } from 'react'
import './Gadgets.css'
import Explore from './explore/Explore'
import Curated from './curated/Curated'
import GadgetsHero from './gadgetsHero/GadgetsHero'
import Intelligence from '../intelligence/Intelligence'
import FeaturedGadgets from './featuredGadgets/FeaturedGadgets'

export default function Gadgets() {

  // useEffect to scroll to the top of the page on mount
  useEffect(() => {
    
    // Ensure the scroll happens after render
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 0)
    
  }, []) // empty dependency array

  return (
    <section>
      <GadgetsHero />
      <Curated />
      <FeaturedGadgets />
      <Intelligence />
      <Explore />
    </section>
  )
}
