import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function TermsandConditions() {
  return (
    <div>
      <Navbar />
          {/* <!-- Start Page Title --> */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Terms and Conditions</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Start Customer Service Area --> */}
      <section className="customer-service-area ptb-100">
        <div className="container">
  <div className="customer-service-content">
  <h3 className="p-0">Terms and Conditions – JP Enterprise</h3>
  <ul>
    <li>📜 By accessing our website, you agree to follow all terms and conditions outlined here.</li>
    <li>⚖️ JP Enterprise reserves the right to update or modify these terms at any time without prior notice.</li>
    <li>🛠️ Unauthorized use, reproduction, or distribution of our content or products is strictly prohibited.</li>
  </ul>
</div>
        </div>
      </section>
      {/* <!-- End Customer Service Area --> */}
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
