import React from 'react'
import './Impact.css'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, CheckCircle, Zap } from 'lucide-react'

export default function Impact() {
  return (
    <section
        className='impact-section'
    >
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: 0.2
            }}
        >
            <h3 className='impact-label'>What Automation changes</h3>

            <div className="impact-grid">
                <div className="impact-item">
                    <Zap
                        size={40}
                        stroke="#0dcaf0"
                        strokeWidth={2}
                        className='impact-icon zap'
                    />
                    <p>Faster workflows through intelligent machines</p>
                </div>

                <div className="impact-item">
                    <CheckCircle
                        size={40} 
                        stroke="#ff6b6b"
                        strokeWidth={2}
                        className='impact-icon checkCircle'
                    />
                    <p>Consistent, error-free operations</p>
                </div>

                <div className="impact-item">
                    <ArrowDown
                        size={40}
                        stroke="#f7b500"  
                        strokeWidth={2}
                        className='impact-icon arrowDown'
                    />
                    <p>Lower operational costs</p>
                </div>

                <div className="impact-item">
                    <ArrowUpRight
                        size={40}
                        stroke="#9ce2f0"
                        strokeWidth={2}
                        className='impact-icon arrowUp'
                    />
                    <p>Scalable systems that grow with demand</p>
                </div>
            </div>

        </motion.div>
    </section>
  )
}
