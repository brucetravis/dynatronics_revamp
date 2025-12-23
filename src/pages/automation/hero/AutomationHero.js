import React from 'react'
import './AutomationHero.css'
import { motion } from 'framer-motion'

export default function AutomationHero() {
  return (
    <section
      className='automation-hero'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8, // animation takes 0.8 seconds
          ease: 'easeOut', // start fast then slow
          delay: 0.2 // delay for 2 seconds before starting
        }}
      >
        <h1>AUTOMATION</h1>

        <motion.div
          className='automation-loading'
        >
          <motion.div
            className='automation-loader'
            initial={{ x: '-100%' }}
            whileInView={{ x: 420 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              ease: 'linear',
              repeat: Infinity
            }}
            
          ></motion.div>
        </motion.div>
      </motion.div>
      
    </section>
  )
}
