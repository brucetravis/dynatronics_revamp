import React, { useEffect, useState } from 'react'
import './GadgetsHero.css'
import { motion } from 'framer-motion'

export default function GadgetsHero() {

  // state to track which gadget is in view
  const [ currentIndex, setCurrentIndex ] = useState(0) // initial state is 0 (the first index)

  // stet to control what happens when images fade in and out
  const [ fadeClass,setFadeClass ] = useState('fade-in') // current state is an image fading in 

  // An array of gadget products
  const gadgets = [
    {
      id: 1,
      gadgetImage: require("../../../images/gadgets/gadget-1.jpg"),
      title: "Designed Beyond Convention",
      statement: "Rare audio technology engineered for those who value form as much as function."
    },
    {
      id: 2,
      gadgetImage: require("../../../images/gadgets/gadget-2.jpg"),
      title: "Precision Meets Portability",
      statement: "A computing experience defined by uncommon design and deliberate engineering"
    },
    {
      id: 3,
      gadgetImage: require("../../../images/gadgets/gadget-3.jpg"),
      title: "Technology, Reimagined",
      statement: "Innovative devices that challenge traditional aesthetics and expectations."
    },
    {
      id: 4,
      gadgetImage: require("../../../images/gadgets/gadget-4.jpg"),
      title: "Built Different",
      statement: "Unconventional hardware crafted for durability, performance, and distinction."
    },
    {
      id: 5,
      gadgetImage: require("../../../images/gadgets/gadget-5.jpg"),
      title: "Curated Innovation",
      statement: "Exclusive technology selected for its uniqueness, not mass appeal."
    },
    {
      id: 6,
      gadgetImage: require("../../../images/gadgets/gadget-6.jpg"),
      title: "Ahead of the Curve",
      statement: "Next-generation gadgets that feel rare because they are."
    }
  ]

  // useEffect to cycle through the images at intervals
  useEffect(() => {
    // function to cycle thorugh the gadgets
    const interval = setInterval(() => {
      setFadeClass('fade-out')
      setTimeout(() => {
        // update the state to cycle
        setCurrentIndex((prev) => prev === gadgets.length - 1 ? 0 : prev + 1)
        setFadeClass('fade-in') // fade in the new text
      }, 500) //half second fade
    }, 5000) //cycle after evey 5 seconds

    // clear the interval when the page unmounts
    return () => clearInterval(interval)

  }, []) // empty dependency array


  return (
    <section
      className='gadgetsHero-section'
    >
      {gadgets.map((gadget, index) => (
          <div
            key={gadget.id}
          >
            <img
              // key={gadget.id}
              src={gadget.gadgetImage}
              alt={gadget.title}
              className={`gadget-image ${
                index === currentIndex ? 'active' : ''
              }`}
            />
          </div>
      ))}


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          delay: 0.2
        }}
        className='gadget-hero-overlay'
      >
        <h1 className={`gadget-title ${fadeClass}`}>{gadgets[currentIndex].title}</h1>
        <p className={`gadget-statement ${fadeClass}`}>{gadgets[currentIndex].statement}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          delay: 0.2
        }}
        className='gadget-dot-container'
      >
        {gadgets.map((_, index) => (
          <span
            key={index}
            className={`gadget-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
        
      </motion.div>
    </section>
  )
}
