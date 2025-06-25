import React from 'react'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
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
                                                <img src="assets/img/products/img1.jpg" className="main-image" alt="image" />
                                                <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" />
                                            </a>
                                        </div>
            
                                        <div className="products-content">
                                            <h3><a href="/Productdetails">Long Sleeve Leopard T-Shirt</a></h3>
                                            <div className="price">
                                                <span className="old-price">$321</span>
                                                <span className="new-price">$250</span>
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
                                                <img src="assets/img/products/img2.jpg" className="main-image" alt="image" />
                                                <img src="assets/img/products/img-hover2.jpg" className="hover-image" alt="image" />
                                            </a>
                                        </div>
            
                                        <div className="products-content">
                                            <h3><a href="/Productdetails">Causal V-Neck Soft Raglan</a></h3>
                                            <div className="price">
                                                <span className="old-price">$210</span>
                                                <span className="new-price">$200</span>
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
                                                <img src="assets/img/products/img3.jpg" className="main-image" alt="image" />
                                                <img src="assets/img/products/img-hover3.jpg" className="hover-image" alt="image" />
                                            </a>
                                        </div>
            
                                        <div className="products-content">
                                            <h3><a href="/Productdetails">Hanes Top Men's Pullover</a></h3>
                                            <div className="price">
                                                <span className="old-price">$210</span>
                                                <span className="new-price">$200</span>
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
                                <td>Collection</td>
                                <td>Shirt, New Products, T-Shirt</td>
                                <td>Shirt, New Products, T-Shirt</td>
                                <td>Shirt, New Products, T-Shirt</td>
                            </tr>

                            <tr>
                                <td>Availability</td>
                                <td>In Stock</td>
                                <td>In Stock</td>
                                <td>In Stock</td>
                            </tr>

                            <tr>
                                <td>Material</td>
                                <td>100% Polyester</td>
                                <td>100% Polyester</td>
                                <td>100% Polyester</td>
                            </tr>

                            <tr>
                                <td>Vendor</td>
                                <td>Lacoste</td>
                                <td>Lacoste</td>
                                <td>Lacoste</td>
                            </tr>

                            <tr>
                                <td>SKU</td>
                                <td>00105сd-1</td>
                                <td>00105сd-1</td>
                                <td>00105сd-1</td>
                            </tr>

                            <tr>
                                <td>Color</td>
                                <td>White</td>
                                <td>Black</td>
                                <td>Blue</td>
                            </tr>

                            <tr>
                                <td>Size</td>
                                <td>20</td>
                                <td>22</td>
                                <td>XXL</td>
                            </tr>

                            <tr>
                                <td>Barcode</td>
                                <td>1234567890</td>
                                <td>1234567890</td>
                                <td>1234567890</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        {/* <!-- End Compare Area --> */}
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
