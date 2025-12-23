import React, { useEffect } from 'react'
import './Automation.css'
import AutomationHero from './hero/AutomationHero'
import Impact from './impact/Impact'
import Industry from './industry/Industry'
import WhyUs from './whyus/WhyUs'

export default function Automation() {
  
  // useEffect to scroll to the top of the screen on mount
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 0)

  }, []) // empty dependency array
  
  return (
    <section>
      <AutomationHero />
      <Impact />
      <Industry />
      <WhyUs />
    </section>
  )
}
