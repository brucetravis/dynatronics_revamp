import React, { useEffect, useState } from 'react'
import './MachineHero.css'

export default function MachineHero() {

    // state to keep trac of the current element in the array
    const [ currentIndex, setCurrentIndex ] = useState(0) // initial state is (0) the first index
    // state to control what happens when images fade in and out
    const [ fadeClass, setFadeClass ] = useState('fade-in') // initial state is the fade-out class

    // An array of objects of images
    const images = [
        { id: 1, machine: require('../../../images/robot_1.jpg'), title: 'Innovation For Africa', statement: "Precision Machines for the future" },
        { id: 2, machine: require('../../../images/robot_2.jpg'), title: 'Powering Progress', statement: "High-performance machines designed for excellence" },
        { id: 3, machine: require('../../../images/robot_3.jpg'), title: 'Engineering Tomorrow', statement: "Precision machines shaping the future of Africa" }
    ]

    // useEffect to dynamically cycle thorugh the array
    useEffect(() => {
        // function to cycle at intervals
        const interval = setInterval(() => {
            setFadeClass('fade-out') // start fade out
            setTimeout(() => {
                // update the state
                setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
                setFadeClass('fade-in') // fade in the new text
            }, 500) // half second fade
        }, 5000) // cycle after every 5 seconds

        // clear the interval when unmounting
        return () => clearInterval(interval)

    }, []) // empty dependency array


  return (
    <section
        className='machine-hero'
    >
        {images.map((img, index) => (
            <img
                src={img.machine}
                alt={`robotHero`}
                className={`hero-image ${
                    index === currentIndex ? 'active' : ''
                }`}
            />
        ))}

        <div
            className='hero-overlay'
        >
            <h1 className={`hero-title ${fadeClass}`} >{images[currentIndex].title }</h1>
            <p className={`hero-statement ${fadeClass}`}>{images[currentIndex].statement}</p>
        </div>

        <div
            className='dot-container'
        >
            {images.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
                    onClick={() => setCurrentIndex(index)} // on clicking the dots, set cycle the image by the index
                ></span>
            ))}

        </div>

    </section>
  )
}
