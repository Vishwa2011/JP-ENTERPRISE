import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMeanMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (section) => {
    setActiveLink(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="top-header">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-12">
                <ul className="header-contact-info">
                  <li>
                    Call: <a href="tel:+919265407449">+91 9265407449</a>
                  </li>

                  <li>
                    <div className="dropdown language-switcher d-inline-block">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="assets/img/us-flag.jpg" alt="image" />
                        <span>
                          Eng <i className="bx bx-chevron-down"></i>
                        </span>
                      </button>

                      <div className="dropdown-menu">
                        <a
                          href="#"
                          className="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/germany-flag.jpg"
                            className="shadow-sm"
                            alt="flag"
                          />
                          <span>Ger</span>
                        </a>
                        <a
                          href="#"
                          className="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/france-flag.jpg"
                            className="shadow-sm"
                            alt="flag"
                          />
                          <span>Fre</span>
                        </a>
                        <a
                          href="#"
                          className="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/spain-flag.jpg"
                            className="shadow-sm"
                            alt="flag"
                          />
                          <span>Spa</span>
                        </a>
                        <a
                          href="#"
                          className="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/russia-flag.jpg"
                            className="shadow-sm"
                            alt="flag"
                          />
                          <span>Rus</span>
                        </a>
                        <a
                          href="#"
                          className="dropdown-item d-flex align-items-center"
                        >
                          <img
                            src="assets/img/italy-flag.jpg"
                            className="shadow-sm"
                            alt="flag"
                          />
                          <span>Ita</span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="top-header-discount-info">
                  <marquee>
                    <p>
                      <strong>50% OFF</strong> all new collections!{" "}
                      <a href="#">Discover Now!</a>
                    </p>
                  </marquee>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <ul className="header-top-menu">
                  <li>
                    <a href="/Login">
                      <i className="bx bx-log-in"></i> Login
                    </a>
                  </li>
                </ul>

                <ul className="header-top-others-option">
                  <div className="option-item">
                    <div className="search-btn-box">
                      <i className="search-btn bx bx-search-alt"></i>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="cart-btn">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#shoppingWishlistModal"
                      >
                        <i className="bx bx-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="cart-btn">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#shoppingCartModal"
                      >
                        <i className="bx bx-shopping-bag"></i>
                        <span>0</span>
                      </a>
                    </div>
                  </div>

                  <div className="option-item">
                    <div className="cart-btn">
                      <a href="/MyAccount">
                        <i className="bx bxs-user"></i>
                      </a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Navbar Area --> */}
        <div className="navbar-area">
          {/* mobile view  */}
          <div className="xton-responsive-nav">
            <div className="container">
              <div className="xton-responsive-menu">
                <div
                  className="logo"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <a className="navbar-brand" href="/">
                      <img
                        src="/assets/pics/jp.logo.png"
                        className="main-logo"
                        alt="logo"
                        style={{ width: "130px", height: "75px" }}
                      />
                      <img
                        src="/assets/pics/jp white.png"
                        className="white-logo"
                        alt="logo"
                        style={{ width: "120px", height: "45px" }}
                      />
                    </a>
                  </div>

                  {/* Toggle Button */}
                  <div
                    className="toggle-mean-bar "
                    style={{ textAlign: "end" }}
                    onClick={toggleMeanMenu}
                  >
                    <i
                      className="fa-solid fa-bars"
                      style={{
                        fontSize: "25px",
                        lineHeight: "3",
                        cursor: "pointer",
                      }}
                    ></i>

                    {/* Mean Bar Dropdown */}
                  </div>
                </div>
              </div>
            </div>
            <div className={`mean-bar ${isMenuOpen ? "show" : ""}`}>
              <nav className="mean-nav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) =>
                        `nav-link${isActive ? " active" : ""}`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/Aboutus"
                      className={({ isActive }) =>
                        `nav-link${isActive ? " active" : ""}`
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/OurProducts"
                      className={({ isActive }) =>
                        `nav-link${isActive ? " active" : ""}`
                      }
                    >
                      Our Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/Blog"
                      className={({ isActive }) =>
                        `nav-link${isActive ? " active" : ""}`
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/Contact"
                      className={({ isActive }) =>
                        `nav-link${isActive ? " active" : ""}`
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* laptop view  */}
          <div className="xton-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/">
                  <img
                    src="/assets/pics/jp.logo.png"
                    className="main-logo"
                    alt="logo"
                    style={{ width: "130px", height: "75px" }}
                  />
                  <img
                    src="/assets/pics/jp white.png"
                    className="white-logo"
                    alt="logo"
                    style={{ width: "120px", height: "45px" }}
                  />
                </a>

                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link ">
                        About Us <i className="bx bx-chevron-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <NavLink
                            to="/Aboutus"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/Mission"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            Mission
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/Vision"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            Vision
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/Aboutus"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            Our Team
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li class="nav-item megamenu">
                      <a href="" class="nav-link">
                        Our Products <i class="bx bx-chevron-down"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <div class="container">
                            <div class="row justify-content-start">
                              <div class="col-4">
                                <h6 class="submenu-title">Our Products</h6>

                                <ul class="megamenu-submenu">
                                  <li>
                                    <NavLink
                                      to="/OurProducts"
                                      className={({ isActive }) =>
                                        `nav-link${isActive ? " active" : ""}`
                                      }
                                    >
                                      Rat Guard
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>

                              <div class="col-4">
                                <ul class="megamenu-submenu">
                                  <li>
                                    {" "}
                                    <div class="aside-trending-products">
                                      <img
                                        src="/assets/pics/navimg1.jpg"
                                        alt="image"
                                      />

                                      <div class="category">
                                        <h4>Top Trending</h4>
                                      </div>

                                      <a
                                        href="/"
                                        class="link-btn"
                                      ></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>

                              <div class="col-4">
                                <ul class="megamenu-submenu">
                                  <li>
                                    {" "}
                                    <div class="aside-trending-products">
                                      <img
                                        src="/assets/pics/navimg2.jpg"
                                        alt="image"
                                      />

                                      <div class="category">
                                        <h4>Popular Products</h4>
                                      </div>

                                      <a
                                        href="/"
                                        class="link-btn"
                                      ></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                  
                    <li className="nav-item">
                      <NavLink
                        to="/Blog"
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                      <li className="nav-item ">
                      <NavLink
                        to="/Contact"
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Warranty
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        to="/Contact"
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    
                  </ul>

                  <div className="others-option">
                    <div className="option-item">
                      <div className="search-btn-box">
                        <i className="search-btn bx bx-search-alt"></i>
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="cart-btn">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#shoppingWishlistModal"
                        >
                          <i className="bx bx-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="cart-btn">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#shoppingCartModal"
                        >
                          <i className="bx bx-shopping-bag"></i>
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="cart-btn">
                        <a href="/MyAccount">
                          <i className="bx bxs-user"></i>
                        </a>
                      </div>
                    </div>
                    <div className="option-item">
                      <div
                        className="burger-menu"
                        data-bs-toggle="modal"
                        data-bs-target="#sidebarModal"
                      >
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- End Navbar Area --> */}

        {/* <!-- Start Sticky Navbar Area --> */}
        <div className="navbar-area header-sticky">
          <div className="xton-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/">
                  <img
                    src="/assets/pics/jp.logo.png"
                    className="main-logo"
                    alt="logo"
                    style={{ width: "130px", height: "75px" }}
                  />
                  <img
                    src="/assets/pics/jp white.png"
                    className="white-logo"
                    alt="logo"
                    style={{ width: "120px", height: "45px" }}
                  />
                </a>

                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link ">
                        About Us <i className="bx bx-chevron-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <NavLink
                            to="/Aboutus"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/Mission"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            Mission
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/Vision"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            Vision
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            to="/Aboutus"
                            className={({ isActive }) =>
                              `nav-link${isActive ? " active" : ""}`
                            }
                          >
                            Our Team
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                     <li class="nav-item megamenu">
                      <a href="" class="nav-link">
                        Our Products <i class="bx bx-chevron-down"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <div class="container">
                            <div class="row justify-content-start">
                              <div class="col-4">
                                <h6 class="submenu-title">Our Products</h6>

                                <ul class="megamenu-submenu">
                                  <li>
                                    <NavLink
                                      to="/OurProducts"
                                      className={({ isActive }) =>
                                        `nav-link${isActive ? " active" : ""}`
                                      }
                                    >
                                      Rat Guard
                                    </NavLink>
                                  </li>
                                </ul>
                              </div>

                              <div class="col-4">
                                <ul class="megamenu-submenu">
                                  <li>
                                    {" "}
                                    <div class="aside-trending-products">
                                      <img
                                        src="/assets/pics/navimg1.jpg"
                                        alt="image"
                                      />

                                      <div class="category">
                                        <h4>Top Trending</h4>
                                      </div>

                                      <a
                                        href="/"
                                        class="link-btn"
                                      ></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>

                              <div class="col-4">
                                <ul class="megamenu-submenu">
                                  <li>
                                    {" "}
                                    <div class="aside-trending-products">
                                      <img
                                        src="/assets/pics/navimg2.jpg"
                                        alt="image"
                                      />

                                      <div class="category">
                                        <h4>Popular Products</h4>
                                      </div>

                                      <a
                                        href="/"
                                        class="link-btn"
                                      ></a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/Blog"
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                     <li className="nav-item ">
                      <NavLink
                        to="/Contact"
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Warranty
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        to="/Contact"
                        className={({ isActive }) =>
                          `nav-link${isActive ? " active" : ""}`
                        }
                      >
                        Contact Us
                      </NavLink>
                    </li>
                   
                  </ul>

                  <div className="others-option">
                    <div className="option-item">
                      <div className="cart-btn">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#shoppingWishlistModal"
                        >
                          <i className="bx bx-heart"></i>
                        </a>
                      </div>
                    </div>

                    <div className="option-item">
                      <div className="cart-btn">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#shoppingCartModal"
                        >
                          <i className="bx bx-shopping-bag"></i>
                          <span>0</span>
                        </a>
                      </div>
                    </div>
                    <div className="option-item">
                      <div className="cart-btn">
                        <a href="/MyAccount">
                          <i className="bx bxs-user"></i>
                        </a>
                      </div>
                    </div>
                    <div className="option-item">
                      <div
                        className="burger-menu"
                        data-bs-toggle="modal"
                        data-bs-target="#sidebarModal"
                      >
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- End Header Area --> */}
        {/* <!-- Start Search Overlay --> */}
        <div className="search-overlay">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="search-overlay-layer"></div>
              <div className="search-overlay-layer"></div>
              <div className="search-overlay-layer"></div>

              <div className="search-overlay-close">
                <span className="search-overlay-close-line"></span>
                <span className="search-overlay-close-line"></span>
              </div>

              <div className="search-overlay-form">
                <form>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search here..."
                  />
                  <button type="submit">
                    <i className="bx bx-search-alt"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Search Overlay --> */}
        {/* <!-- Start Shopping Cart Modal --> */}
        <div
          className="modal right fade shoppingCartModal"
          id="shoppingCartModal"
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
                  <i className="bx bx-x"></i>
                </span>
              </button>

              <div className="modal-body">
                <h3>My Cart (2)</h3>

                <div className="products-cart-content">
                  <div className="products-cart">
                    <div className="products-image">
                      <a href="#">
                        <img src="/assets/pics/rate.jpg" alt="image" />
                      </a>
                    </div>

                    <div className="products-content">
                      <h3>
                        <a href="#">
                          High-Powered Ultrasonic Rat Repellent for Gardens,
                          Factories, and Warehouses - Intense Noise for
                          Effective Outdoor and Indoor Rat Deterrence
                        </a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        <span className="price new-price"> ₹3,331</span>
                        <span>-67% </span>
                      </div>
                      <a href="#" className="remove-btn">
                        <i className="bx bx-trash"></i>
                      </a>
                    </div>
                  </div>

                  <div className="products-cart">
                    <div className="products-image">
                      <a href="#">
                        <img src="/assets/pics/rate.jpg" alt="image" />
                      </a>
                    </div>

                    <div className="products-content">
                      <h3>
                        <a href="#">
                          Smart Ultrasonic Rat Repellent for Commercial & Home
                          Use | Safe & Silent Rodent Defense – 1500 Sq. Ft
                        </a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        <span className="price new-price"> ₹3,331</span>
                        <span>-67% </span>
                      </div>
                      <a href="#" className="remove-btn">
                        <i className="bx bx-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="products-cart-subtotal">
                  <span>Subtotal</span>

                  <span className="subtotal">₹6,662.00</span>
                </div>

                <div className="products-cart-btn">
                  <a href="/Checkout" className="default-btn">
                    Proceed to Checkout
                  </a>
                  <a href="/Cart" className="optional-btn">
                    View Shopping Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Shopping Cart Modal --> */}
        {/* <!-- Start Sidebar Modal --> */}
        <div
          className="modal right fade sidebarModal"
          id="sidebarModal"
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
                  <i className="bx bx-x"></i>
                </span>
              </button>

              <div className="modal-body">
                <div className="sidebar-about-content">
                  <h3>About The Store</h3>

                  <div className="about-the-store">
                    <p>
                      At JP Enterprise, we specialize in providing advanced rat
                      repellent solutions designed to protect your vehicles,
                      homes, and commercial spaces from rodent damage.
                    </p>

                    <ul className="sidebar-contact-info">
                      <li>
                        <i className="bx bx-map"></i>{" "}
                        <a href="#" target="_blank">
                          Surat , Gujarat 395004
                        </a>
                      </li>
                      <li>
                        <i className="bx bx-phone-call"></i>{" "}
                        <a href="tel:+919265407449">+91 9265407449</a>
                      </li>
                      <li>
                        <i className="bx bx-mobile"></i>{" "}
                        <a href="tel:+917622009263">+91 7622009263</a>
                      </li>
                      <li>
                        <i className="bx bx-envelope"></i>{" "}
                        <a href="mailto:jpexport42@gmail.com">
                          jpexport42@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/login"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/login"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pinterest.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-new-in-store">
                  <h3>New In Store</h3>

                  <ul className="products-list">
                    <li>
                      <a href="/">
                        <img src="/assets/pics/rate.jpg" alt="image" />
                      </a>
                    </li>
                  </ul>

                  <p>
                    With over a decade of experience and satisfied customers
                    across India and abroad, we aim to offer safe, eco-friendly,
                    and effective pest control products at affordable prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Sidebar Modal --> */}

        {/* <!-- Start Wishlist Modal --> */}
        <div
          className="modal right fade shoppingWishlistModal"
          id="shoppingWishlistModal"
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
                  <i className="bx bx-x"></i>
                </span>
              </button>

              <div className="modal-body">
                <h3>My Wish List (2)</h3>

                <div className="products-cart-content">
                  <div className="products-cart">
                    <div className="products-image">
                      <a href="#">
                        <img src="/assets/pics/rate.jpg" alt="image" />
                      </a>
                    </div>

                    <div className="products-content">
                      <h3>
                        <a href="#">
                          High-Powered Ultrasonic Rat Repellent for Gardens,
                          Factories, and Warehouses - Intense Noise for
                          Effective Outdoor and Indoor Rat Deterrence
                        </a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        <span className="price new-price"> ₹3,331</span>
                        <span>-67% </span>
                      </div>
                      <a href="#" className="remove-btn">
                        <i className="bx bx-trash"></i>
                      </a>
                    </div>
                  </div>

                  <div className="products-cart">
                    <div className="products-image">
                      <a href="#">
                        <img src="/assets/pics/rate.jpg" alt="image" />
                      </a>
                    </div>

                    <div className="products-content">
                      <h3>
                        <a href="#">
                          Smart Ultrasonic Rat Repellent for Commercial & Home
                          Use | Safe & Silent Rodent Defense – 1500 Sq. Ft
                        </a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        <span className="price new-price"> ₹3,331</span>
                        <span>-67% </span>
                      </div>
                      <a href="#" className="remove-btn">
                        <i className="bx bx-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="products-cart-btn">
                  <a href="/Cart" className="optional-btn">
                    View Shopping Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Wishlist Modal --> */}
      </div>
    </>
  );
};

export default Navbar;
