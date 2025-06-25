import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
       {/* <!-- Start Main Banner Area --> */}
        <div className="home-slides-three owl-carousel owl-theme">
            <div className="hero-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <span className="sub-title">Limited Time Offer!</span>
                                        <h1>Winter-Spring!</h1>
                                        <p>Take 20% Off ‘Sale Must-Haves'</p>
                                        <div className="btn-box">
                                            <a href="products-left-sidebar-3.html" className="default-btn">Shop Women's</a>
                                            <a href="products-left-sidebar-3.html" className="optional-btn">Shop Men's</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-image">
                                        <div className="circle"></div>
                                        <img src="assets/img/banner-img2.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <span className="sub-title">Exclusive Offer!</span>
                                        <h1>Summer-Fashion!</h1>
                                        <p>Leap year offer ‘Sale Must-Haves'</p>
                                        <div className="btn-box">
                                            <a href="products-left-sidebar-3.html" className="default-btn">Shop Women's</a>
                                            <a href="products-left-sidebar-3.html" className="optional-btn">Shop Men's</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-image">
                                        <div className="circle"></div>
                                        <img src="assets/img/banner-img1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Main Banner Area --> */}
    </div>
   
  )
}

export default Home
