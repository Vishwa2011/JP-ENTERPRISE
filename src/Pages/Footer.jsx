import React from 'react'

export default function Footer() {
  return (
    <div>
     {/* <!-- Start Footer Area --> */}
        <footer className="footer-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>About The Store</h3>

                            <div className="about-the-store">
                                <p>One of the most popular on the web is shopping.</p>
                                <ul className="footer-contact-info">
                                    <li><i class='bx bx-map'></i> <a href="#" target="_blank">Wonder Street, USA, New York</a></li>
                                    <li><i class='bx bx-phone-call'></i> <a href="tel:+01321654214">+01 321 654 214</a></li>
                                    <li><i class='bx bx-envelope'></i> <a href="mailto:hello@xton.com">hello@xton.com</a></li>
                                </ul>
                            </div>

                            <ul className="social-link">
                                <li><a href="https://www.facebook.com/" className="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="https://twitter.com/login" className="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                                <li><a href="https://www.instagram.com/" className="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                                <li><a href="https://www.linkedin.com/login" className="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                                <li><a href="https://www.pinterest.com/" className="d-block" target="_blank"><i class='bx bxl-pinterest-alt'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-4">
                            <h3>Quick Links</h3>

                            <ul className="quick-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/Aboutus">About Us</a></li>
                                <li><a href="/Contact">Contact</a></li>
                                <li><a href="/Faq">FAQ</a></li>
                                <li><a href="/Blog">Blog</a></li>
                               
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Policies</h3>

                            <ul className="customer-support">
                                <li><a href="/Login">Privacy Policy</a></li>
                                <li><a href="checkout.html">Shipping Policy</a></li>
                                <li><a href="cart.html">Return Policy</a></li>
                                <li><a href="faqs.html">Terms and Conditions</a></li>
                                <li><a href="track-order.html">Track Order</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Newsletter</h3>

                            <div className="footer-newsletter-box">
                                <p>To get the latest news and latest updates from us.</p>

                                <form className="newsletter-form" data-bs-toggle="validator">
                                    <label>Your E-mail Address:</label>
                                    <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off" />
                                    <button type="submit">Subscribe</button>
                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <p>© Xton is Proudly Owned by <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul className="payment-types">
                                <li><a href="#" target="_blank"><img src="assets/img/payment/visa.png" alt="image" /></a></li>
                                <li><a href="#" target="_blank"><img src="assets/img/payment/mastercard.png" alt="image" /></a></li>
                                <li><a href="#" target="_blank"><img src="assets/img/payment/mastercard2.png" alt="image" /></a></li>
                                <li><a href="#" target="_blank"><img src="assets/img/payment/visa2.png" alt="image" /></a></li>
                                <li><a href="#" target="_blank"><img src="assets/img/payment/expresscard.png" alt="image" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
        {/* <!-- End Footer Area --> */}
    </div>
  )
}
