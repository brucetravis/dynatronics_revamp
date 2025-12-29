import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {

    const privacyPolicyLink = () => {
        alert("Our privacy policy terms will be updated shortly.")
    }

    const visionAndMissionLink = () => {
        alert("Our privacy & legal terms will be updated shortly.")
    }
    
    // Array of footer links
    const footerLinks = [
        { id: 1, name: "Privacy & Legal", onClick: privacyPolicyLink },
        { id: 2, name: "Robots", to: "/" },
        { id: 3, name: "Automation", to: "/automation" },
        { id: 4, name: "gadgets", to: "/gadgets" },
        { id: 5, name: "Vision & Mission", onClick: visionAndMissionLink }
    ]

  return (
    <footer
        className='footer-section'
    >
        <p>Dynatronix@2025</p>

        {footerLinks.map((link, index) => (
            <Link
                key={link.id}
                to={link.to || "#"}
                onClick={link.onClick}
            >
                {link.name}
            </Link>
        ))}
    </footer>
  )
}
