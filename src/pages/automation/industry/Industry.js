import React from 'react'
import './Industry.css'
import { motion } from 'framer-motion'
import IndustryCard from '../../../components/cards/industryCard/IndustryCard'

export default function Industry() {

    // Array of card data
    const industries = [
        {
            id: 1,
            title: 'Logistics & Transport',
            description: 'Routing, sorting, tracking',
            image: "https://i.pinimg.com/736x/6f/eb/5a/6feb5a8b45d3f1f6d40b75a1c8723f53.jpg",
        },
        {
            id: 2,
            title: 'Manufacturing',
            description: 'Precision, repeatability, uptime',
            image: "https://i.pinimg.com/736x/c2/11/ae/c211aebff32d87d785f562f6c5ec3057.jpg",
        },
        {
            id: 3,
            title: 'Security',
            description: 'Monitoring, detection, response',
            image: "https://i.pinimg.com/1200x/e1/02/1a/e1021ae2e1230987dcf0453fdc3f35c5.jpg",
        },
        {
            id: 4,
            title: 'Healthcare',
            description: 'Assistance, data handling, reliability',
            image: "https://i.pinimg.com/736x/a9/91/de/a991de02a398802f28a9427d3a3758e9.jpg",
        },
    ]

  return (
    <section
        className='industry-section'
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
            <h3 className="industry-label">Built for real industries</h3>

            <div className="industry-grid">
                {industries.map((industry) => (
                    <IndustryCard 
                        key={industry.id}
                        title={industry.title}
                        description={industry.description}
                        image={industry.image}
                    />
                ))}
            </div>
        </motion.div>

    </section>
  )
}
