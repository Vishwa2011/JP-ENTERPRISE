import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function ShippingPolicy() {
  return (
    <div>
      <Navbar />
        {/* <!-- Start Page Title --> */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Shipping Policy</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Shipping Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Start Customer Service Area --> */}


     <section className="customer-service-area ptb-100">
  <div className="container">
    <div className="customer-service-content">
      <h3 className="p-0">Shipping Policy – JP Enterprise</h3>
      <p>
        At JP Enterprise, we aim to deliver your products in a timely and secure manner. This Shipping Policy outlines our shipping methods, timelines, costs, and more.
      </p>

      <h5>Shipping Methods</h5>
      <p>
        We offer multiple shipping options including Standard, Express, and Same-Day delivery depending on your location and availability.
      </p>

      <h5>Shipping Times</h5>
      <p>
        Our estimated delivery times are as follows:
      </p>
      <ul className="mb-3">
        <li>Standard Delivery: 3–7 business days</li>
        <li>Express Delivery: 1–2 business days</li>
        <li>Same-Day Delivery: Available in select locations</li>
      </ul>

      <h5>Shipping Charges</h5>
      <p>
        Shipping charges are calculated at checkout based on your order value, location, and selected shipping method. Free shipping may be offered during promotional periods.
      </p>

      <h5>Order Tracking</h5>
      <p>
        Once your order has been shipped, you will receive a tracking link via email to monitor your shipment in real-time.
      </p>

      <h5>International Shipping</h5>
      <p>
        Yes, we ship internationally. Shipping costs and delivery times may vary by destination country.
      </p>

      <h5>Need Help?</h5>
      <p>
        If you have any questions regarding shipping, feel free to contact us at:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:jpexport42@gmail.com">jpexport42@gmail.com</a>
        </li>
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
