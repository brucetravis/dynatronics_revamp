import React, { useEffect, useState } from 'react'
import './Cta.css'
import { Send } from 'lucide-react'

export default function Footer() {

    // state to keep track which place holder is visible
    const [ currentPlaceHolder, setCurrentPlaceHolder ] = useState(0) // initial state is the first index
    
    // An array of placeholders
    const placeHolders = [
        "Do you have make",
        "What can your robots do?",
        "Where are your robots typically used?",
        "Is this suitable for small factories or only large ones?",
        "How customizable are your robots?"
    ]

    // useEffect to cycle thorugh the placeholders
    useEffect(() => {

        // function to cycle through the placeHolders
        const interval = setInterval(() => {
            // update the state
            setCurrentPlaceHolder((prev) => prev === placeHolders.length - 1 ? 0 : prev + 1)

        }, 5000) // cycle after every 5 seconds

        // clean up the intervals
        return () => clearInterval(interval)

    }, []) // empty dependency array

    
  return (
    <section
        className='footer-section'
    >
        <form
            className='cta-container'
        >
            <div className='cta-label'>
                <p>Ask a question</p>
            </div>
            
            <input 
                type='text'
                name='question'
                placeholder={placeHolders[currentPlaceHolder]}
                className='cta-input'
                required
            />

            <button
                type='submit'
                className='submit-btn'
            >
                <Send 
                    size={20}
                />
            </button>
        </form>

        <div>

        </div>

    </section>
  )
}
