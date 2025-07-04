import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Facility from "../Components/Facility";
import Instragram from "../Components/Instragram";
const images = [
  "/assets/pics/rate.jpg",
  "/assets/pics/speaker 3.jpg",
  "/assets/pics/speaker2.jpg",
  "/assets/pics/PRDUCAT.jpg",
  "/assets/pics/PRODUCT2.webp",
  "/assets/pics/speaker.jpg",
];
const Productdetails = () => {
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
              <h2>Smart Ultrasonic Rat Repellent</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Products Details</li>
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
                  <span className="sub-title">Rat Guard </span>
                  <h3>Smart Ultrasonic Rat Repellent</h3>

                  <div className="d-flex align-items-center gap-3 mt-2">
                    <div className="rating bg-success text-white px-2 py-1 rounded">
                      <i className="bx bxs-star"></i> 4.5
                    </div>
                    <span className="text-muted">(27 Ratings)</span>
                  </div>

                  <div
                    className="price mt-3"
                    style={{
                      borderTop: "1px solid #515151",
                      paddingTop: "10px",
                    }}
                  >
                    <span className="new-price fw-bold fs-4">₹3331</span>
                    <del className="old-price ms-2 text-muted">₹9999</del>
                    <span className="ms-2 text-success">(-67%)</span>
                  </div>

                  {/* <ul className="products-info styled-info list-unstyled"> */}
                  {/* <li>
                      <span>Brand:</span> <a href="#">Generic</a>
                    </li>
                    <li>
                      <span>Colour:</span> <a href="#">Black</a>
                    </li> */}
                  {/* <li>
                      <span>Style:</span> <a href="#">modern</a>
                    </li>
                    <li>
                      <span>Material:</span> <a href="#">Metal</a>
                    </li>
                    <li>
                      <span>Product Dimensions:</span>{" "}
                      <a href="#">5L x 10W x 10H Centimeters</a>
                    </li>
                    <li>
                      <span>Item Weight:</span> <a href="#"> 750 Grams</a>
                    </li>
                    <li>
                      <span>Number of Pieces:</span> <a href="#">1</a>
                    </li>
                  </ul> */}
                  
                  <div className="product-specs-grid">
                    <div className="spec-item">
                      <div className="label">Style</div>
                      <div className="value">Modern</div>
                    </div>
                    <div className="spec-item">
                      <div className="label">Material</div>
                      <div className="value">Metal</div>
                    </div>
                    <div className="spec-item">
                      <div className="label">Product Dimensions</div>
                      <div className="value">5L x 10W x 10H Centimeters</div>
                    </div>
                    <div className="spec-item">
                      <div className="label">Item Weight</div>
                      <div className="value">750 Grams</div>
                    </div>
                    <div className="spec-item">
                      <div className="label">Number of Pieces</div>
                      <div className="value">1</div>
                    </div>
                  </div>

                 

                  <div className="products-info-btn mt-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#sizeGuideModal"
                    >
                      <i className="bx bx-crop"></i>Free Delivery
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#productsShippingModal"
                    >
                      <i className="bx bxs-truck"></i> 10 days Returnable
                    </a>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#Securetransaction"
                    >
                      <i className="bx bx-envelope"></i>Secure transaction
                    </a>
                  </div>

                  <div className="products-add-to-cart">
                    <div className="input-counter">
                      <span className="minus-btn" onClick={handleDecrement}>
                        <i className="bx bx-minus"></i>
                      </span>
                      <input type="text" value={count} readOnly />
                      <span className="plus-btn" onClick={handleIncrement}>
                        <i className="bx bx-plus"></i>
                      </span>
                    </div>

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
                    <a
                      href="#"
                      className="optional-btn"
                      style={{ marginRight: "10px" }}
                    >
                      <i className="bx bx-heart"></i> WishList
                    </a>
                    <a
                      href="https://wa.me/919265407449"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="optional"
                    >
                      <i className="fa-brands fa-whatsapp"></i> Whatsapp
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

                  <div className="buy-checkbox-btn">
                    <div className="item">
                      <input
                        className="inp-cbx"
                        id="cbx"
                        type="checkbox"
                        checked
                      />
                      <label className="cbx" for="cbx">
                        <span>
                          <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </svg>
                        </span>
                        <span>I agree with the terms and conditions</span>
                      </label>
                    </div>

                    <div className="item">
                      <a href="#" className="default-btn">
                        Buy it now!
                      </a>
                    </div>
                  </div>

                  <div className="products-details-accordion">
                    <ul className="accordion">
                      <li className="accordion-item">
                        <a
                          className="accordion-title active"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="bx bx-chevron-down"></i>
                          Description
                        </a>

                        <div className="accordion-content show">
                          <ul>
                            <li>
                              Advanced Ultrasonic Technology: Deters rodents
                              with high-frequency soundwaves
                            </li>
                            <li>
                              Silent & Safe Operation: Harmless to humans and
                              pets
                            </li>
                            <li>
                              Perfect for Indoor Use: Ideal for kitchens,
                              storerooms, and homes
                            </li>
                            <li>
                              Energy Efficient: Runs continuously with low power
                              usage
                            </li>
                            <li>
                              🇮🇳 Made in India: Durable build & local warranty
                              support
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
                          Additional information
                        </a>

                        <div className="accordion-content">
                          <table className="table table-striped">
                            <tbody>
                              {/* <tr>
                                <td>Brand:</td>
                                <td>Generic</td>
                              </tr>
                              <tr>
                                <td>Colour:</td>
                                <td>Black</td>
                              </tr> */}
                              <tr>
                                <td>Style:</td>
                                <td>modern</td>
                              </tr>
                              <tr>
                                <td>Material:</td>
                                <td> Metal</td>
                              </tr>
                              <tr>
                                <td>Product Dimensions:</td>
                                <td>5L x 10W x 10H Centimeters</td>
                              </tr>
                              <tr>
                                <td>Item Weight:</td>
                                <td>750 Grams</td>
                              </tr>
                              <tr>
                                <td>Number of Pieces:</td>
                                <td> 1</td>
                              </tr>
                            </tbody>
                          </table>
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
                          <div className="products-review-form">
                            <h3>Customer Reviews</h3>

                            <div className="review-title">
                              <div className="rating">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bx-star"></i>
                              </div>
                              <p>Based on 3 reviews</p>
                              <a href="#" className="default-btn">
                                Write a Review
                              </a>
                            </div>

                            <div className="review-comments">
                              <div className="review-item">
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

                            <div className="review-form">
                              <h3>Write a Review</h3>

                              <form>
                                <div className="row justify-content-center">
                                  <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="review-title"
                                        name="review-title"
                                        placeholder="Enter your review title"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <textarea
                                        name="review-body"
                                        id="review-body"
                                        cols="30"
                                        rows="6"
                                        placeholder="Write your experience with JP Enterprise's rat repellent product"
                                        className="form-control"
                                      ></textarea>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12">
                                    <button
                                      type="submit"
                                      className="default-btn"
                                    >
                                      Submit Review
                                    </button>
                                  </div>
                                </div>
                              </form>
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

          <div className="related-products">
            <div className="container">
              <div className="section-title">
                <h2>Related Products</h2>
              </div>

              <div className="products-slides owl-carousel owl-theme">
                <div className="single-products-box">
                  <div className="products-image">
                    <a href="#">
                      <img
                        src="/assets/pics/rate.jpg"
                        className="main-image"
                        alt="image"
                      />
                      <img
                        src="/assets/pics/speaker.jpg"
                        className="hover-image"
                        alt="image"
                      />
                    </a>

                    <div className="products-button">
                      <ul>
                        <li>
                          <div className="wishlist-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#shoppingWishlistModal"
                            >
                              <i className="bx bx-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </div>
                        </li>
                        {/* <li>
                          <div className="compare-btn">
                            <a href="/Compare">
                              <i className="bx bx-refresh"></i>
                              <span className="tooltip-label">Compare</span>
                            </a>
                          </div>
                        </li> */}
                        <li>
                          <div className="quick-view-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#productsQuickView"
                            >
                              <i className="bx bx-search-alt"></i>
                              <span className="tooltip-label">Quick View</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="products-content">
                    <h3>
                      <a href="#">High-Frequency Ultrasonic Rat Repeller</a>
                    </h3>
                    <div className="price">
                      <span className="new-price">₹3429</span>
                      <span className="old-price">₹9999</span>
                    </div>
                    <div className="star-rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="/Cart" className="add-to-cart">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="single-products-box">
                  <div className="products-image">
                    <a href="#">
                      <img
                        src="/assets/pics/rate.jpg"
                        className="main-image"
                        alt="image"
                      />
                      <img
                        src="/assets/pics/speaker 3.jpg"
                        className="hover-image"
                        alt="image"
                      />
                    </a>

                    <div className="products-button">
                      <ul>
                        <li>
                          <div className="wishlist-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#shoppingWishlistModal"
                            >
                              <i className="bx bx-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </div>
                        </li>
                        {/* <li>
                          <div className="compare-btn">
                            <a href="/Compare">
                              <i className="bx bx-refresh"></i>
                              <span className="tooltip-label">Compare</span>
                            </a>
                          </div>
                        </li> */}
                        <li>
                          <div className="quick-view-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#productsQuickView"
                            >
                              <i className="bx bx-search-alt"></i>
                              <span className="tooltip-label">Quick View</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="sale-tag">Sale!</div>
                  </div>

                  <div className="products-content">
                    <h3>
                      <a href="#">High-Frequency Ultrasonic Rat Repeller</a>
                    </h3>
                    <div className="price">
                      <span className="new-price">₹3429</span>
                      <span className="old-price">₹9999</span>
                    </div>
                    <div className="star-rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="/Cart" className="add-to-cart">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="single-products-box">
                  <div className="products-image ">
                    <a href="#">
                      <img
                        src="/assets/pics/rate.jpg"
                        className="main-image"
                        alt="image"
                      />
                      <img
                        src="/assets/pics/speaker2.jpg"
                        className="hover-image"
                        alt="image"
                      />
                    </a>

                    <div className="products-button">
                      <ul>
                        <li>
                          <div className="wishlist-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#shoppingWishlistModal"
                            >
                              <i className="bx bx-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </div>
                        </li>
                        {/* <li>
                          <div className="compare-btn">
                            <a href="/Compare">
                              <i className="bx bx-refresh"></i>
                              <span className="tooltip-label">Compare</span>
                            </a>
                          </div>
                        </li> */}
                        <li>
                          <div className="quick-view-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#productsQuickView"
                            >
                              <i className="bx bx-search-alt"></i>
                              <span className="tooltip-label">Quick View</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="products-content">
                    <h3>
                      <a href="#">High-Powered Ultrasonic Rat Repellent</a>
                    </h3>
                    <div className="price">
                      <span className="new-price">₹3429</span>
                      <span className="old-price">₹9999</span>
                    </div>
                    <div className="star-rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="/Cart" className="add-to-cart">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="single-products-box">
                  <div className="products-image">
                    <a href="#">
                      <img
                        src="/assets/pics/rate.jpg"
                        className="main-image"
                        alt="image"
                      />
                      <img
                        src="/assets/pics/speaker.jpg"
                        className="hover-image"
                        alt="image"
                      />
                    </a>

                    <div className="products-button">
                      <ul>
                        <li>
                          <div className="wishlist-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#shoppingWishlistModal"
                            >
                              <i className="bx bx-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </div>
                        </li>
                        {/* <li>
                          <div className="compare-btn">
                            <a href="/Compare">
                              <i className="bx bx-refresh"></i>
                              <span className="tooltip-label">Compare</span>
                            </a>
                          </div>
                        </li> */}
                        <li>
                          <div className="quick-view-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#productsQuickView"
                            >
                              <i className="bx bx-search-alt"></i>
                              <span className="tooltip-label">Quick View</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="products-content">
                    <h3>
                      <a href="#">High-Frequency Ultrasonic Rat Repeller</a>
                    </h3>
                    <div className="price">
                      <span className="new-price">₹3429</span>
                      <span className="old-price">₹9999</span>
                    </div>
                    <div className="star-rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="/Cart" className="add-to-cart">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="single-products-box">
                  <div className="products-image">
                    <a href="#">
                      <img
                        src="/assets/pics/rate.jpg"
                        className="main-image"
                        alt="image"
                      />
                      <img
                        src="/assets/pics/speaker 3.jpg"
                        className="hover-image"
                        alt="image"
                      />
                    </a>

                    <div className="products-button">
                      <ul>
                        <li>
                          <div className="wishlist-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#shoppingWishlistModal"
                            >
                              <i className="bx bx-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </div>
                        </li>
                        {/* <li>
                          <div className="compare-btn">
                            <a href="/Compare">
                              <i className="bx bx-refresh"></i>
                              <span className="tooltip-label">Compare</span>
                            </a>
                          </div>
                        </li> */}
                        <li>
                          <div className="quick-view-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#productsQuickView"
                            >
                              <i className="bx bx-search-alt"></i>
                              <span className="tooltip-label">Quick View</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="products-content">
                    <h3>
                      <a href="#">High-Frequency Ultrasonic Rat Repeller</a>
                    </h3>
                    <div className="price">
                      <span className="new-price">₹3429</span>
                      <span className="old-price">₹9999</span>
                    </div>
                    <div className="star-rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="/Cart" className="add-to-cart">
                      Add to Cart
                    </a>
                  </div>
                </div>

                <div className="single-products-box">
                  <div className="products-image">
                    <a href="#">
                      <img
                        src="/assets/pics/rate.jpg"
                        className="main-image"
                        alt="image"
                      />
                      <img
                        src="/assets/pics/speaker2.jpg"
                        className="hover-image"
                        alt="image"
                      />
                    </a>

                    <div className="products-button">
                      <ul>
                        <li>
                          <div className="wishlist-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#shoppingWishlistModal"
                            >
                              <i className="bx bx-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </div>
                        </li>
                        {/* <li>
                          <div className="compare-btn">
                            <a href="/Compare">
                              <i className="bx bx-refresh"></i>
                              <span className="tooltip-label">Compare</span>
                            </a>
                          </div>
                        </li> */}
                        <li>
                          <div className="quick-view-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#productsQuickView"
                            >
                              <i className="bx bx-search-alt"></i>
                              <span className="tooltip-label">Quick View</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="new-tag">New!</div>
                  </div>

                  <div className="products-content">
                    <h3>
                      <a href="#">High-Powered Ultrasonic Rat Repellent</a>
                    </h3>
                    <div className="price">
                      <span className="new-price">₹3429</span>
                      <span className="old-price">₹9999</span>
                    </div>
                    <div className="star-rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="/Cart" className="add-to-cart">
                      Add to Cart
                    </a>
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
                    <a href="#">High-Frequency Ultrasonic Rat Repeller</a>
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

export default Productdetails;
