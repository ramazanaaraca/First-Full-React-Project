import React from 'react'
import Breadcumb from '../../Components/Breadcumb'
import OurValues from '../../Components/OurValues'
import Contact from '../../Components/Contact'
import { CONTACT_CARD } from '../../data'

const ContactPage = () => {
  return (
    <>
    <Breadcumb
    pageName='Contact Us'
    />
    <OurValues 
    cards={CONTACT_CARD}
    />
    <Contact />
    </>
  )
}

export default ContactPage