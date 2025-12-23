import React from 'react'
import './UseItem.css'
import { motion } from 'framer-motion'

export default function UseCaseItem({ image, title, description, reverse }) {


  return (
    <motion.section
      className='usecase-item-section'
      initial={{ opacity: 0, y: 50 }} // initially. I want the cards hidden (opacity: 0) and below the normal viewport
      whileInView={{ opacity: 1, y: 0 }} // while viewing the cards, I want the opacity to be visible (opacity: 1) and in the y axis
      viewport={{ once: true }} // only animate the first time it appears, ont on every scroll. This prevents flickering
      transition={{ 
        duration: 0.8, // animation lasts 8 seconds
        ease: "easeOut", //start fast then slow
        delay: 0.2 // wait 0.2 seconds before starting
      }}
    >
      <div
        className={`usecase-item-image ${reverse ? "reverse" : ""}`}
      >
        <img src={image} alt={title} />
      </div>

      <div
        className='usecase-overlay'
      >
        <h3 className='usecase-title'>{title}</h3>
        <p className='usecase-description'>{description}</p>
      </div>

    </motion.section>
  )
}
