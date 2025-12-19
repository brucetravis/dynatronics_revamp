import React from 'react'
import './Machines.css'
import MachineHero from './hero/MachineHero'
import MachineProducts from './machineProducts/MachineProducts'
// import OurProcess from './ourProcess/OurProcess'

export default function Machines() {
  return (
    <div>
      <MachineHero />
      <MachineProducts />
      {/* <OurProcess /> */}
    </div>
  )
}
