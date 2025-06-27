import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
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
                                <a href="#">
                                    <img src="assets/img/blog/img1.jpg" alt="image" />
                                </a>
                                <div className="date">
                                    <span>January 29, 2024</span>
                                </div>
                            </div>

                            <div className="post-content">
                                <span className="category">Ideas</span>
                                <h3><a href="#">The #1 eCommerce blog to grow your business</a></h3>
                                <a href="/BlogDetails" className="details-btn">Read Story</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <a href="#">
                                    <img src="assets/img/blog/img2.jpg" alt="image" />
                                </a>
                                <div className="date">
                                    <span>January 29, 2024</span>
                                </div>
                            </div>

                            <div className="post-content">
                                <span className="category">Advice</span>
                                <h3><a href="#">Latest ecommerce trend: The rise of shoppable posts</a></h3>
                                <a href="/BlogDetails" className="details-btn">Read Story</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <a href="#">
                                    <img src="assets/img/blog/img3.jpg" alt="image" />
                                </a>
                                <div className="date">
                                    <span>January 29, 2024</span>
                                </div>
                            </div>

                            <div className="post-content">
                                <span className="category">Social</span>
                                <h3><a href="#">Building eCommerce wave: Social media shopping</a></h3>
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
      <Instragram />
      <Footer />
    </div>
  )
}
