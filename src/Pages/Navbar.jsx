import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
          <div className="top-header">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-12">
                        <ul className="header-contact-info">
                            <li>Welcome to Xton</li>
                            <li>Call: <a href="tel:+01321654214">+01 321 654 214</a></li>
                            <li>
                                <div className="dropdown language-switcher d-inline-block">
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/img/us-flag.jpg" alt="image" />
                                        <span>Eng <i className='bx bx-chevron-down'></i></span>
                                    </button>

                                    <div className="dropdown-menu">
                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/germany-flag.jpg" className="shadow-sm" alt="flag" />
                                            <span>Ger</span>
                                        </a>
                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/france-flag.jpg" className="shadow-sm" alt="flag" />
                                            <span>Fre</span>
                                        </a>
                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/spain-flag.jpg" className="shadow-sm" alt="flag" />
                                            <span>Spa</span>
                                        </a>
                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/russia-flag.jpg" className="shadow-sm" alt="flag" />
                                            <span>Rus</span>
                                        </a>
                                        <a href="#" className="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/italy-flag.jpg" className="shadow-sm" alt="flag" />
                                            <span>Ita</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="top-header-discount-info">
                            <p><strong>50% OFF</strong> all new collections! <a href="#">Discover Now!</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <ul className="header-top-menu">
                            <li><a href="login.html"><i className='bx bxs-user'></i> My Account</a></li>
                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal"><i className='bx bx-heart'></i> Wishlist</a></li>
                            <li><a href="compare.html"><i className='bx bx-shuffle'></i> Compare</a></li>
                            <li><a href="login.html"><i className='bx bx-log-in'></i> Login</a></li>
                        </ul>

                        <ul className="header-top-others-option">
                            <div className="option-item">
                                <div className="search-btn-box">
                                    <i className="search-btn bx bx-search-alt"></i>
                                </div>
                            </div>

                            <div className="option-item">
                                <div className="cart-btn">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i className='bx bx-shopping-bag'></i><span>0</span></a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
 {/* <!-- Start Navbar Area --> */}
        <div class="navbar-area">
            <div class="xton-responsive-nav">
                <div class="container">
                    <div class="xton-responsive-menu mean-container" >
                        <div class="logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" class="main-logo" alt="logo" />
                                <img src="assets/img/white-logo.png" class="white-logo" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="xton-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" class="main-logo" alt="logo" />
                            <img src="assets/img/white-logo.png" class="white-logo" alt="logo" />
                        </a>

                        <div class="collapse navbar-collapse mean-menu">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="/" class="nav-link active">Home </a>
                                   
                                </li>

                                <li class="nav-item "><a href="/Aboutus" class="nav-link">About Us </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 2</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-2.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 3</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Product Pages</h6>

                                                        <ul class="megamenu-submenu">
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

                                                <div class="brand-slides owl-carousel owl-theme">
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img1.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img2.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img3.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img4.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img5.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img6.png" alt="image" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item "><a href="/Mice_problem" class="nav-link">Mice Problem </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Pages</h6>

                                                        <ul class="megamenu-submenu">
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

                                                    <div class="col">
                                                        <h6 class="submenu-title">Gallery</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="gallery-1.html">Grid (2 in Row)</a></li>

                                                            <li><a href="gallery-2.html">Grid (3 in Row)</a></li>

                                                            <li><a href="gallery-3.html">Grid Full Width (3 in Row)</a></li>

                                                            <li><a href="gallery-4.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="gallery-5.html">Masonry (3 in Row)</a></li>

                                                            <li><a href="gallery-6.html">Masonry (4 in Row)</a></li>
                                                        </ul>

                                                        <h6 class="submenu-title">My Account</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="login.html">Login</a></li>

                                                            <li><a href="signup.html">Signup</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Categories</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="categories-1.html">Categories (2 in Row)</a></li>

                                                            <li><a href="categories-2.html">Categories Fullwidth</a></li>

                                                            <li><a href="categories-3.html">Categories (1 in Row)</a></li>

                                                            <li><a href="categories-4.html">Categories Full Width (3 in Row)</a></li>
                                                        </ul>

                                                        <h6 class="submenu-title">Lookbook</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="lookbook-1.html">Grid (3 in Row)</a></li>

                                                            <li><a href="lookbook-2.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="lookbook-3.html">Masonry (3 in Row)</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop</h6>

                                                        <ul class="megamenu-submenu">
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

                                <li class="nav-item "><a href="/OurProducts" class="nav-link">Our Products </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 2</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-2.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 3</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li>
                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>

                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item "><a href="#" class="nav-link">Contact Us </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 2</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-2.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 3</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li>
                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>
                                                                
                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item"><a href="#" class="nav-link">Blog </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="blog-1.html" class="nav-link">Grid (2 in Row)</a></li>

                                        <li class="nav-item"><a href="blog-2.html" class="nav-link">Grid (3 in Row)</a></li>

                                        <li class="nav-item"><a href="blog-3.html" class="nav-link">Grid (4 in Row)</a></li>

                                        <li class="nav-item"><a href="blog-4.html" class="nav-link">Grid (Full Width)</a></li>

                                        <li class="nav-item"><a href="blog-5.html" class="nav-link">Right Sidebar</a></li>

                                        <li class="nav-item"><a href="blog-6.html" class="nav-link">Masonry (3 in Row)</a></li>

                                        <li class="nav-item"><a href="#" class="nav-link">Single Post <i class='bx bx-chevron-right'></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a href="single-blog-1.html" class="nav-link">Default</a></li>
        
                                                <li class="nav-item"><a href="single-blog-2.html" class="nav-link">With Video</a></li>
        
                                                <li class="nav-item"><a href="single-blog-3.html" class="nav-link">With Image Slider</a></li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
                                
                            </ul>

                            <div class="others-option">
                                <div class="option-item">
                                    <div class="search-btn-box">
                                        <i class="search-btn bx bx-search-alt"></i>
                                    </div>
                                </div>

                                <div class="option-item">
                                    <div class="cart-btn">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i class='bx bx-shopping-bag'></i><span>0</span></a>
                                    </div>
                                </div>

                                <div class="option-item">
                                    <div class="burger-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                                        <span class="top-bar"></span>
                                        <span class="middle-bar"></span>
                                        <span class="bottom-bar"></span>
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
        <div class="navbar-area header-sticky">
            <div class="xton-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index-4.html">
                            <img src="assets/img/logo.png" alt="logo" />
                        </a>

                        <div class="collapse navbar-collapse mean-menu">
                       <ul class="navbar-nav">
                                <li class="nav-item"><a href="/" class="nav-link active">Home </a>
                                   
                                </li>

                                <li class="nav-item "><a href="/Aboutus" class="nav-link">About Us </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 2</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-2.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 3</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Product Pages</h6>

                                                        <ul class="megamenu-submenu">
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

                                                <div class="brand-slides owl-carousel owl-theme">
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img1.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img2.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img3.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img4.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img5.png" alt="image" /></a>
                                                    </div>
                                
                                                    <div class="brand-item">
                                                        <a href="#"><img src="assets/img/brand/img6.png" alt="image" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item "><a href="#" class="nav-link">Mice Problem </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Pages</h6>

                                                        <ul class="megamenu-submenu">
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

                                                    <div class="col">
                                                        <h6 class="submenu-title">Gallery</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="gallery-1.html">Grid (2 in Row)</a></li>

                                                            <li><a href="gallery-2.html">Grid (3 in Row)</a></li>

                                                            <li><a href="gallery-3.html">Grid Full Width (3 in Row)</a></li>

                                                            <li><a href="gallery-4.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="gallery-5.html">Masonry (3 in Row)</a></li>

                                                            <li><a href="gallery-6.html">Masonry (4 in Row)</a></li>
                                                        </ul>

                                                        <h6 class="submenu-title">My Account</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="login.html">Login</a></li>

                                                            <li><a href="signup.html">Signup</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Categories</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="categories-1.html">Categories (2 in Row)</a></li>

                                                            <li><a href="categories-2.html">Categories Fullwidth</a></li>

                                                            <li><a href="categories-3.html">Categories (1 in Row)</a></li>

                                                            <li><a href="categories-4.html">Categories Full Width (3 in Row)</a></li>
                                                        </ul>

                                                        <h6 class="submenu-title">Lookbook</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="lookbook-1.html">Grid (3 in Row)</a></li>

                                                            <li><a href="lookbook-2.html">Grid Full Width (4 in Row)</a></li>

                                                            <li><a href="lookbook-3.html">Masonry (3 in Row)</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop</h6>

                                                        <ul class="megamenu-submenu">
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

                                <li class="nav-item "><a href="/OurProducts" class="nav-link">Our Products </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 2</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-2.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 3</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li>
                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>

                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item "><a href="#" class="nav-link">Contact Us </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="container">
                                                <div class="row justify-content-center">
                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 2</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-2.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-2.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-2.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-2.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-2.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-2.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-2.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <h6 class="submenu-title">Shop Styles 3</h6>

                                                        <ul class="megamenu-submenu">
                                                            <li><a href="products-left-sidebar-3.html">Left Sidebar</a></li>

                                                            <li><a href="products-left-sidebar-with-categories-3.html">Left Sidebar With Categories</a></li>

                                                            <li><a href="products-right-sidebar-3.html">Right Sidebar</a></li>

                                                            <li><a href="products-right-sidebar-with-categories-3.html">Right Sidebar With Categories</a></li>

                                                            <li><a href="products-one-row-3.html">1 Products Per Row</a></li>

                                                            <li><a href="products-without-sidebar-3.html">Without Sidebar</a></li>

                                                            <li><a href="products-sidebar-fullwidth-3.html">With Sidebar Full Width</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="col">
                                                        <ul class="megamenu-submenu">
                                                            <li>
                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img2.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Popular Products</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>
                                                                
                                                                <div class="aside-trending-products">
                                                                    <img src="assets/img/categories/img1.jpg" alt="image" />

                                                                    <div class="category">
                                                                        <h4>Top Trending</h4>
                                                                    </div>

                                                                   <a href="products-right-sidebar.html" class="link-btn"></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item"><a href="#" class="nav-link">Blog </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="blog-1.html" class="nav-link">Grid (2 in Row)</a></li>

                                        <li class="nav-item"><a href="blog-2.html" class="nav-link">Grid (3 in Row)</a></li>

                                        <li class="nav-item"><a href="blog-3.html" class="nav-link">Grid (4 in Row)</a></li>

                                        <li class="nav-item"><a href="blog-4.html" class="nav-link">Grid (Full Width)</a></li>

                                        <li class="nav-item"><a href="blog-5.html" class="nav-link">Right Sidebar</a></li>

                                        <li class="nav-item"><a href="blog-6.html" class="nav-link">Masonry (3 in Row)</a></li>

                                        <li class="nav-item"><a href="#" class="nav-link">Single Post <i class='bx bx-chevron-right'></i></a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item"><a href="single-blog-1.html" class="nav-link">Default</a></li>
        
                                                <li class="nav-item"><a href="single-blog-2.html" class="nav-link">With Video</a></li>
        
                                                <li class="nav-item"><a href="single-blog-3.html" class="nav-link">With Image Slider</a></li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
                                
                            </ul>

                            <div class="others-option">
                                <div class="option-item">
                                    <div class="search-btn-box">
                                        <i class="search-btn bx bx-search-alt"></i>
                                    </div>
                                </div>

                                <div class="option-item">
                                    <div class="cart-btn">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingCartModal"><i class='bx bx-shopping-bag'></i><span>0</span></a>
                                    </div>
                                </div>

                                <div class="option-item">
                                    <div class="burger-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                                        <span class="top-bar"></span>
                                        <span class="middle-bar"></span>
                                        <span class="bottom-bar"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- End Header Area --> */}

           {/* <!-- Start Shopping Cart Modal --> */}
        <div class="modal right fade shoppingCartModal" id="shoppingCartModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class='bx bx-x'></i></span>
                    </button>

                    <div class="modal-body">
                        <h3>My Cart (3)</h3>

                        <div class="products-cart-content">
                            <div class="products-cart">
                                <div class="products-image">
                                    <a href="#"><img src="assets/img/products/img1.jpg" alt="image" /></a>
                                </div>

                                <div class="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <span>Blue / XS</span>
                                    <div class="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span class="price">$250.00</span>
                                    </div>
                                    <a href="#" class="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div class="products-cart">
                                <div class="products-image">
                                    <a href="#"><img src="assets/img/products/img2.jpg" alt="image" /></a>
                                </div>

                                <div class="products-content">
                                    <h3><a href="#">Causal V-Neck Soft Raglan</a></h3>
                                    <span>Blue / XS</span>
                                    <div class="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span class="price">$200.00</span>
                                    </div>
                                    <a href="#" class="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div class="products-cart">
                                <div class="products-image">
                                    <a href="#"><img src="assets/img/products/img3.jpg" alt="image" /></a>
                                </div>

                                <div class="products-content">
                                    <h3><a href="#">Hanes Men's Pullover</a></h3>
                                    <span>Blue / XS</span>
                                    <div class="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span class="price">$200.00</span>
                                    </div>
                                    <a href="#" class="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="products-cart-subtotal">
                            <span>Subtotal</span>

                            <span class="subtotal">$524.00</span>
                        </div>

                        <div class="products-cart-btn">
                            <a href="#" class="default-btn">Proceed to Checkout</a>
                            <a href="#" class="optional-btn">View Shopping Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Shopping Cart Modal --> */}
          {/* <!-- Start Sidebar Modal --> */}
        <div class="modal right fade sidebarModal" id="sidebarModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class='bx bx-x'></i></span>
                    </button>

                    <div class="modal-body">
                        <div class="sidebar-about-content">
                            <h3>About The Store</h3>

                            <div class="about-the-store">
                                <p>One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                
                                <ul class="sidebar-contact-info">
                                    <li><i class='bx bx-map'></i> <a href="#" target="_blank">Wonder Street, USA, New York</a></li>
                                    <li><i class='bx bx-phone-call'></i> <a href="tel:+01321654214">+01 321 654 214</a></li>
                                    <li><i class='bx bx-envelope'></i> <a href="mailto:hello@xton.com">hello@xton.com</a></li>
                                </ul>
                            </div>

                            <ul class="social-link">
                                <li><a href="https://www.facebook.com/" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="https://twitter.com/login" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                                <li><a href="https://www.instagram.com/" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                                <li><a href="https://www.linkedin.com/login" class="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                                <li><a href="https://www.pinterest.com/" class="d-block" target="_blank"><i class='bx bxl-pinterest-alt'></i></a></li>
                            </ul>
                        </div>

                        <div class="sidebar-new-in-store">
                            <h3>New In Store</h3>

                            <ul class="products-list">
                                <li>
                                    <a href="products-one-row-2.html"><img src="assets/img/products/img1.jpg" alt="image" /></a>
                                </li>

                                <li>
                                    <a href="products-one-row-2.html"><img src="assets/img/products/img2.jpg" alt="image" /></a>
                                </li>

                                <li>
                                    <a href="products-one-row-2.html"><img src="assets/img/products/img3.jpg" alt="image" /></a>
                                </li>

                                <li>
                                    <a href="products-one-row-2.html"><img src="assets/img/products/img4.jpg" alt="image" /></a>
                                </li>
                            </ul>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="products-left-sidebar-with-categories-3.html" class="shop-now-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Sidebar Modal --> */}

         {/* <!-- Start Wishlist Modal --> */}
        <div class="modal right fade shoppingWishlistModal" id="shoppingWishlistModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class='bx bx-x'></i></span>
                    </button>

                    <div class="modal-body">
                        <h3>My Wish List (3)</h3>

                        <div class="products-cart-content">
                            <div class="products-cart">
                                <div class="products-image">
                                    <a href="#"><img src="assets/img/products/img1.jpg" alt="image" /></a>
                                </div>

                                <div class="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <span>Blue / XS</span>
                                    <div class="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span class="price">$250.00</span>
                                    </div>
                                    <a href="#" class="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div class="products-cart">
                                <div class="products-image">
                                    <a href="#"><img src="assets/img/products/img2.jpg" alt="image" /></a>
                                </div>

                                <div class="products-content">
                                    <h3><a href="#">Causal V-Neck Soft Raglan</a></h3>
                                    <span>Blue / XS</span>
                                    <div class="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span class="price">$200.00</span>
                                    </div>
                                    <a href="#" class="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div class="products-cart">
                                <div class="products-image">
                                    <a href="#"><img src="assets/img/products/img3.jpg" alt="image" /></a>
                                </div>

                                <div class="products-content">
                                    <h3><a href="#">Hanes Men's Pullover</a></h3>
                                    <span>Blue / XS</span>
                                    <div class="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span class="price">$200.00</span>
                                    </div>
                                    <a href="#" class="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="products-cart-btn">
                            <a href="#" class="optional-btn">View Shopping Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Wishlist Modal --> */}
      
    </div>
     

        
    </>
  )
}

export default Navbar
