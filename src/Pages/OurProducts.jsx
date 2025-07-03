import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Facility from "../Components/Facility";
import Instragram from '../Components/Instragram'

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
      name: "High-Frequency Repeller for Kitchen & Storage",
      image1: "/assets/pics/rate.jpg",
      image2: "/assets/pics/speaker 3.jpg",
      oldPrice: "₹9999",
      newPrice: "₹3331",
      sale: false,
    },
     {
      id: 4,
      name: "High-Frequency Repeller Dual Indoor & Outdoor",
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
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
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

            <div id="row products-collections-filter" className={`row ${view}`}>
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
          className="modal left fade productsFilterModal"
          id="productsFilterModal"
          tabindex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="bx bx-x"></i> Close
                </span>
              </button>

              <div className="modal-body">
                <div className="woocommerce-widget-area">
                  <div className="woocommerce-widget filter-list-widget">
                    <h3 className="woocommerce-widget-title">Current Selection</h3>

                    <div className="selected-filters-wrap-list">
                      <ul>
                        <li>
                          <a href="#" >
                            <i className="bx bx-x"></i> Rat Repellent
                          </a>
                        </li>
                      </ul>

                      <a href="#" className="delete-selected-filters">
                        <i className="bx bx-trash"></i> <span>Clear All</span>
                      </a>
                    </div>
                  </div>

                  <div className="woocommerce-widget collections-list-widget">
                    <h3 className="woocommerce-widget-title">Material</h3>

                    <ul className="collections-list-row">
                      <li>
                        <a href="#">Metal</a>
                      </li>
                      <li className="active">
                        <a href="#" className="active">
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

                  <div className="woocommerce-widget price-list-widget">
                    <h3 className="woocommerce-widget-title">Price</h3>

                    <div className="collection-filter-by-price">
                      <span className="irs irs--flat js-irs-0">
                        <span className="irs">
                          <span className="irs-line" tabindex="0"></span>
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
                        className="js-range-of-price irs-hidden-input"
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

                  <div className="woocommerce-widget size-list-widget">
                    <h3 className="woocommerce-widget-title">Size</h3>

                    <ul className="size-list-row">
                      <li>
                        <a href="#">20</a>
                      </li>
                      <li>
                        <a href="#">24</a>
                      </li>
                      <li className="active">
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

                  <div className="woocommerce-widget color-list-widget">
                    <h3 className="woocommerce-widget-title">Color</h3>

                    <ul className="color-list-row">
                      <li className="active">
                        <a href="#" title="Black" className="color-black"></a>
                      </li>
                      <li>
                        <a href="#" title="Red" className="color-red"></a>
                      </li>
                      <li>
                        <a href="#" title="Yellow" className="color-yellow"></a>
                      </li>
                      <li>
                        <a href="#" title="White" className="color-white"></a>
                      </li>
                      <li>
                        <a href="#" title="Blue" className="color-blue"></a>
                      </li>
                      <li>
                        <a href="#" title="Green" className="color-green"></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Yellow Green"
                          className="color-yellowgreen"
                        ></a>
                      </li>
                      <li>
                        <a href="#" title="Pink" className="color-pink"></a>
                      </li>
                      <li>
                        <a href="#" title="Violet" className="color-violet"></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Blue Violet"
                          className="color-blueviolet"
                        ></a>
                      </li>
                      <li>
                        <a href="#" title="Lime" className="color-lime"></a>
                      </li>
                      <li>
                        <a href="#" title="Plum" className="color-plum"></a>
                      </li>
                      <li>
                        <a href="#" title="Teal" className="color-teal"></a>
                      </li>
                    </ul>
                  </div>

                  <div className="woocommerce-widget brands-list-widget">
                    <h3 className="woocommerce-widget-title">Brands</h3>

                    <ul className="brands-list-row">
                      <li>
                        <a href="#">Generic</a>
                      </li>
                      <li>
                        <a href="#">TrustBasket</a>
                      </li>
                      <li>
                        <a href="#">Rodexit</a>
                      </li>
                      {/* <li className="active"><a href="#">Moncler</a></li>
                                            <li><a href="#">Fendi</a></li>
                                            <li><a href="#">Versace</a></li> */}
                    </ul>
                  </div>

                  <div className="woocommerce-widget aside-trending-widget">
                    <div className="aside-trending-products">
                      <img src="/assets/pics/blogdetails.jpg" alt="image" />

                      <div className="category">
                        <h3>Top Trending</h3>
                        {/* <span>Spring/Summer 2024 Collection</span> */}
                      </div>
                      <a href="/" className="link-btn"></a>
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
                        High-Frequency Ultrasonic Rat Repeller 
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
        <Instragram />
      </>
      <Footer />
    </>
  );
};

export default OurProducts;
