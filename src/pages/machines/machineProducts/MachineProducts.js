import React from 'react'
import './MachineProducts.css'

export default function MachineProducts() {

  // An array of grid data
  const machineProducts = [
    {
      name: "Flippy – Automated Kitchen Robot",
      image: require("../../../images/product_1.jpg"),
      description: "Robot arm that cooks, flips burgers, and fries, reducing kitchen staff needs.",
      useCase: "Fast food restaurants, small-scale kitchens",
      futurePotential: "Expected to scale rapidly in 5 years, replacing repetitive cooking tasks."
    },
    {
      name: "Universal Robots – Collaborative Cobot",
      image: require("../../../images/product_2.jpg"),
      description: "Small robot that works safely alongside humans for assembly, picking, and packaging.",
      useCase: "Small factories, assembly lines",
      futurePotential: "Flexible automation solution projected to grow in SMEs worldwide."
    },
    {
      name: "Autonomous Mobile Robot (AMR)",
      image: require("../../../images/product_3.jpg"),
      description: "Mobile robot that transports goods inside factories, warehouses, or hotels.",
      useCase: "Logistics, factories, hospitals",
      futurePotential: "Market expected to double in 5 years, replacing manual material handling."
    },
    {
      name: "3D Food Printer",
      image: require("../../../images/product_4.jpg"),
      description: "Printer that creates meals, bakery items, or precise portions automatically.",
      useCase: "Restaurants, catering, bakeries",
      futurePotential: "Niche today, but predicted to scale rapidly in high-demand food sectors."
    }
  ]
  
  return (
    <section
      className='machine-products-section'
    >
      <h2>Machine Models</h2>

      <div
        className='machine-products'
      >
        {machineProducts.map((product, index) => (
          <div
            key={product.id}
            className='product-card'
          >
            <img 
              src={product.image}
              alt={`product ${index}`}
              className='product-image'
            />
            
            <div
              className='product-overlay'
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button
                type='button'
                onClick={() => alert('⚡ Our robots will launch soon! Stay tuned for updates and sneak peeks you won’t want to miss.')}
              >
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
