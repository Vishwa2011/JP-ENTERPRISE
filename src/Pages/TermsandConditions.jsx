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
      <h3 className="p-0">Terms & Conditions – JP Enterprise</h3>
      <p>
        Welcome to JP Enterprise. By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
      </p>

      <h5>1. Use of the Website</h5>
      <p>
        You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.
      </p>

      <h5>2. Product Information</h5>
      <p>
        We strive to provide accurate product descriptions and images. However, we do not warrant that all product details are always accurate, complete, or error-free.
      </p>

      <h5>3. Orders and Payments</h5>
      <p>
        By placing an order, you agree to provide accurate and complete information. All payments must be made through our authorized and secure payment methods.
      </p>

      <h5>4. Pricing</h5>
      <p>
        All prices are listed in INR (₹) and are subject to change without notice. Prices do not include shipping or taxes unless specified.
      </p>

      <h5>5. Intellectual Property</h5>
      <p>
        All content on this website, including text, images, logos, and graphics, is the property of JP Enterprise and is protected by intellectual property laws. You may not use any content without prior written permission.
      </p>

      <h5>6. Limitation of Liability</h5>
      <p>
        JP Enterprise shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the website or services.
      </p>

      <h5>7. Account Responsibility</h5>
      <p>
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </p>

      <h5>8. Termination</h5>
      <p>
        We reserve the right to terminate or suspend access to our services at our sole discretion, without prior notice, for conduct that we believe violates these Terms.
      </p>

      <h5>9. Changes to Terms</h5>
      <p>
        We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the site after changes constitutes acceptance of the new terms.
      </p>

      <h5>10. Contact Us</h5>
      <p>
        If you have any questions about these Terms & Conditions, please contact us:
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
