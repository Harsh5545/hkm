import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactMap from './ContactMap'

function Contact() {
  return (
    <div><ContactHero />
    
      <ContactForm />
      <ContactMap />
    </div>
  )
}

export default Contact