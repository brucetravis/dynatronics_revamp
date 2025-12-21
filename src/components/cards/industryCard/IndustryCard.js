import React from 'react'
import './IndustryCard.css'

export default function IndustryCard({ image, title, description }) {
  return (
    <div
        className='industry-card'
    >
        <img 
            src={image}
            alt={title}
            className='industry-image'
        />

        <div className="overlay">
            <p><strong>{title}</strong> – {description}</p>
        </div>
    </div>
  )
}
