import React from 'react'
import './CapabilityItem.css'
import { Cpu, Eye, HardDrive, Navigation, Shield, Target } from 'lucide-react'

export default function CapabilityItem({ title }) {
  
  // iconMap
  const iconMap = {
    "Autonomous Navigation": <Navigation size={28} />,
    "AI-Driven Control": <Cpu size={28} />,
    "Industrial Hardware": <HardDrive size={28} />,
    "Real-Time Vision": <Eye size={28} />,
    "Precision Actuation": <Target size={28} />,
    "Safety Systems": <Shield size={28} />
  }
  
  return (
    <div
        className='capability-item'
    >
      <div 
        className='capability-icon'
      >
        {iconMap[title]}
      </div>

      <h3 className="capability-title">{ title }</h3>
    </div>
  )
}
