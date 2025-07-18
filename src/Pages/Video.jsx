import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Footer from './Footer'
import Instragram from '../Components/Instragram'

export default function Video() {
  return (
    <div>
      <Navbar />
 <div>
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Video</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Video</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* <!-- End Page Title --> */}

      <section className="categories-banner-area pt-100 pb-70">
        <div className="about-content text-center mb-4">
          <span className="sub-title">Effective Solution</span>
          <h2>See the JP Enterprise Solution That Keeps Rats Away</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-categories-box">
                {/* Embedded YouTube Video with inline CSS for 16:9 aspect ratio */}
                <div
                  style={{
                    position: "relative",
                    paddingTop: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                 <video
  src="/assets/pics/video1.mp4"
  controls
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "0",
    objectFit: "cover",
  }}
 preload="metadata"
   
/>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-categories-box">
                {/* Embedded YouTube Video with inline CSS for 16:9 aspect ratio */}
                <div
                  style={{
                    position: "relative",
                    paddingTop: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                <video
  src="/assets/pics/video1.mp4"
  controls
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "0",
    objectFit: "cover",
  }}
  preload="metadata"
  
/>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </section>

     
      </div>
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
