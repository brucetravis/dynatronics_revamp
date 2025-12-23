import React, { useEffect, useRef, useState } from 'react'
import './Connect.css'
import emailjs from '@emailjs/browser';

export default function Connect() {

  // state to update the formData
  const [ formData, setFormData ] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  }) // initial state is an object
  
  // state to send the email
  const [ loading, setLoading ] = useState(false) // initial state is false
  
  useEffect(() => {
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID)
    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
  }, [])

  // A form reference
  const formRef = useRef()

  // function to handle the change of characters
  const handleChange = (e) => {
    // destructure to obtain the name and the value
    const { name, value } = e.target
    
    // update the state when typing each character
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // function to submit the form
  const handleSubmit = (e) => {
    // prevent the normal page reload
    e.preventDefault()

    // update the loading state to true
    setLoading(true)

    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID)
    console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('Email sent successfully.')
      alert('Email sent successfully.')

      // clear the inputs
      setFormData(({
        user_name: "",
        user_email: "",
        user_message: ""
      }))
    })
    .catch((error) => {
      console.log('Error sending email: ', error)
    })
    .finally(() => {
      // stop loading in both success and error
      setLoading(false)
    })
  }

  return (
    <section
      className='connect-section'
    >

      <div className="connect-container">
        <h1 className='connect-label'>Let’s Connect</h1>
        <p>Reach out for partnerships, demos, or general inquiries.</p>

        <form 
          ref={formRef} 
          className="connect-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your name"
            name='user_name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Your email"
            name='user_email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="5"
            placeholder="Your message"
            name='user_message'
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {loading ? "Sending Message...": "Send Message"}
          </button>
        </form>

      </div>
    </section>
  )
}
