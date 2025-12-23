import React from 'react'
import './Capabilities.css'
import CapabilityItem from '../../../components/cards/capabilitiyItem/CapabilityItem'

export default function Capabilities() {



  return (
    <section
      className='capabilities-section'
    >
      <div
        className='capabilities-header'
      >
        <p className='capabilities-label'>Capabilities</p>
      </div>

      <div
        className='capabilities-grid'
      >
        <CapabilityItem title="Autonomous Navigation" />
        <CapabilityItem title="AI-Driven Control" />
        <CapabilityItem title="Industrial Hardware" />
        <CapabilityItem title="Real-Time Vision" />
        <CapabilityItem title="Precision Actuation" />
        <CapabilityItem title="Safety Systems" />
      </div>

    </section>
  )
}
