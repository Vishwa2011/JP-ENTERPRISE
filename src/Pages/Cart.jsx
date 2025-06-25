import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function Cart() {
  return (
    <div>
      <Navbar />
      {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Cart</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Cart Area --> */}
		<section className="cart-area ptb-100">
            <div className="container">
                <form>
                    <div className="cart-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="product-thumbnail">
                                        <a href="#">
                                            <img src="assets/img/products/img1.jpg" alt="item" />
                                        </a>
                                    </td>

                                    <td className="product-name">
                                        <a href="#">Long Sleeve Leopard T-Shirt</a>
                                        <ul>
                                            <li>Color: <span>Light Blue</span></li>
                                            <li>Size: <span>XL</span></li>
                                            <li>Material: <span>Cotton</span></li>
                                        </ul>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$250.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i class='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i class='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$250.00</span>

                                        <a href="#" className="remove"><i class='bx bx-trash'></i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <a href="#">
                                            <img src="assets/img/products/img2.jpg" alt="item" />
                                        </a>
                                    </td>

                                    <td className="product-name">
                                        <a href="#">Causal V-Neck Soft Raglan</a>
                                        <ul>
                                            <li>Color: <span>Light Blue</span></li>
                                            <li>Size: <span>XL</span></li>
                                            <li>Material: <span>Cotton</span></li>
                                        </ul>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$200.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i class='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i class='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$200.00</span>

                                        <a href="#" className="remove"><i class='bx bx-trash'></i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <a href="#">
                                            <img src="assets/img/products/img3.jpg" alt="item" />
                                        </a>
                                    </td>

                                    <td className="product-name">
                                        <a href="#">Hanes Men's Pullover</a>
                                        <ul>
                                            <li>Color: <span>Light Blue</span></li>
                                            <li>Size: <span>XL</span></li>
                                            <li>Material: <span>Cotton</span></li>
                                        </ul>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$200.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i class='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i class='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$200.00</span>

                                        <a href="#" className="remove"><i class='bx bx-trash'></i></a>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <a href="#">
                                            <img src="assets/img/products/img4.jpg" alt="item"  />
                                        </a>
                                    </td>

                                    <td className="product-name">
                                        <a href="#">Gildan Men's Crew T-Shirt</a>
                                        <ul>
                                            <li>Color: <span>Light Blue</span></li>
                                            <li>Size: <span>XL</span></li>
                                            <li>Material: <span>Cotton</span></li>
                                        </ul>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$150.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i class='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i class='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$150.00</span>

                                        <a href="#" className="remove"><i class='bx bx-trash'></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="cart-buttons">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-7 col-sm-7 col-md-7">
                                <a href="#" className="optional-btn">Continue Shopping</a>
                            </div>

                            <div className="col-lg-5 col-sm-5 col-md-5 text-end">
                                <a href="#" className="default-btn">Update Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="cart-totals">
                        <h3>Cart Totals</h3>

                        <ul>
                            <li>Subtotal <span>$800.00</span></li>
                            <li>Shipping <span>$30.00</span></li>
                            <li>Total <span>$830.00</span></li>
                        </ul>
                        
                        <a href="#" className="default-btn">Proceed to Checkout</a>
                    </div>
                </form>
            </div>
        </section>
        {/* <!-- End Cart Area --> */}
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
