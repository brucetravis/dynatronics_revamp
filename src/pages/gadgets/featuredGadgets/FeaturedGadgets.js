import React from 'react'
import './FeaturedGadgets.css'
import { motion } from 'framer-motion'

export default function FeaturedGadgets() {

    const gadgets = [
        {
            id: 1,
            name: 'Auralis One',
            image: 'https://i.pinimg.com/736x/3d/6d/50/3d6d50ac91b385d93f2d7d81604833a7.jpg'
        },
        {
            id: 2,
            name: 'Vector Core',
            image: 'https://i.pinimg.com/1200x/1d/04/77/1d0477a44a7093f7016cb0fdaebf538d.jpg'
        },
        {
            id: 3,
            name: 'Flux Module',
            image: 'https://i.pinimg.com/736x/20/c6/84/20c684a92a30fe23843512b630fab43f.jpg'
        },
        {
            id: 4,
            name: 'Obsidian X',
            image: 'https://i.pinimg.com/736x/8a/b2/fe/8ab2fea7a094725d24c1fd989d20fd47.jpg'
        },
        {
            id: 5,
            name: 'Nomad Edge',
            image: 'https://i.pinimg.com/736x/3c/35/b5/3c35b58376bcdee247b11587bd67434f.jpg'
        },
        {
            id: 6,
            name: 'Axis Prime',
            image: 'https://i.pinimg.com/1200x/70/3d/e0/703de05a5454af02e026238a812b1809.jpg'
        }
    ]

    
    return (
        <section
            className="featured-gadgets-section"
        >
            <h3 className='featured-gadgets-label'>Featured Gadgets</h3>
            
            <motion.div
                className="featured-gadgets-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                    delay: 0.3
                }}
            >
                {gadgets.map((gadget, index) => (
                    <div
                        className='gadget-card'
                    >
                        <div
                            className='gadget-image-wrapper'
                        >
                            <img
                                src={gadget.image}
                                alt={gadget.name}

                            />
                        </div>

                        <h3 className='gadget-name'>{gadget.name}</h3>

                    </div>
                ))}
            </motion.div>
        </section>
    )
}
