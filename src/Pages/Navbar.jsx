import React from 'react'

const Navbar = () => {
  return (
    <>
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
    </>
  )
}

export default Navbar
