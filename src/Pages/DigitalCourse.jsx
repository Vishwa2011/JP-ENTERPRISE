import React from 'react'
import Facility from '../Components/Facility'
import Footer from './Footer'
import Navbar from './Navbar'

export default function DigitalCourse() {
  return (
    <div>
      <Navbar />
 {/* <!-- Start Page Title --> */}
        <div class="page-title-area">
            <div class="container">
                <div class="page-title-content">
                    <h2>Lookbook Grid Full Width (4 in Row)</h2>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>Lookbook</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Lookbook Area --> */}
        <section class="lookbook-area pt-100 pb-70">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item1.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">Multicoloured Technical Trainers</a> $450.00</p>
                                <p><a href="#">Faux Shearling Double Coat</a> $250.00</p>
                                <p><a href="#">Push Up Low Rise Jeans</a> $100.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item2.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">MOLERANI Women's Casual Long</a> $324.00</p>
                                <p><a href="#">Sleeve Round Neck Loose Tunic</a> $541.00</p>
                                <p><a href="#">T-Shirt Blouse King Tops</a> $254.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item3.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">Yidarton Women's Comfy Casual</a> $320.00</p>
                                <p><a href="#">Sleeve Side Twist Knotted Tops</a> $300.00</p>
                                <p><a href="#">Blouse Best Tunic T-Shirts</a> $124.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item4.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">KISSMODA Women's T-Shirt</a> $450.00</p>
                                <p><a href="#">Long Sleeve Button Neck Tunic</a> $250.00</p>
                                <p><a href="#">Sweatshirt Tops Jens Blouse</a> $100.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item5.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">Champion Powerblend Fleece</a> $652.00</p>
                                <p><a href="#">Champion Men's Graphic</a> $542.00</p>
                                <p><a href="#">Fleece Pullover Hoodie</a> $555.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item6.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">Asvivid Womens Cowl Neck Color</a> $84.00</p>
                                <p><a href="#">Block Striped Tunic Sweatshirt</a> $547.00</p>
                                <p><a href="#">Drawstring Pullover Tops Pocket</a> $214.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item7.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">EcoSmart Fleece Hoodie</a> $450.00</p>
                                <p><a href="#">Hanes Men's Full-Zip</a> $250.00</p>
                                <p><a href="#">Fleece Zip Hooded Sweatshirt</a> $100.00</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-lookbook-box">
                            <a href="#"><img src="assets/img/lookbook/item8.jpg" alt="image" /></a>

                            <div class="content">
                                <p><a href="#">Rambling New Womens Sleeve</a> $214.00</p>
                                <p><a href="#">Cowl Neck Tunic Tops Casual</a> $652.00</p>
                                <p><a href="#">Plaid Sweatshirts Pullover Jeans</a> $11.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Lookbook Area --> */}
      <Facility />
      <Footer />
    </div>
  )
}
