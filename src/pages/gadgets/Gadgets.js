import React from 'react'
import './Gadgets.css'
import GadgetsHero from './gadgetsHero/GadgetsHero'
import Curated from './curated/Curated'

export default function Gadgets() {
  return (
    <section>
      <GadgetsHero />
      <Curated />
    </section>
  )
}
