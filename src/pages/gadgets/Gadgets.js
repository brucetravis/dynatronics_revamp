import React from 'react'
import './Gadgets.css'
import GadgetsHero from './gadgetsHero/GadgetsHero'
import Curated from './curated/Curated'
import FeaturedGadgets from './featuredGadgets/FeaturedGadgets'
import Intelligence from '../intelligence/Intelligence'
import Explore from './explore/Explore'

export default function Gadgets() {
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
