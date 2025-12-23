import React from 'react'
import './Machines.css'
import MachineHero from './hero/MachineHero'
import MachineProducts from './machineProducts/MachineProducts'
import Capabilities from './capabilities/Capabilities'
import UseCase from './usecase/UseCase'


export default function Machines() {
  return (
    <div>
      <MachineHero />
      <MachineProducts />
      <Capabilities />
      <UseCase />
    </div>
  )
}
