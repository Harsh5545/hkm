import React from 'react'
import ContactHero from './ContactHero'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactMap from './ContactMap'
import usePageSeo from '../../components/Meta/Meta';
import image from "/public/course/contactUs.webp"

function Contact() {

    const seoDetails = {
        title: 'Contact Us - HKM Media',
        description: 'Get in touch with us. Reach out for inquiries, support, or collaboration. We are here to assist you!',
        keywords: ['contact us', 'get in touch', 'customer support'],
        ogTitle: 'Contact Us - HKM Media',
        ogDescription: 'Connect with us for any questions, support, or collaboration opportunities. We value your communication!',
        ogImage: image,
    };


    usePageSeo(seoDetails);
    return (
        <div>

            <ContactHero />

            <ContactForm />
            <ContactMap />
        </div>
    )
}

export default Contact