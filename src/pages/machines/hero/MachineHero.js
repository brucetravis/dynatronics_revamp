import React from 'react'
import './MachineHero.css'

export default function MachineHero() {
  return (
    <section
      className='machine-hero'
    >
      <img
        src={require('../../../images/human_robot_1.jpg')}
        alt='robotHero'
        className='hero-image'
      />

      <div className='hero-overlay'>
        <h1>Innovation For Africa</h1>
        <p>Precision Machines for the future</p>
      </div>
    </section>
  )
}
