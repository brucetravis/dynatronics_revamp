import React from 'react'
import './Gadgets.css'
import GadgetsHero from './gadgetsHero/GadgetsHero'
import Curated from './curated/Curated'
import FeaturedGadgets from './featuredGadgets/FeaturedGadgets'

export default function Gadgets() {
  return (
    <section>
      <GadgetsHero />
      <Curated />
      <FeaturedGadgets />
    </section>
  )
}
