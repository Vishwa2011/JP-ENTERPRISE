import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function OrderView() {
  return (
    <div>
      <Navbar />
      
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
