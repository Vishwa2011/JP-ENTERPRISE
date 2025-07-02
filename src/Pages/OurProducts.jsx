import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Facility from "../Components/Facility";
// import Instragram from '../Components/Instragram'

const OurProducts = () => {
      const options = [
    "Sort by Price: Low to High",
    "Default Sorting",
    "Sort by Popularity",
    "Sort by Average Rating",
    "Sort by Latest",
    "Sort by Price: High to Low",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const productsData = [
    {
      id: 1,
      name: "High-Powered Ultrasonic Rat Repellent",
      image1: "/assets/pics/rate.jpg",
      image2: "/assets/pics/speaker.jpg",
      oldPrice: "₹9999",
      newPrice: "₹3331",
      sale: false,
    },
    {
      id: 2,
      name: "Smart Ultrasonic Rat Repellent ",
      image1: "/assets/pics/rate.jpg",
      image2: "/assets/pics/speaker2.jpg",
      oldPrice: "₹9999",
      newPrice: "₹3331",
      sale: true,
    },
    {
      id: 3,
      name: "High-Frequency Ultrasonic Rat Repelle",
      image1: "/assets/pics/rate.jpg",
      image2: "/assets/pics/speaker 3.jpg",
      oldPrice: "₹9999",
      newPrice: "₹3331",
      sale: false,
    },
     {
      id: 4,
      name: "High-Frequency Ultrasonic Rat Repeller ",
      image1: "/assets/pics/rate.jpg",
      image2: "/assets/pics/speaker 3.jpg",
      oldPrice: "₹9999",
      newPrice: "₹3331",
      sale: false,
    },
  ];
  const [view, setView] = useState("products-col-three"); // default view

  const handleViewChange = (viewClass) => {
    setView(viewClass);
  };

  const viewButtons = [
    { class: "products-col-two", label: "icon-view-two" },
    { class: "products-col-three", label: "icon-view-three" },
    { class: "products-col-four", label: "icon-view-four" },
    { class: "products-row-view", label: "view-grid-switch" },
  ];
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
  return (
    <>
      <Navbar />
      <>
        {/* <!-- Start Page Title --> */}
        <div class="page-title-area">
          <div class="container">
            <div class="page-title-content">
              <h2>Our Products</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Products</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Products Area --> */}
        <section className="products-area pt-100 pb-70">
          <div className="container">
            <div className="products-filter-options">
              <div className="row align-items-center justify-content-end">
                {/* <div className="col-lg-4 col-md-4">
                  <div className="d-lg-flex d-md-flex align-items-center">
                    <span className="sub-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#productsFilterModal"
                      >
                        <i className="bx bx-filter-alt"></i> Filter
                      </a>
                    </span>

                    <span className="sub-title d-none d-lg-block d-md-block">
                      View:
                    </span>

                    <div className="view-list-row d-none d-lg-block d-md-block">
                      <div className="view-column">
                        {viewButtons.map(({ class: viewClass, label }) => (
                          <a
                            key={label}
                            href="#"
                            className={`${label} ${
                              view === viewClass ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleViewChange(viewClass);
                            }}
                          >
                            <span></span>
                            <span></span>
                            {label.includes("three") && <span></span>}
                            {label.includes("four") && <span></span>}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <p>Showing 1 – 18 of 100</p>
                </div> */}

               <div className="col-lg-4 col-md-4">
      <div className="products-ordering-list">
        <div
          className={`nice-select ${isOpen ? "open" : ""}`}
          tabIndex={0}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="current">{selectedOption}</span>
          <ul className="list">
            {options.map((option) => (
              <li
                key={option}
                data-value={option}
                className={`option ${
                  selectedOption === option ? "selected focus" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // prevent dropdown from closing before selection
                  handleOptionClick(option);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
              </div>
            </div>

            <div id="products-collections-filter" className={`row ${view}`}>
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 col-sm-6 products-col-item"
                >
                  <div className="single-products-box">
                    <div className="products-image">
                      <a href="/Productdetails">
                        <img
                          src={product.image1}
                          className="main-image"
                          alt="image"
                        />
                        <img
                          src={product.image2}
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
                                <span className="tooltip-label">
                                  Quick View
                                </span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {product.sale && <div className="sale-tag">Sale!</div>}
                    </div>

                    <div className="products-content">
                      <h3>
                        <a href="/Productdetails">{product.name}</a>
                      </h3>
                      <div className="price">
                        <span className="new-price">{product.newPrice}</span>
                        <span className="old-price">{product.oldPrice}</span>
                      </div>
                      <div className="star-rating">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <a href="/Cart" className="add-to-cart ">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination-area text-center">
              <a href="#" className="prev page-numbers">
                <i className="bx bx-chevron-left"></i>
              </a>
              <span className="page-numbers current" aria-current="page">
                1
              </span>
              <a href="#" className="page-numbers">
                2
              </a>
              <a href="#" className="page-numbers">
                3
              </a>
              <a href="#" className="page-numbers">
                4
              </a>
              <a href="#" className="page-numbers">
                5
              </a>
              <a href="#" className="next page-numbers">
                <i className="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End Products Area --> */}

        {/* <!-- Start Products Filter Modal Area --> */}
        <div
          class="modal left fade productsFilterModal"
          id="productsFilterModal"
          tabindex="-1"
          role="dialog"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="bx bx-x"></i> Close
                </span>
              </button>

              <div class="modal-body">
                <div class="woocommerce-widget-area">
                  <div class="woocommerce-widget filter-list-widget">
                    <h3 class="woocommerce-widget-title">Current Selection</h3>

                    <div class="selected-filters-wrap-list">
                      <ul>
                        <li>
                          <a href="#" >
                            <i class="bx bx-x"></i> Rat Repellent
                          </a>
                        </li>
                      </ul>

                      <a href="#" class="delete-selected-filters">
                        <i class="bx bx-trash"></i> <span>Clear All</span>
                      </a>
                    </div>
                  </div>

                  <div class="woocommerce-widget collections-list-widget">
                    <h3 class="woocommerce-widget-title">Material</h3>

                    <ul class="collections-list-row">
                      <li>
                        <a href="#">Metal</a>
                      </li>
                      <li class="active">
                        <a href="#" class="active">
                          Plastic / Polymer
                        </a>
                      </li>
                      <li>
                        <a href="#"> Essential Oils </a>
                      </li>
                      <li>
                        <a href="#"> Electronic Components </a>
                      </li>
                      {/* <li><a href="#">Accessories</a></li>
                                            <li><a href="#">Uncategorized</a></li> */}
                    </ul>
                  </div>

                  <div class="woocommerce-widget price-list-widget">
                    <h3 class="woocommerce-widget-title">Price</h3>

                    <div class="collection-filter-by-price">
                      <span class="irs irs--flat js-irs-0">
                        <span class="irs">
                          <span class="irs-line" tabindex="0"></span>
                          <span
                            className="irs-min"
                            style={{ visibility: "hidden" }}
                          >
                            0
                          </span>
                          <span
                            className="irs-max"
                            style={{ visibility: "hidden" }}
                          >
                            1 055
                          </span>
                          <span
                            className="irs-from"
                            style={{
                              visibility: "visible",
                              left: "-0.932692%",
                            }}
                          >
                            0
                          </span>
                          <span
                            className="irs-to"
                            style={{ visibility: "visible", left: "91.149%" }}
                          >
                            1 055
                          </span>
                          <span
                            className="irs-single"
                            style={{ visibility: "hidden", left: "41.1731%" }}
                          >
                            0 — 1 055
                          </span>

                          <span className="irs-grid"></span>
                          <span
                            className="irs-bar"
                            style={{
                              cursor: "ew-resize",
                              left: "2.46154%",
                              width: "95.0769%",
                            }}
                          ></span>
                          <span
                            className="irs-shadow shadow-from"
                            style={{ display: "none" }}
                          ></span>
                          <span
                            className="irs-shadow shadow-to"
                            style={{ display: "none" }}
                          ></span>

                          <span
                            className="irs-handle from"
                            style={{ left: "0%" }}
                          >
                            <i></i>
                            <i></i>
                            <i></i>
                          </span>

                          <span
                            className="irs-handle to"
                            style={{ left: "95.0769%" }}
                          >
                            <i></i>
                            <i></i>
                            <i></i>
                          </span>
                        </span>
                      </span>
                      <input
                        class="js-range-of-price irs-hidden-input"
                        type="text"
                        data-min="0"
                        data-max="1055"
                        name="filter_by_price"
                        data-step="10"
                        tabindex="-1"
                        readonly=""
                      />
                    </div>
                  </div>

                  <div class="woocommerce-widget size-list-widget">
                    <h3 class="woocommerce-widget-title">Size</h3>

                    <ul class="size-list-row">
                      <li>
                        <a href="#">20</a>
                      </li>
                      <li>
                        <a href="#">24</a>
                      </li>
                      <li class="active">
                        <a href="#">36</a>
                      </li>
                      <li>
                        <a href="#">30</a>
                      </li>
                      <li>
                        <a href="#">XS</a>
                      </li>
                      <li>
                        <a href="#">S</a>
                      </li>
                      <li>
                        <a href="#">M</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">L</a>
                      </li>
                      <li>
                        <a href="#">XL</a>
                      </li>
                    </ul>
                  </div>

                  <div class="woocommerce-widget color-list-widget">
                    <h3 class="woocommerce-widget-title">Color</h3>

                    <ul class="color-list-row">
                      <li class="active">
                        <a href="#" title="Black" class="color-black"></a>
                      </li>
                      <li>
                        <a href="#" title="Red" class="color-red"></a>
                      </li>
                      <li>
                        <a href="#" title="Yellow" class="color-yellow"></a>
                      </li>
                      <li>
                        <a href="#" title="White" class="color-white"></a>
                      </li>
                      <li>
                        <a href="#" title="Blue" class="color-blue"></a>
                      </li>
                      <li>
                        <a href="#" title="Green" class="color-green"></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Yellow Green"
                          class="color-yellowgreen"
                        ></a>
                      </li>
                      <li>
                        <a href="#" title="Pink" class="color-pink"></a>
                      </li>
                      <li>
                        <a href="#" title="Violet" class="color-violet"></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Blue Violet"
                          class="color-blueviolet"
                        ></a>
                      </li>
                      <li>
                        <a href="#" title="Lime" class="color-lime"></a>
                      </li>
                      <li>
                        <a href="#" title="Plum" class="color-plum"></a>
                      </li>
                      <li>
                        <a href="#" title="Teal" class="color-teal"></a>
                      </li>
                    </ul>
                  </div>

                  <div class="woocommerce-widget brands-list-widget">
                    <h3 class="woocommerce-widget-title">Brands</h3>

                    <ul class="brands-list-row">
                      <li>
                        <a href="#">Generic</a>
                      </li>
                      <li>
                        <a href="#">TrustBasket</a>
                      </li>
                      <li>
                        <a href="#">Rodexit</a>
                      </li>
                      {/* <li class="active"><a href="#">Moncler</a></li>
                                            <li><a href="#">Fendi</a></li>
                                            <li><a href="#">Versace</a></li> */}
                    </ul>
                  </div>

                  <div class="woocommerce-widget aside-trending-widget">
                    <div class="aside-trending-products">
                      <img src="/assets/pics/blogdetails.jpg" alt="image" />

                      <div class="category">
                        <h3>Top Trending</h3>
                        {/* <span>Spring/Summer 2024 Collection</span> */}
                      </div>
                      <a href="/" class="link-btn"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Products Filter Modal Area -->`` */}
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
                  <i class="bx bx-x"></i>
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
                        High-Frequency Ultrasonic Rat Repeller 
                      </a>
                    </h3>

                    <div className="price">
                      <span className="new-price">₹3,429</span>
                      <span className="old-price">₹9,999</span>
                    </div>

                    <div className="products-review">
                      <div className="rating">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                      </div>
                      <a href="#" className="rating-count">
                        3 ratings
                      </a>
                    </div>

                    <ul className="products-info">
                      <li>
                        <span>Brand:</span> <a href="#">Generic</a>
                      </li>
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

                    <div className="products-color-switch">
                      <h4>Color:</h4>

                      <ul>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Black"
                            className="color-black"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="White"
                            className="color-white"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Green"
                            className="color-green"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Yellow Green"
                            className="color-yellowgreen"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Teal"
                            className="color-teal"
                          ></a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="minus-btn" onClick={handleDecrement}>
                          <i className="bx bx-minus"></i>
                        </span>
                        <input type="text" value={count} readOnly />
                        <span className="plus-btn" onClick={handleIncrement}>
                          <i className="bx bx-plus"></i>
                        </span>
                      </div>

                      <a href="/Cart" > <button type="submit" className="default-btn ">
                       Add to Cart
                      </button></a>
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
        <Facility />
        {/* <Instragram /> */}
      </>
      <Footer />
    </>
  );
};

export default OurProducts;
