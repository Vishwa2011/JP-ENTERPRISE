import React from 'react'
import Facility from '../Components/Facility'
import Footer from './Footer'
import Navbar from './Navbar'


const lookbookItems = [
  {
    id: 1,
    img: "/assets/pics/book1.png",
    label: "Vikas Patel",
    title: "Rat Guard User Guide",
    price: "₹200",
  },
  {
    id: 2,
    img: "/assets/pics/book2.png",
    label: "Mahesh Shah",
    title: "Ultrasonic Repeller Handbook",
    price: "₹200",
  },
  {
    id: 3,
    img: "/assets/pics/book3.png",
    label: "Hari Mehta",
    title: "Home Safety Manual",
    price: "₹200",
  },
  {
    id: 4,
    img: "/assets/pics/book4.png",
    label: "Prit Vora",
    title: "Technical Attribute Guide",
    price: "₹200",
  },
];

export default function DigitalCourse() {
  return (
    <div>
      <Navbar />
 {/* <!-- Start Page Title --> */}
        <div class="page-title-area">
            <div class="container">
                <div class="page-title-content">
                    <h2>Digital Course</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Digital Course</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Lookbook Area --> */}
        <section className="lookbook-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="row justify-content-center">
          {lookbookItems.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <div className="single-lookbook-box">
                <a href="/DigitalCourseDetails">
                  <img src={item.img} alt="image" />
                </a>
                <div className="content" style={{ textAlign: "center" }}>
                  <p>{item.label}</p>
                  <h5>
                    <a href="/DigitalCourseDetails">{item.title}</a>
                  </h5>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* <!-- End Lookbook Area --> */}
      <Facility />
      <Footer />
    </div>
  )
}
