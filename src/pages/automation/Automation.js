import React from 'react'
import './Automation.css'
import AutomationHero from './hero/AutomationHero'
import Impact from './impact/Impact'
import Industry from './industry/Industry'
import WhyUs from './whyus/WhyUs'

export default function Automation() {
  return (
    <section>
      <AutomationHero />
      <Impact />
      <Industry />
      <WhyUs />
    </section>
  )
}
