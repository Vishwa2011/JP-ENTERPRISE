import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
// import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function Blog() {
  return (
    <div>
      <Navbar />
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Blog </h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Blog Area --> */}
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="post-image">
            <a href="/Blog">
              <img src="/assets/pics/Rat-in-Car.png" alt="Rat Infestation Prevention" />
            </a>
            <div className="date">
              <span>June 20, 2025</span>
            </div>
          </div>

          <div className="post-content">
            <span className="category">Awareness</span>
            <h3><a href="/Blog">Top 5 Signs You May Have a Rat Problem</a></h3>
            <a href="/BlogDetails" className="details-btn">Read Story</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="post-image">
            <a href="/Blog">
              <img src="/assets/pics/blog2.jpg" alt="Why Rat Repellent is Important" />
            </a>
             <div className="date">
              <span>June 20, 2025</span>
            </div>
          </div>

          <div className="post-content">
            <span className="category">Tips</span>
            <h3><a href="/Blog">Why Every Office Needs a Rat Repellent Device</a></h3>
            <a href="/BlogDetails" className="details-btn">Read Story</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="post-image">
            <a href="/Blog">
              <img src="/assets/pics/Rat-gnawing.png" alt="How ultrasonic repellers work" />
            </a>
             <div className="date">
              <span>June 20, 2025</span>
            </div>
          </div>

          <div className="post-content">
            <span className="category">Technology</span>
            <h3><a href="/Blog">How Ultrasonic Rat Repellent Technology Works</a></h3>
            <a href="/BlogDetails" className="details-btn">Read Story</a>
          </div>
        </div>
      </div>


                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="pagination-area text-center">
                            <a href="#" className="prev page-numbers"><i class='bx bx-chevron-left'></i></a>
                            <span className="page-numbers current" aria-current="page">1</span>
                            <a href="#" className="page-numbers">2</a>
                            <a href="#" className="page-numbers">3</a>
                            <a href="#" className="page-numbers">4</a>
                            <a href="#" className="page-numbers">5</a>
                            <a href="#" className="next page-numbers"><i class='bx bx-chevron-right'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Blog Area --> */}
      <Facility />
      {/* <Instragram /> */}
      <Footer />
    </div>
  )
}
