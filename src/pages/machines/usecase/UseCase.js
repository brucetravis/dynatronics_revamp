// import React from 'react'
// import './UseCase.css'
// import UseCaseItem from '../../../components/cards/useitem/UseItem'

// export default function UseCase() {

//     // An array of use cases
//     const useCases = [
//         {
//             title: "Manufacturing Automation",
//             description: "Machines operate 24/7 with precision",
//             image: "https://i.pinimg.com/1200x/5d/66/33/5d6633a6d6dbf818ec0175ca5f147e0b.jpg"
//         },
//         {
//             title: "Precision Assembly",
//             description: "High accuracy for delicate tasks",
//             image: "https://i.pinimg.com/1200x/f5/81/63/f58163681772136bcb9f77baf70904e5.jpg"
//         },
//         {
//             title: "Autonomous Handling",
//             description: "AI-driven logistics solutions",
//             image: "https://i.pinimg.com/736x/a3/d8/1f/a3d81fdc266529454db16b619f36a038.jpg"
//         }
//     ]

//   return (
//     <section
//         className='usecase-section'
//     >
//         <div
//             className='usecase-header'
//         >
//             <p className='usecase-label'>USE CASES</p>
//         </div>

//         <div
//             className='usecase-examples'
//         >
//             {useCases.map((useCase, index) => (
//                 <UseCaseItem 
//                     key={index}
//                     image={useCase.image}
//                     title={useCase.title}
//                     description={useCase.description}
//                 />
//             ))}
//         </div>
//     </section>
//   )
// }


import React from 'react';
import './UseCase.css';
import UseCaseItem from '../../../components/cards/useitem/UseItem';

export default function UseCase() {
    const useCases = [
        {
            id: 1,
            title: "Manufacturing Automation",
            description: "Robots working 24/7 with unmatched precision.",
            image: "https://i.pinimg.com/1200x/5d/66/33/5d6633a6d6dbf818ec0175ca5f147e0b.jpg"
        },
        {
            id: 2,
            title: "Precision Assembly",
            description: "Delicate tasks handled with perfect accuracy.",
            image: "https://i.pinimg.com/1200x/f5/81/63/f58163681772136bcb9f77baf70904e5.jpg"
        },
        {
            id: 3,
            title: "Autonomous Handling",
            description: "AI-driven logistics solutions for modern factories.",
            image: "https://i.pinimg.com/736x/a3/d8/1f/a3d81fdc266529454db16b619f36a038.jpg"
        }
    ];

    return (
        <section className="usecase-section">
            <p className="usecase-label">USE CASES</p>

            <div className="usecase-examples">
                {useCases.map((useCase, index) => (
                    <UseCaseItem
                        key={useCase.id}
                        image={useCase.image}
                        title={useCase.title}
                        description={useCase.description}
                        reverse={index % 2 !== 0} // alternate layout
                    />
                ))}
            </div>
        </section>
    );
}
