import React from 'react'
import Facility from '../Components/Facility'
// import Instragram from '../Components/Instragram'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Compare() {
  return (
    <div>
      <Navbar />

        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Compare Products</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Compare</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Compare Area --> */}
        <section className="compare-area ptb-100">
            <div className="container">
                <div className="products-compare-table table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Products</td>
                                <td>
                                    <div className="remove-btn">
                                        <a href="#" className="remove"><i class='bx bx-trash'></i></a>
                                    </div>

                                    <div className="single-products-box">
                                        <div className="products-image">
                                            <a href="/Productdetails">
                                                <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                                <img src="/assets/pics/speaker.jpg" className="hover-image" alt="image" />
                                            </a>
                                        </div>
            
                                        <div className="products-content">
                                            <h3><a href="/Productdetails">High-Powered Ultrasonic </a></h3>
                                            <div className="price">
                                                <span className="old-price">₹9,999</span>
                                                <span className="new-price">₹3,331</span>
                                            </div>
                                            <div className="star-rating">
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                            </div>
                                            <a href="/Cart" className="add-to-cart">Add to Cart</a>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="remove-btn">
                                        <a href="#" className="remove"><i class='bx bx-trash'></i></a>
                                    </div>

                                    <div className="single-products-box">
                                        <div className="products-image">
                                            <a href="/Productdetails">
                                                <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                                <img src="/assets/pics/speaker2.jpg" className="hover-image" alt="image" />
                                            </a>
                                        </div>
            
                                        <div className="products-content">
                                            <h3><a href="/Productdetails">Smart Ultrasonic </a></h3>
                                            <div className="price">
                                                <span className="old-price">₹9,999</span>
                                                <span className="new-price">₹3,331</span>
                                            </div>
                                            <div className="star-rating">
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                            </div>
                                            <a href="/Cart" className="add-to-cart">Add to Cart</a>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="remove-btn">
                                        <a href="#" className="remove"><i class='bx bx-trash'></i></a>
                                    </div>

                                    <div className="single-products-box">
                                        <div className="products-image">
                                            <a href="/Productdetails">
                                                <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                                <img src="/assets/pics/speaker 3.jpg" className="hover-image" alt="image" />
                                            </a>
                                        </div>
            
                                        <div className="products-content">
                                            <h3><a href="/Productdetails">High-Frequency Ultrasonic </a></h3>
                                             <div className="price">
                                                <span className="old-price">₹9,999</span>
                                                <span className="new-price">₹3,331</span>
                                            </div>
                                            <div className="star-rating">
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                            </div>
                                            <a href="/Cart" className="add-to-cart">Add to Cart</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Brand</td>
                                <td>Generic</td>
                                <td>Generic</td>
                                <td>Generic</td>
                            </tr>

                            <tr>
                                <td>Colour</td>
                                <td>Black</td>
                                <td>Black</td>
                                <td>Black</td>
                            </tr>

                            <tr>
                                <td>Style</td>
                                <td>modern</td>
                                <td>modern</td>
                                <td>modern</td>
                            </tr>

                            <tr>
                                <td>Vendor</td>
                                <td>Lacoste</td>
                                <td>Lacoste</td>
                                <td>Lacoste</td>
                            </tr>

                            <tr>
                                <td>Dimensions</td>
                                <td>5L x 10W x 10H Centimeters</td>
                                <td>10L x 15W x 15H Centimeters</td>
                                <td>15L x 15W x 15H Centimeters</td>
                            </tr>

                            <tr>
                                <td>Item Weight</td>
                                <td>650 Grams</td>
                                <td>750 Grams</td>
                                <td>850 Grams</td>
                            </tr>

                           
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        {/* <!-- End Compare Area --> */}
      <Facility />
      {/* <Instragram /> */}
      <Footer />
    </div>
  )
}
