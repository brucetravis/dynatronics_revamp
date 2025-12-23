import React from 'react'
import './WhyUs.css'
import { motion } from 'framer-motion'

export default function WhyUs() {

    // An array of why us text
    const whyUsTexts = [
        "Efficiency-first design",
        "AI-driven intelligence",
        "Reliable hardware",
        "Systems, not just machines"
    ]

  return (
    <section
        className='whyus-section'
    >
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                ease: 'easeInOut',
                delay: 0.2
            }}
        >
            <motion.h3 
                className='whyus-label'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Why Us
            </motion.h3>

            <div
                className='whyus-features'
            >
                {whyUsTexts.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -8, scale: 1.02, color: '#0dcaf0' }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2 + index * 0.2,
                            duration: 0.5
                        }}
                        className='feature-card'
                    >
                        {text}
                    </motion.div>
                ))}

            </div>
        </motion.div>

    </section>
  )
}
