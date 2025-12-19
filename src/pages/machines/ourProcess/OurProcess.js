import React, { useState } from 'react'
import './OurProcess.css'

export default function OurProcess() {

    // state to track the steps
    const [ currentStep, setCurrentStep ] = useState(0) // current state is 0

    // An arrays of the steps
    const steps = [
        { name: "Ideation / Design", icon: "https://i.pinimg.com/736x/35/11/b4/3511b4f432a37f9f070c23a657559c4d.jpg", description: "We design machines that solve real-world problems, from daily tasks to complex operations." },
        { id: 1, name: "Prototyping", icon: "https://i.pinimg.com/736x/b3/74/aa/b374aa5e29481d98d64aa8dd1afccf26.jpg", description: "Create and test prototypes to ensure functionality, safety, and efficiency." },
        { id: 2, name: "Assembly / Build", icon: "https://i.pinimg.com/736x/73/9d/56/739d563f339141d4fcf270653448dd45.jpg", description: "Assemble components carefully, integrating electronics, sensors, and mechanical parts." },
        { id: 3, name: "Testing & Optimization", icon: "https://i.pinimg.com/1200x/61/4c/10/614c100caaa658a27f4fc48d1087529b.jpg", description: "Machines are rigorously tested and optimized for precision, reliability, and safety." },
        { id: 4, name: "Deployment / Usage", icon: "https://i.pinimg.com/736x/34/99/3f/34993f7351c03ceea5c8a153ebd91594.jpg", description: "Deploy the machines wherever needed — homes, labs, hospitals, restaurants, or factories." }
    ];
    

    // function to cycle through the steps
    const nextStep = () => {
        // when cycing forward
        // if the prev (current index) is the last index in the cycle (Arry.length - 1),
        // Move to the first element in the cycle (which is 0, so move to index 0),
        // Otherwise, move to the next element in the cycle 
        setCurrentStep(prev => prev === steps.length - 1 ? 0 : prev + 1)
    }

    // function to cycle through the cards and move a step back
    const prevStep = () => {
        // when cycling back
        // if the prev(current index) is equal to 0 (we are at the first element),
        // Move to the last Item/card in the cycle, otherwise, when cycling back,
        // take the last element and subtract by one eg prev = index 2 - 1 = index 1
        setCurrentStep(prev => prev === 0 ? steps.length - 1 : prev - 1) 
    }

    return (
        <section
            className='ourprocess-section'
        >
            <h3>Our Process</h3>
            <p>Discover how Dynatronics builds and deploys machines that simplify and automate everyday tasks</p>
            
            <div
                className='steps-carousel'
            >
                <div
                    className='steps-track'
                    style={{ transform: `translateX(-${currentStep * 800}px)` }}
                >
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className='step-card'
                        >
                            <img
                                src={step.icon}
                                alt={`step ${index}`}
                                className='step-image'
                            />

                            <div
                                className='step-card-overlay'
                            >
                                <h3>{step.name}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}

                </div>

                <div
                    className='arrows'
                >
                    <button 
                        className="arrow-left"
                        onClick={() => prevStep()}
                    >
                        ◀
                    </button>

                    <button className='arrow-right' 
                        onClick={() => nextStep()}
                    >
                        ▶
                    </button>
                </div>
            </div>
        </section>
    )
}
