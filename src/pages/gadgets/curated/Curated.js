import React from 'react'
import './Curated.css'
import { motion } from 'framer-motion'

export default function Curated() {
  return (
    <section
        className='curated-section'
    >
        <motion.div
            className='curated-content'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.2
            }}
        >
            <p className="curated-line strong">
                We don’t sell everything.
            </p>

            <p className="curated-line">
                We curate rare technology defined by design, intention, and intelligence.
            </p>

            <p className="curated-line muted">
                Every gadget is selected because it stands out — not because it sells fast.
            </p>
        </motion.div>

    </section>
  )
}
