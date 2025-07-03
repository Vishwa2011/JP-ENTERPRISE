import React from "react";
import Navbar from "./Navbar";
import Facility from "../Components/Facility";
import Footer from "./Footer";
import Instragram from "../Components/Instragram";

export default function Mission() {
  return (
    <div>
      <Navbar />
      <div>
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Mission</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Mission</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start About Area --> */}
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img
                    src="/assets/pics/mission.jpg"
                    className="shadow"
                    alt="image"
                  />
                
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <span className="sub-title">Our Mission</span>
                  <h2>
                    JP Enterprise – Your Trusted Partner in Rodent Control
                  </h2>
                  <h6>
                    Innovative, Safe, and Effective Ultrasonic Rat Repellent
                    Solutions
                  </h6>

                  <p>
                    At <strong>JP Enterprise</strong>, our mission is to
                    safeguard homes, businesses, warehouses, and vehicles from
                    the hazards of rodent infestation through reliable and
                    eco-friendly technologies.
                  </p>

                  <p>
                    We are dedicated to delivering state-of-the-art ultrasonic
                    repellent devices that are 100% chemical-free, human-safe,
                    and hassle-free — offering a long-term solution for rodent
                    prevention.
                  </p>

                  <p>
                    Our goal is to ensure peace of mind for our customers by
                    providing products that are both powerful and sustainable,
                    helping you avoid costly damage and health risks caused by
                    rodents.
                  </p>

                  <p>
                    Built on a foundation of trust, innovation, and customer
                    satisfaction, JP Enterprise continues to lead the way in
                    smart pest control solutions — making every environment
                    safer and rodent-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Area --> */}
      </div>
      <Facility />
      <Instragram />
      <Footer />
    </div>
  );
}
