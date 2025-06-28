import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // default

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
                  <li>Welcome to JP Enterprise</li>
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
                  <p>
                    <strong>50% OFF</strong> all new collections!{" "}
                    <a href="#">Discover Now!</a>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <ul className="header-top-menu">
                  <li>
                    <a href="/Login">
                      <i className="bx bxs-user"></i> My Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#shoppingWishlistModal"
                    >
                      <i className="bx bx-heart"></i> Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="/Compare">
                      <i className="bx bx-shuffle"></i> Compare
                    </a>
                  </li>
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
                        data-bs-target="#shoppingCartModal"
                      >
                        <i className="bx bx-shopping-bag"></i>
                        <span>0</span>
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
          <div className="xton-responsive-nav">
            <div className="container">
              <div className="xton-responsive-menu mean-container">
                <div className="logo">
                   <a className="navbar-brand" href="/">
                  <img
                    src="/assets/pics/jp.logo.png"
                    className="main-logo"
                    alt="logo"
                    style={{width:'130px' , height:'75px'}}
                  />
                  <img
                    src="/assets/pics/jp white.png"
                    className="white-logo"
                    alt="logo"
                    style={{width:'120px' , height:'45px'}}
                  />
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className="xton-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/">
                  <img
                    src="/assets/pics/jp.logo.png"
                    className="main-logo"
                    alt="logo"
                    style={{width:'130px' , height:'75px'}}
                  />
                  <img
                    src="/assets/pics/jp white.png"
                    className="white-logo"
                    alt="logo"
                    style={{width:'120px' , height:'45px'}}
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
                      <NavLink to="/Aboutus" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                        About Us
                      </NavLink>

                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 2</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="/">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 3</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Product Pages</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-type-1.html">Default Style</a></li>

                                                            <li><a href="products-type-2.html">Thumbs List</a></li>

                                                            <li><a href="products-type-3.html">Grid Style</a></li>

                                                            <li><a href="products-type-4.html">Sticky Details</a></li>

                                                            <li><a href="products-type-5.html">Slider Image</a></li>

                                                            <li><a href="cart.html">Cart</a></li>

                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="brand-slides owl-carousel owl-theme">
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img1.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img2.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img3.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img4.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img5.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img6.png" alt="image" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item ">
                     
                        <NavLink to="/Mice_problem" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Mice Problem
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Pages</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="about.html">About Us</a></li>

                                                            <li><a href="customer-service.html">Customer Service</a></li>

                                                            <li><a href="login.html">Login</a></li>

                                                            <li><a href="signup.html">Signup</a></li>

                                                            <li><a href="faqs.html">FAQ's</a></li>

                                                            <li><a href="error-404.html">404 Error</a></li>

                                                            <li><a href="coming-soon.html">Coming Soon</a></li>

                                                            <li><a href="track-order.html">Tracking Order</a></li>

                                                            <li><a href="contact.html">Contact Us</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Gallery</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="gallery-1.html">Grid (2 in Row)</a></li>

                                                            <li><a href="gallery-2.html">Grid (3 in Row)</a></li>

                                                            <li><a href="gallery-3.html">Grid Full Width (3 in Row)</a></li>

                                                            <li><a href="gallery-4.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="gallery-5.html">Masonry (3 in Row)</a></li>

                                                            <li><a href="gallery-6.html">Masonry (4 in Row)</a></li>
                                                        </ul>

                                                        <h6 className="submenu-title">My Account</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="login.html">Login</a></li>

                                                            <li><a href="signup.html">Signup</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Categories</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="categories-1.html">Categories (2 in Row)</a></li>

                                                            <li><a href="categories-2.html">Categories Fullwidth</a></li>

                                                            <li><a href="categories-3.html">Categories (1 in Row)</a></li>

                                                            <li><a href="categories-4.html">Categories Full Width (3 in Row)</a></li>
                                                        </ul>

                                                        <h6 className="submenu-title">Lookbook</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="lookbook-1.html">Grid (3 in Row)</a></li>

                                                            <li><a href="lookbook-2.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="lookbook-3.html">Masonry (3 in Row)</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="cart.html">Cart</a></li>

                                                            <li><a href="checkout.html">Cehckout</a></li>

                                                            <li><a href="compare.html">Compare</a></li>

                                                            <li><a href="login.html">My Account</a></li>

                                                            <li><a href="sizing-guide.html">Sizing Guide</a></li>

                                                            <li><a href="track-order.html">Tracking Order</a></li>

                                                            <li><a href="customer-service.html">Customer Service</a></li>

                                                            <li><a href="contact.html">Contact Us</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item ">
                      {/* <a href="/OurProducts" className="nav-link">
                        Our Products{" "}
                      </a> */}
                      <NavLink to="/OurProducts" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Our Products
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 2</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="/">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 3</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>

                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item ">
                      {/* <a href="/Contact" className="nav-link">
                        Contact Us{" "}
                      </a> */}
                       <NavLink to="/Contact" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Contact Us
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 2</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="/">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 3</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>
                                                                
                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item">
                      {/* <a href="/Blog" className="nav-link">
                        Blog{" "}
                      </a> */}
                       <NavLink to="/Blog" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Blog
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item"><a href="blog-1.html" className="nav-link">Grid (2 in Row)</a></li>

                                        <li className="nav-item"><a href="blog-2.html" className="nav-link">Grid (3 in Row)</a></li>

                                        <li className="nav-item"><a href="blog-3.html" className="nav-link">Grid (4 in Row)</a></li>

                                        <li className="nav-item"><a href="blog-4.html" className="nav-link">Grid (Full Width)</a></li>

                                        <li className="nav-item"><a href="blog-5.html" className="nav-link">Right Sidebar</a></li>

                                        <li className="nav-item"><a href="blog-6.html" className="nav-link">Masonry (3 in Row)</a></li>

                                        <li className="nav-item"><a href="#" className="nav-link">Single Post <i class='bx bx-chevron-right'></i></a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a href="single-blog-1.html" className="nav-link">Default</a></li>
        
                                                <li className="nav-item"><a href="single-blog-2.html" className="nav-link">With Video</a></li>
        
                                                <li className="nav-item"><a href="single-blog-3.html" className="nav-link">With Image Slider</a></li>
                                            </ul>
                                        </li>
                                    </ul> */}
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
                          data-bs-target="#shoppingCartModal"
                        >
                          <i className="bx bx-shopping-bag"></i>
                          <span>0</span>
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
                    style={{width:'130px' , height:'75px'}}
                  />
                  <img
                    src="/assets/pics/jp white.png"
                    className="white-logo"
                    alt="logo"
                    style={{width:'120px' , height:'45px'}}
                  />
                </a>

                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      {/* <a href="/" className="nav-link active">
                        Home{" "}
                      </a> */}
                       <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Home
                      </NavLink>
                    </li>

                    <li className="nav-item ">
                      {/* <a href="/Aboutus" className="nav-link">
                        About Us{" "}
                      </a> */}
                      <NavLink to="/Aboutus" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                          About Us
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 2</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="/">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 3</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Product Pages</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-type-1.html">Default Style</a></li>

                                                            <li><a href="products-type-2.html">Thumbs List</a></li>

                                                            <li><a href="products-type-3.html">Grid Style</a></li>

                                                            <li><a href="products-type-4.html">Sticky Details</a></li>

                                                            <li><a href="products-type-5.html">Slider Image</a></li>

                                                            <li><a href="cart.html">Cart</a></li>

                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="brand-slides owl-carousel owl-theme">
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img1.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img2.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img3.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img4.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img5.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div className="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img6.png" alt="image" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item ">
                      {/* <a href="/Mice_problem" className="nav-link">
                        Mice Problem{" "}
                      </a> */}
                      <NavLink to="/Mice_problem" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Mice Problem
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Pages</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="about.html">About Us</a></li>

                                                            <li><a href="customer-service.html">Customer Service</a></li>

                                                            <li><a href="login.html">Login</a></li>

                                                            <li><a href="signup.html">Signup</a></li>

                                                            <li><a href="faqs.html">FAQ's</a></li>

                                                            <li><a href="error-404.html">404 Error</a></li>

                                                            <li><a href="coming-soon.html">Coming Soon</a></li>

                                                            <li><a href="track-order.html">Tracking Order</a></li>

                                                            <li><a href="contact.html">Contact Us</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Gallery</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="gallery-1.html">Grid (2 in Row)</a></li>

                                                            <li><a href="gallery-2.html">Grid (3 in Row)</a></li>

                                                            <li><a href="gallery-3.html">Grid Full Width (3 in Row)</a></li>

                                                            <li><a href="gallery-4.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="gallery-5.html">Masonry (3 in Row)</a></li>

                                                            <li><a href="gallery-6.html">Masonry (4 in Row)</a></li>
                                                        </ul>

                                                        <h6 className="submenu-title">My Account</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="login.html">Login</a></li>

                                                            <li><a href="signup.html">Signup</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Categories</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="categories-1.html">Categories (2 in Row)</a></li>

                                                            <li><a href="categories-2.html">Categories Fullwidth</a></li>

                                                            <li><a href="categories-3.html">Categories (1 in Row)</a></li>

                                                            <li><a href="categories-4.html">Categories Full Width (3 in Row)</a></li>
                                                        </ul>

                                                        <h6 className="submenu-title">Lookbook</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="lookbook-1.html">Grid (3 in Row)</a></li>

                                                            <li><a href="lookbook-2.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="lookbook-3.html">Masonry (3 in Row)</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="cart.html">Cart</a></li>

                                                            <li><a href="checkout.html">Cehckout</a></li>

                                                            <li><a href="compare.html">Compare</a></li>

                                                            <li><a href="login.html">My Account</a></li>

                                                            <li><a href="sizing-guide.html">Sizing Guide</a></li>

                                                            <li><a href="track-order.html">Tracking Order</a></li>

                                                            <li><a href="customer-service.html">Customer Service</a></li>

                                                            <li><a href="contact.html">Contact Us</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item ">
                      {/* <a href="/OurProducts" className="nav-link">
                        Our Products{" "}
                      </a> */}
                      <NavLink to="/OurProducts" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Our Products
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 2</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="/">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 3</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>

                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item ">
                      {/* <a href="/Contact" className="nav-link">
                        Contact Us{" "}
                      </a> */}
                      <NavLink to="/Contact" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Contact Us
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 2</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="/">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">Shop Styles 3</h6>

                                                        <ul className="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>
                                                                
                                                                <div className="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div className="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" className="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                    </li>

                    <li className="nav-item">
                      {/* <a href="/Blog" className="nav-link">
                        Blog{" "}
                      </a> */}
                       <NavLink to="/Blog" className={({ isActive }) => `nav-link${isActive ? " active" : ""}` }>
                         Blog
                      </NavLink>
                      {/* <ul className="dropdown-menu">
                                        <li className="nav-item"><a href="blog-1.html" className="nav-link">Grid (2 in Row)</a></li>

                                        <li className="nav-item"><a href="blog-2.html" className="nav-link">Grid (3 in Row)</a></li>

                                        <li className="nav-item"><a href="blog-3.html" className="nav-link">Grid (4 in Row)</a></li>

                                        <li className="nav-item"><a href="blog-4.html" className="nav-link">Grid (Full Width)</a></li>

                                        <li className="nav-item"><a href="blog-5.html" className="nav-link">Right Sidebar</a></li>

                                        <li className="nav-item"><a href="blog-6.html" className="nav-link">Masonry (3 in Row)</a></li>

                                        <li className="nav-item"><a href="#" className="nav-link">Single Post <i class='bx bx-chevron-right'></i></a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a href="single-blog-1.html" className="nav-link">Default</a></li>
        
                                                <li className="nav-item"><a href="single-blog-2.html" className="nav-link">With Video</a></li>
        
                                                <li className="nav-item"><a href="single-blog-3.html" className="nav-link">With Image Slider</a></li>
                                            </ul>
                                        </li>
                                    </ul> */}
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
                          data-bs-target="#shoppingCartModal"
                        >
                          <i className="bx bx-shopping-bag"></i>
                          <span>0</span>
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
                            <input type="text" className="input-search" placeholder="Search here..." />
                            <button type="submit"><i class='bx bx-search-alt'></i></button>
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
                        <a href="#">High-Powered Ultrasonic Rat Repellent for Gardens, Factories, and Warehouses - Intense Noise for Effective Outdoor and Indoor Rat Deterrence</a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        
                        <span>-67% </span>
                        <span className="price"> ₹3,331</span>
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
                        <a href="#">Smart Ultrasonic Rat Repellent for Commercial & Home Use | Safe & Silent Rodent Defense – 1500 Sq. Ft</a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        
                        <span>-67% </span>
                        <span className="price"> ₹3,331</span>
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
                      One of the most popular on the web is shopping. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <ul className="sidebar-contact-info">
                      <li>
                        <i className="bx bx-map"></i>{" "}
                        <a href="#" target="_blank">
                          Wonder Street, USA, New York
                        </a>
                      </li>
                      <li>
                        <i className="bx bx-phone-call"></i>{" "}
                        <a href="tel:+919265407449">+91 9265407449</a>
                      </li>
                       <li><i class='bx bx-mobile'></i> <a href= "tel:+917622009263">+91 7622009263</a></li>
                      <li>
                        <i className="bx bx-envelope"></i>{" "}
                        <a href="mailto:jpexport42@gmail.com">jpexport42@gmail.com</a>
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
                        <img src="assets/img/products/img1.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="/">
                        <img src="assets/img/products/img2.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="/">
                        <img src="assets/img/products/img3.jpg" alt="image" />
                      </a>
                    </li>

                    <li>
                      <a href="/">
                        <img src="assets/img/products/img4.jpg" alt="image" />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="/OurProducts" className="shop-now-btn">
                    Shop Now
                  </a>
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
                        <a href="#">High-Powered Ultrasonic Rat Repellent for Gardens, Factories, and Warehouses - Intense Noise for Effective Outdoor and Indoor Rat Deterrence</a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        
                        <span>-67% </span>
                        <span className="price"> ₹3,331</span>
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
                        <a href="#">Smart Ultrasonic Rat Repellent for Commercial & Home Use | Safe & Silent Rodent Defense – 1500 Sq. Ft</a>
                      </h3>
                      <span>Brand: Generic</span>
                      <div className="products-price">
                        
                        <span>-67% </span>
                        <span className="price"> ₹3,331</span>
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
