import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    
    // Array of footer links
    const footerLinks = [
        { id: 1, name: "Privacy & Legal", to: "/privacy" },
        { id: 2, name: "Robots", to: "/" },
        { id: 3, name: "Automation", to: "/automation" },
        { id: 4, name: "gadgets", to: "/gadgets" },
        { id: 5, name: "Vision & Mission", to: "/vision" }
    ]

  return (
    <footer
        className='footer-section'
    >
        <p>Dynatronix@2025</p>

        {footerLinks.map((link, index) => (
            <Link
                to={link.to}
            >
                {link.name}
            </Link>
        ))}
    </footer>
  )
}
