import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Facility from "../Components/Facility";
import Instragram from "../Components/Instragram";
import Footer from "./Footer";

export default function Checkout() {
    const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isApplied, setIsApplied] = useState(false);

  const productTotal = 3341 + 3421;
  const shipping = 300;
  const subtotal = productTotal;
  const discountedTotal = subtotal - discount + shipping;

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(500);
      setIsApplied(true);
    } else {
      setDiscount(0);
      setIsApplied(false);
      Swal.fire({
        icon: "error",
        title: "Invalid Promo Code",
        text: "Please enter a valid promo code.",
        confirmButtonColor: "#3085d6",
      });
    }
      setPromoCode("");
  };
  return (
    <div>
      <Navbar />
      {/* <!-- Start Page Title --> */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Checkout</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Checkout</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Start Checkout Area --> */}
      <section className="checkout-area ptb-100">
        <div className="container">
          <div className="user-actions">
            <i class="bx bx-log-in"></i>
            <span>
              Returning customer? <a href="/Login">Click here to login</a>
            </span>
          </div>

          <form>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="billing-details">
                  <h3 className="title">Billing Details</h3>

                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Country <span className="required">*</span>
                        </label>

                        <div className="select-box">
                          <select className="form-control" >
                                                    <option>United Arab Emirates</option>
                                                    <option>China</option>
                                                    <option>United Kingdom</option>
                                                    <option>Germany</option>
                                                    <option>France</option>
                                                    <option>Japan</option>
                                                </select>
                        
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="create-an-account"
                        />
                        <label
                          className="form-check-label"
                          for="create-an-account"
                        >
                          Create an account?
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ship-different-address"
                        />
                        <label
                          className="form-check-label"
                          for="ship-different-address"
                        >
                          Ship to a different address?
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="notes"
                          id="notes"
                          cols="30"
                          rows="5"
                          placeholder="Order Notes"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="order-details">
                  <h3 className="title">Your Order</h3>

       <div className="order-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="product-name">
                <a href="#">rat repellent machine</a>
              </td>
              <td className="product-total">
                <span className="subtotal-amount">₹3341</span>
              </td>
            </tr>

            <tr>
              <td className="product-name">
                <a href="#">rat repellent machine</a>
              </td>
              <td className="product-total">
                <span className="subtotal-amount">₹3421</span>
              </td>
            </tr>

            <tr>
              <td className="order-subtotal">
                <span>Cart Subtotal</span>
              </td>
              <td className="order-subtotal-price">
                <span className="order-subtotal-amount">₹{subtotal}</span>
              </td>
            </tr>

            {isApplied && (
              <tr>
                <td className="order-discount">
                  <span>Promo Discount <span style={{color:'#f53f85'}}>(SAVE10)</span></span>
                </td>
                <td className="discount-price">
                  <span className="text-success">- ₹{discount}</span>
                </td>
              </tr>
            )}

            <tr>
              <td className="order-shipping">
                <span>Shipping</span>
              </td>
              <td className="shipping-price">
                <span>₹{shipping.toFixed(2)}</span>
              </td>
            </tr>

            <tr>
              <td className="total-price">
                <span>Order Total</span>
              </td>
              <td className="product-subtotal">
                <span className="subtotal-amount">₹{discountedTotal}</span>
              </td>
            </tr>
            <tr>
              <td><input
          type="text"
          className="form-control"
          placeholder="Enter Promo Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        /></td>
        <td><button
          type="button"
          className="btn btn-success"
          onClick={handleApplyPromo}
        >
          {isApplied ? "Applied" : "Apply"}
        </button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Promo Code Section */}
      {/* <div className="promo-code-section mt-3 d-flex flex-wrap align-items-center gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Promo Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          style={{ maxWidth: "250px" }}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleApplyPromo}
        >
          {isApplied ? "Applied" : "Apply"}
        </button>
      </div> */}

                  <div className="payment-box">
                    <div className="payment-method">
                      <p>
                        <input
                          type="radio"
                          id="direct-bank-transfer"
                          name="radio-group"
                          
                        />
                        <label for="direct-bank-transfer">
                          Direct Bank Transfer
                        </label>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                      <p>
                        <input type="radio" id="paypal" name="radio-group" />
                        <label for="paypal">PayPal</label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="ccc"
                          name="radio-group"
                        />
                        <label for="cash-on-delivery">Cash on Delivery</label>
                      </p>
                    </div>

                    <a href="#" className="default-btn">
                      Place Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* <!-- End Checkout Area --> */}
      <Facility />
      {/* <Instragram /> */}
      <Footer />
    </div>
  );
}
