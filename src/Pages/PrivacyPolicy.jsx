import React from "react";
import Navbar from "./Navbar";
import Facility from "../Components/Facility";
import Instragram from "../Components/Instragram";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      {/* <!-- Start Page Title --> */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Privacy Policy</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Start Customer Service Area --> */}
      <section className="customer-service-area ptb-100">
        <div className="container">
          <div className="customer-service-content">
            <h3 className="p-0">Privacy Policy – JP Enterprise</h3>
            <p>
              At JP Enterprise, we are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when
              you visit our website.
            </p>

            <h5>🔐 Your Privacy Matters</h5>
            <p>
              We respect your privacy and ensure that your data is handled with
              the highest standards of confidentiality.
            </p>

            <h5>📦 Information Collection</h5>
            <p>
              We may collect personal information such as your name, email
              address, contact number, and shipping address when you:
            </p>
            <ul className='mb-3'>
              <li>Make a purchase</li>
              <li>Contact us through forms</li>
              <li>Subscribe to our newsletter</li>
            </ul>

            <h5>🔒 How We Use Your Information</h5>
            <p>Your information is used to:</p>
            <ul className='mb-3'>
              <li>Process orders and transactions</li>

              <li>Improve customer service and support</li>

              <li>
                Send updates or promotional offers (only with your consent)
              </li>
            </ul>

            <h5>🚫 No Third-Party Sharing</h5>
            <p>
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>

            <h5>🔐 Secure Transactions</h5>
            <p>
              All transactions on JP Enterprise are protected with SSL
              encryption and processed through trusted and secure payment
              gateways.
            </p>

            <h5>📧 Contact Us</h5>
            <p>
              If you have any questions or concerns about your data, feel free
              to contact us at:
            </p>
            <ul>
              <li>
                ✉️ Email: <a href="">jpexport42@gmail.com</a>
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
  );
}
