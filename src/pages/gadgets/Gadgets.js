import React from 'react'
import './Gadgets.css'
import GadgetsHero from './gadgetsHero/GadgetsHero'
import Curated from './curated/Curated'
import FeaturedGadgets from './featuredGadgets/FeaturedGadgets'
import Intelligence from '../intelligence/Intelligence'

export default function Gadgets() {
  return (
    <section>
      <GadgetsHero />
      <Curated />
      <FeaturedGadgets />
      <Intelligence />
    </section>
  )
}
