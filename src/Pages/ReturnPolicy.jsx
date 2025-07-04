import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function ReturnPolicy() {
  return (
    <div>
      <Navbar />
          {/* <!-- Start Page Title --> */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Return Policy</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Start Customer Service Area --> */}
     <section className="customer-service-area ptb-100">
  <div className="container">
    <div className="customer-service-content">
      <h3 className="p-0">Return Policy – JP Enterprise</h3>
      <p>
        At JP Enterprise, customer satisfaction is our priority. If you're not completely satisfied with your purchase, we're here to help.
      </p>

      <h5>Eligibility for Returns</h5>
      <p>
        You may return most new, unopened items within 7 days of delivery for a full refund or replacement. Items must be in their original condition and packaging.
      </p>

      <h5>Non-Returnable Items</h5>
      <ul className="mb-3">
        <li>Custom or personalized products</li>
        <li>Items that have been used or damaged by the customer</li>
        <li>Items marked as "Final Sale"</li>
      </ul>

      <h5>How to Initiate a Return</h5>
      <p>
        To start a return, please contact our support team at the email below. Make sure to include your order number and reason for the return.
      </p>

      <h5>Refunds</h5>
      <p>
        Once your return is received and inspected, your refund will be processed within 5–7 business days. The refund will be issued to your original payment method.
      </p>

      <h5>Return Shipping</h5>
      <p>
        Return shipping costs are the responsibility of the customer unless the item received was incorrect or defective.
      </p>

      <h5>Contact Us</h5>
      <p>
        If you have any questions regarding returns, feel free to reach out to us at:
      </p>
      <ul>
        <li>Email: <a href="mailto:jpexport42@gmail.com">jpexport42@gmail.com</a></li>
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
