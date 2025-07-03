import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Facility from "../Components/Facility";
import Instragram from "../Components/Instragram";
const images = [
  "/assets/pics/book1.png",
  "/assets/pics/book2.png",
  "/assets/pics/book3.png",
  "/assets/pics/book4.png",
     
];
const DigitalCourseDetails = () => {
  const [imgId, setImgId] = useState(1);
  const showcaseRef = useRef(null);
  const zoomRef = useRef(null);
  const [zoomStyles, setZoomStyles] = useState({});
  const [isZoomVisible, setIsZoomVisible] = useState(false);

  const slideImage = () => {
    const displayWidth = showcaseRef.current?.children[0].clientWidth;
    if (displayWidth && showcaseRef.current) {
      showcaseRef.current.style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`;
    }
  };

  useEffect(() => {
    slideImage();
    window.addEventListener("resize", slideImage);
    return () => window.removeEventListener("resize", slideImage);
  }, [imgId]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setZoomStyles({
      backgroundImage: `url(${images[imgId - 1]})`,
      backgroundPosition: `${bgX}% ${bgY}%`,
      display: "block",
      top: y - 100,
      left: x + 20,
    });
  };
  const [count, setCount] = useState(1);
  const min = 1;
  const max = 10;

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    // Tabs
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
    $(".tab ul.tabs li a")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        const $tab = $(this).closest(".tab");
        const index = $(this).closest("li").index();

        $tab.find("ul.tabs > li").removeClass("current");
        $(this).closest("li").addClass("current");

        $tab.find(".tab-content .tabs-item").slideUp(0);
        $tab.find(".tab-content .tabs-item").eq(index).slideDown(0);
      });

    // Accordion
    $(".accordion").each(function () {
      const $accordion = $(this);
      $accordion
        .find(".accordion-title")
        .off("click")
        .on("click", function (e) {
          e.preventDefault();

          const $this = $(this);
          $this.toggleClass("active");
          $this.next(".accordion-content").slideToggle("fast");

          $accordion
            .find(".accordion-content")
            .not($this.next())
            .slideUp("fast");

          $accordion.find(".accordion-title").not($this).removeClass("active");
        });
    });
  }, []);
  return (
    <>
      <Navbar />
      <div>
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Digital Course Details</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Digital Course Details</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Product Details Area --> */}
        <section className="product-details-area pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-12">
                <div className="product-imgs">
                  <div
                    className="img-display zoom-container"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsZoomVisible(true)}
                    onMouseLeave={() => setIsZoomVisible(false)}
                  >
                    <div className="img-showcase" ref={showcaseRef}>
                      {images.map((src, index) => (
                        <img key={index} src={src} alt={`shoe ${index + 1}`} />
                      ))}
                    </div>

                    {isZoomVisible && (
                      <div className="zoom-lens" style={zoomStyles}></div>
                    )}
                  </div>

                  <div className="img-select">
                    {images.map((src, index) => (
                      <div className="img-item" key={index}>
                        <button
                          onClick={() => setImgId(index + 1)}
                          style={{
                            border: "none",
                            background: "transparent",
                            padding: 0,
                          }}
                        >
                          <img src={src} alt={`shoe thumb ${index + 1}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="products-details-desc">
                  <h3>Ultrasonic Repeller Handbook</h3>
                  <p>Author(s): Vikas Patel</p>
                  <div className="price">
                    <span className="new-price">₹200</span>
                  </div>

                  <div className="products-add-to-cart">
                    <a href="/Cart">
                      {" "}
                      <button
                        type="submit"
                        className="default-btn "
                        style={{ marginRight: "10px" }}
                      >
                        <i className="fas fa-cart-plus"></i> Add to Cart
                      </button>
                    </a>
                    <a href="">
                      {" "}
                      <button
                        type="submit"
                        className="default-btn "
                        style={{ marginRight: "10px" }}
                      >
                        <i className="fas fa-shopping-cart"></i> Buy Now
                      </button>
                    </a>
                  </div>

                  {/* <div className="wishlist-compare-btn">
                    <a href="#" className="optional-btn">
                      <i className="bx bx-heart"></i> Add to Wishlist
                    </a>
                    <a href="/Compare" className="optional-btn">
                      <i className="bx bx-refresh"></i> Add to Compare
                    </a>
                  </div> */}

                  <div className="products-details-accordion">
                    <ul className="accordion">
                      <li className="accordion-item">
                        <a
                          className="accordion-title active"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="bx bx-chevron-down"></i>
                          Book Info
                        </a>
                        <div className="accordion-content show">
                          <ul>
                            <li>
                              <b>Language:</b> English
                            </li>
                            <li>
                              <b>ISBN13:</b>9789369261864
                            </li>
                            <li>
                              <b>ISBN10:</b> 9369261869
                            </li>
                            <li>
                              <b>Format:</b> Paperback
                            </li>
                            <li>
                              <b>Trim:</b> 5x8
                            </li>
                            <li>
                              <b>Pages:</b> 115
                            </li>
                            <li>
                              <b>Publication date:</b> 17-Jun-2025
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="accordion-item">
                        <a
                          className="accordion-title"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="bx bx-chevron-down"></i>
                          Delivery & Return
                        </a>

                        <div className="accordion-content ">
                          <ul>
                            <li>Available, Ships in 3-5 days</li>
                            <li>10 Days Replacement Policy</li>
                          </ul>
                        </div>
                      </li>
                      <li className="accordion-item">
                        <a
                          className="accordion-title"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="bx bx-chevron-down"></i>
                          Reviews
                        </a>

                        <div className="accordion-content">
                          <div className="products-review-form mt-0">
                        
                            <div className="review-comments mt-0">
                              <div className="review-item mt-0">
                                <div className="rating">
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bx-star"></i>
                                </div>
                                <h3>Highly Effective!</h3>
                                <span>
                                  <strong>Ravi Patel</strong> on{" "}
                                  <strong>Jun 20, 2025</strong>
                                </span>
                                <p>
                                  This rat repellent device worked wonders in my
                                  warehouse. I haven't seen a single rat since
                                  installation!
                                </p>
                              </div>

                              <div className="review-item">
                                <div className="rating">
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bx-star"></i>
                                </div>
                                <h3>Perfect for Home Use</h3>
                                <span>
                                  <strong>Pooja Desai</strong> on{" "}
                                  <strong>Jun 18, 2025</strong>
                                </span>
                                <p>
                                  It keeps my kitchen completely rodent-free.
                                  Setup was easy and the build quality is
                                  top-notch.
                                </p>
                              </div>

                              <div className="review-item">
                                <div className="rating">
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bx-star"></i>
                                </div>
                                <h3>Great for Commercial Use</h3>
                                <span>
                                  <strong>Jignesh Shah</strong> on{" "}
                                  <strong>Jun 10, 2025</strong>
                                </span>
                                <p>
                                  Installed it at our shop, and within days we
                                  noticed results. JP Enterprise delivers on
                                  quality!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Product Details Area --></div> */}
        <Facility />
        <Instragram />
      </div>
      <Footer />

      {/* <!-- Start QuickView Modal Area --> */}
      <div
        className="modal fade productsQuickView"
        id="productsQuickView"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="products-image">
                  <img src="/assets/pics/rate1.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="products-content">
                  <h3>
                    <a href="#">
                      High-Frequency Ultrasonic Rat Repeller – Dual Indoor &
                      Outdoor Use | 1500 Sq. Ft | Plug & Play
                    </a>
                  </h3>

                  <div className="price">
                    <span className="new-price">₹3,429</span>
                    <span className="old-price">₹9,999</span>
                  </div>

                  <div className="products-review">
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="#" className="rating-count">
                      3 ratings
                    </a>
                  </div>

                  <ul className="products-info">
                    {/* <li>
                      <span>Brand:</span> <a href="#">Generic</a>
                    </li> */}
                    <li>
                      <span>Style:</span> <a href="#">modern</a>
                    </li>
                    <li>
                      <span>Material:</span> <a href="#"> Metal</a>
                    </li>
                    <li>
                      <span>
                        Product <br />
                        Dimensions:
                      </span>{" "}
                      <a href="">5L x 10W x 10H Centimeters</a>
                    </li>
                    <li>
                      <span>Item Weight:</span>
                      <a href="">750 Grams</a>
                    </li>
                    <li>
                      <span>Number of Pieces:</span>
                      <a href="">1</a>
                    </li>
                  </ul>

                  {/* <div className="products-color-switch">
                                    <h4>Color:</h4>

                                    <ul>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Black" className="color-black"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="White" className="color-white"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Green" className="color-green"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Yellow Green" className="color-yellowgreen"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Teal" className="color-teal"></a></li>
                                    </ul>
                                </div> */}

                  {/* <div className="products-size-wrapper">
                                    <h4>Size:</h4>

                                    <ul>
                                        <li><a href="#">XS</a></li>
                                        <li className="active"><a href="#">S</a></li>
                                        <li><a href="#">M</a></li>
                                        <li><a href="#">XL</a></li>
                                        <li><a href="#">XXL</a></li>
                                    </ul>
                                </div> */}

                  <div className="products-add-to-cart">
                    <div className="input-counter">
                      <span className="minus-btn">
                        <i className="bx bx-minus"></i>
                      </span>
                      <input type="text" value="1" min="1" max="10" />
                      <span className="plus-btn">
                        <i className="bx bx-plus"></i>
                      </span>
                    </div>

                    <button type="submit" className="default-btn">
                      Add to Cart
                    </button>
                  </div>

                  <a href="#" className="view-full-info">
                    View Full Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End QuickView Modal Area --> */}
      {/* <!-- Start Size Guide Modal Area --> */}
      <div
        className="modal fade sizeGuideModal"
        id="sizeGuideModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="modal-sizeguide">
              <h3>Free Delivery</h3>
              <p>The product is eligible for Free delivery.</p>

              {/* <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Italian</th>
                                        <th>Spanish</th>
                                        <th>German</th>
                                        <th>UK</th>
                                        <th>US</th>
                                        <th>Japanese</th>
                                        <th>Chinese</th>
                                        <th>Russian</th>
                                        <th>Korean</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>34</td>
                                        <td>30</td>
                                        <td>28</td>
                                        <td>4</td>
                                        <td>00</td>
                                        <td>3</td>
                                        <td>155/75A</td>
                                        <td>36</td>
                                        <td>44</td>
                                    </tr>
                                    <tr>
                                        <td>36</td>
                                        <td>32</td>
                                        <td>30</td>
                                        <td>6</td>
                                        <td>0</td>
                                        <td>5</td>
                                        <td>155/80A</td>
                                        <td>38</td>
                                        <td>44</td>
                                    </tr>
                                    <tr>
                                        <td>38</td>
                                        <td>34</td>
                                        <td>32</td>
                                        <td>8</td>
                                        <td>2</td>
                                        <td>7</td>
                                        <td>160/84A</td>
                                        <td>40</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>36</td>
                                        <td>34</td>
                                        <td>10</td>
                                        <td>4</td>
                                        <td>9</td>
                                        <td>165/88A</td>
                                        <td>42</td>
                                        <td>55</td>
                                    </tr>
                                    <tr>
                                        <td>42</td>
                                        <td>38</td>
                                        <td>36</td>
                                        <td>12</td>
                                        <td>6</td>
                                        <td>11</td>
                                        <td>170/92A</td>
                                        <td>44</td>
                                        <td>66</td>
                                    </tr>
                                    <tr>
                                        <td>44</td>
                                        <td>40</td>
                                        <td>38</td>
                                        <td>14</td>
                                        <td>8</td>
                                        <td>13</td>
                                        <td>175/96A</td>
                                        <td>46</td>
                                        <td>66</td>
                                    </tr>
                                    <tr>
                                        <td>46</td>
                                        <td>42</td>
                                        <td>40</td>
                                        <td>16</td>
                                        <td>10</td>
                                        <td>15</td>
                                        <td>170/98A</td>
                                        <td>48</td>
                                        <td>77</td>
                                    </tr>
                                    <tr>
                                        <td>48</td>
                                        <td>44</td>
                                        <td>42</td>
                                        <td>18</td>
                                        <td>12</td>
                                        <td>17</td>
                                        <td>170/100B</td>
                                        <td>50</td>
                                        <td>77</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>46</td>
                                        <td>44</td>
                                        <td>20</td>
                                        <td>14</td>
                                        <td>19</td>
                                        <td>175/100B</td>
                                        <td>52</td>
                                        <td>88</td>
                                    </tr>
                                    <tr>
                                        <td>52</td>
                                        <td>48</td>
                                        <td>46</td>
                                        <td>22</td>
                                        <td>16</td>
                                        <td>21</td>
                                        <td>180/104B</td>
                                        <td>54</td>
                                        <td>88</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Size Guide Modal Area --> */}
      {/* <!-- Start Shipping Modal Area --> */}
      <div
        className="modal fade productsShippingModal"
        id="productsShippingModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="shipping-content">
              <h3>10 days Returnable</h3>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Return Reason</th>
                      <th>Return Period</th>
                      <th>Return Policy</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Physical Damage, <br />
                        Defective, <br />
                        Wrong and Missing Item
                      </td>
                      <td>10 days from delivery</td>
                      <td>Full refund and replacement</td>
                    </tr>
                    <tr>
                      <td>Any other reason</td>
                      <td>10 days from delivery</td>
                      <td> delivery Full refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3>Return Instructions</h3>
              <ul>
                <li>
                  Keep the item in its original condition and packaging along
                  with MRP tag and accessories for a successful pick-up.
                </li>
                <li>
                  <a href="/ReturnPolicy">Read full returns policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Shipping Modal Area --> */}
      {/* <!-- Start Shipping Modal Area --> */}
      <div
        className="modal fade Securetransaction"
        id="Securetransaction"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="shipping-content">
              <h3>Your transaction is secure</h3>
              <ul>
                <li>
                  We work hard to protect your security and privacy. Our payment
                  security system encrypts your information during transmission.{" "}
                </li>
                <li>
                  {" "}
                  We don’t share your credit card details with third-party
                  sellers, and we don’t sell your information to others.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Shipping Modal Area --> */}
    </>
  );
};

export default DigitalCourseDetails;
