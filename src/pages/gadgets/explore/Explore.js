import React from 'react'
import './Explore.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Explore() {

    // useNavigate to navigate to another page
    const navigate = useNavigate()
    
  return (
    <section className="call-to-explore-section">
      <motion.button
        className="explore-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate('/shop')}
      >
        Explore the Collection
      </motion.button>
    </section>
  )
}
