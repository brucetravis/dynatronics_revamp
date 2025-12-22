import React from 'react'
import './Intelligence.css'
import { motion } from 'framer-motion'

export default function Intelligence() {

  const techPoints = [
    {
      title: 'Smart components',
      description: 'Each gadget integrates intelligent design that anticipates user needs.'
    },
    {
      title: 'Embedded intelligence',
      description: 'Hardware and software communicate seamlessly, creating more than the sum of parts.'
    },
    {
      title: 'Robotics & systems thinking',
      description: 'Our approach treats every gadget as part of a larger ecosystem — efficiency, precision, and innovation built in.'
    }
  ]

  return (
    <section
      className='intelligence-section'
    >
       <motion.h3
        className="tech-intelligence-label"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Technology & Intelligence
      </motion.h3>

      <div
        className='tech-points'
      >
        {techPoints.map((point, index) => (
          <motion.div
            key={index}
            className="tech-point-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              delay: 0.2
            }}
          >
            <h4 className='tech-title'>{point.title}</h4>
            <p className='tech-description'>{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
