import Navbar from "./Navbar"
import Footer from "./Footer"
import Instragram from "../Components/Instragram"
import Facility from "../Components/Facility"



const Home = () => {
  return (
    <div>
      <Navbar />
       {/* <!-- Start Main Banner Area --> */}
        <div className="home-slides-three owl-carousel owl-theme">
            <div className="hero-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <span className="sub-title">Protect Your Vehicle!</span>
                                        <h1>Car Rat Repellent</h1>
                                        <p>Keep your car safe from rat damage. 10% OFF – Limited Period Offer!</p>
                                        <div className="btn-box">
                                            <a href="/OurProducts" className="default-btn">Buy Now</a>
                                            {/* <a href="/OurProducts" className="optional-btn">Shop Men's</a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-image">
                                        <div className="circle"></div>
                                        <img src="assets/img/banner-img2.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <span className="sub-title">Protect Your Space!</span>
                                        <h1>Say Goodbye to Rats</h1>
                                        <p>Keep your home and office safe from wire-chewing rodents – Limited Offer!</p>
                                        <div className="btn-box">
                                            <a href="/OurProducts" className="default-btn">Buy Now</a>
                                            {/* <a href="/OurProducts" className="optional-btn">Shop Men's</a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-image">
                                        <div className="circle"></div>
                                        <img src="assets/img/banner-img1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Main Banner Area --> */}

        {/* <!-- Start Categories Banner Area --> */}
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-categories-box">
                            <img src="assets/img/categories/img1.jpg" alt="image" />

                            <div className="content text-white">
                                <span>Don’t Miss Today</span>
                                <h3>50% OFF</h3>
                                <a href="/OurProducts" className="default-btn">Discover Now</a>
                            </div>
                            <a href="/OurProducts" className="link-btn"></a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-categories-box">
                            <img src="assets/img/categories/img2.jpg" alt="image" />

                            <div className="content">
                                <span>New Collection</span>
                                <h3>Need Now</h3>
                                <a href="/OurProducts" className="default-btn">Discover Now</a>
                            </div>
                            <a href="/OurProducts" className="link-btn"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Categories Banner Area --> */}

        {/* <!-- Start Products Area --> */}
        <section className="products-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">See Our Collection</span>
                    <h2>Recent Products</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img13.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover13.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="new-tag">New!</div>
                            </div>

                            <div className="products-content">
                                <span className="category">T-Shirt</span>
                                <h3><a href="/Productdetails">Long Sleeve Leopard T-Shirt</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$321</span>
                                    <span className="new-price">$250</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>

                            <span className="products-discount">
                                <span>
                                    20% OFF
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img14.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover14.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">T-Shirt</span>
                                <h3><a href="/Productdetails">Causal V-Neck Soft Raglan</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$210</span>
                                    <span className="new-price">$200</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img15.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover15.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">Shirt</span>
                                <h3><a href="/Productdetails">Hanes Men's Pullover</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="new-price">$200</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img16.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover16.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sale-tag">Sale!</div>
                            </div>

                            <div className="products-content">
                                <span className="category">Twist Shirt</span>
                                <h3><a href="/Productdetails">Gildan Men's Crew T-Shirt</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="new-price">$150</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img17.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover17.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">Smart Shirt</span>
                                <h3><a href="/Productdetails">Yidarton Women's Comfy</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="new-price">$240</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>

                            <span className="products-discount">
                                <span>
                                    15% OFF
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img18.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover18.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">EcoSmart</span>
                                <h3><a href="/Productdetails">Womens Tops Color</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$150</span>
                                    <span className="new-price">$100</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Products Area --> */}

         {/* <!-- Start Offer Products Area --> */}
        <section className="offer-products-area">
            <div className="container">
                <div className="offer-products-slides owl-carousel owl-theme">
                    <div className="single-offer-products">
                        <div className="content">
                            <h3><a href="/OurProducts">New Collections!</a></h3>
                            <p>Stylist Allison Taylor take on the summer season's trends.</p>
                            <a href="/OurProducts" className="default-btn">Discover Now!</a>
                        </div>

                        <div className="image">
                            <a href="/OurProducts"><img src="assets/img/offer/img1.jpg" alt="image" /></a>
                        </div>
                    </div>

                    <div className="single-offer-products">
                        <div className="content">
                            <h3><a href="/OurProducts">Our Popular Products</a></h3>
                            <p>Stylist Allison Taylor take on the summer season's trends.</p>
                            <a href="/OurProducts" className="default-btn">Discover Now!</a>
                        </div>

                        <div className="image">
                            <a href="/OurProducts"><img src="assets/img/offer/img2.jpg" alt="image" /></a>
                        </div>
                    </div>

                    <div className="single-offer-products">
                        <div className="content">
                            <h3><a href="/OurProducts">Hot Trending Products</a></h3>
                            <p>Stylist Allison Taylor take on the summer season's trends.</p>
                            <a href="/OurProducts" className="default-btn">Discover Now!</a>
                        </div>

                        <div className="image">
                            <a href="/OurProducts"><img src="assets/img/offer/img3.jpg" alt="image" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Offer Products Area --> */}


          {/* <!-- Start Products Area --> */}
        <section className="products-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">See Our Collection</span>
                    <h2>Popular Products</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails"> 
                                    <img src="assets/img/products/img7.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover7.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="new-tag">New!</div>
                            </div>

                            <div className="products-content">
                                <span className="category">T-Shirt</span>
                                <h3><a href="/Productdetails">Tbmpoy Men's Tapered</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$321</span>
                                    <span className="new-price">$250</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>

                            <span className="products-discount">
                                <span>
                                    20% OFF
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img8.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover8.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">T-Shirt</span>
                                <h3><a href="/Productdetails">Sunnyme Women's Ponchos</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$210</span>
                                    <span className="new-price">$200</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img9.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover9.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">Shirt</span>
                                <h3><a href="/Productdetails">Open Front Knit Sweaters</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$210</span>
                                    <span className="new-price">$200</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img10.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover10.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sale-tag">Sale!</div>
                            </div>

                            <div className="products-content">
                                <span className="category">Twist Shirt</span>
                                <h3><a href="/Productdetails">Block Striped Draped</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="new-price">$150</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img11.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover11.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">Smart Shirt</span>
                                <h3><a href="/Productdetails">Fleece Hooded Sweatshirt</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="new-price">$240</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>

                            <span className="products-discount">
                                <span>
                                    15% OFF
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img12.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover12.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">EcoSmart</span>
                                <h3><a href="/Productdetails">Women's Modern-Skinny</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$150</span>
                                    <span className="new-price">$100</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Products Area --> */}

         {/* <!-- Start Facility Area --> */}
        <Facility />
        {/* <!-- End Facility Area --> */}

          {/* <!-- Start Products Area --> */}
        <section className="products-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">See Our Collection</span>
                    <h2>Best Selling Products</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img1.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover1.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="new-tag">New!</div>
                            </div>

                            <div className="products-content">
                                <span className="category">T-Shirt</span>
                                <h3><a href="/Productdetails">Sleeve Faux Suede Loose</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$321</span>
                                    <span className="new-price">$250</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>

                            <span className="products-discount">
                                <span>
                                    20% OFF
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img2.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover2.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">T-Shirt</span>
                                <h3><a href="/Productdetails">T-Shirt Casual Stripe Tunic</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$210</span>
                                    <span className="new-price">$200</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img3.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover3.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">Shirt</span>
                                <h3><a href="/Productdetails">Chest Cutout Tunics Long</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$210</span>
                                    <span className="new-price">$200</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img4.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover4.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="sale-tag">Sale!</div>
                            </div>

                            <div className="products-content">
                                <span className="category">Twist Shirt</span>
                                <h3><a href="/Productdetails">Twist Knotted Tops</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="new-price">$150</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img5.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover5.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">Smart Shirt</span>
                                <h3><a href="/Productdetails">Premium Lightweight Fleece</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="new-price">$240</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>

                            <span className="products-discount">
                                <span>
                                    15% OFF
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="assets/img/products/img6.jpg" className="main-image" alt="image" />
                                    <img src="assets/img/products/img-hover6.jpg" className="hover-image" alt="image" />
                                </a>

                                <div className="products-button">
                                    <ul>
                                        <li>
                                            <div className="wishlist-btn">
                                               <a href="#" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                    <i class='bx bx-heart'></i>
                                                    <span className="tooltip-label">Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quick-view-btn">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#productsQuickView">
                                                    <i class='bx bx-search-alt'></i>
                                                    <span className="tooltip-label">Quick View</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="products-content">
                                <span className="category">EcoSmart</span>
                                <h3><a href="/Productdetails">EcoSmart Fleece Hoodie</a></h3>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">$150</span>
                                    <span className="new-price">$100</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Products Area --> */}

         {/* <!-- Start Brand Area --> */}
        <div className="brand-area ptb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Shop By Brand</h2>
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
        </div>
        {/* <!-- End Brand Area --> */}

         {/* <!-- Start Blog Area --> */}
        <section className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Recent Story</span>
                    <h2>From The Xton Blog</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <a href="/Blog">
                                    <img src="assets/img/blog/img1.jpg" alt="image" />
                                </a>
                                <div className="date">
                                    <span>January 29, 2024</span>
                                </div>
                            </div>

                            <div className="post-content">
                                <span className="category">Ideas</span>
                                <h3><a href="/Blog">The #1 eCommerce blog to grow your business</a></h3>
                                <a href="/Blog" className="details-btn">Read Story</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <a href="/Blog">
                                    <img src="assets/img/blog/img2.jpg" alt="image" />
                                </a>
                            </div>

                            <div className="post-content">
                                <span className="category">Advice</span>
                                <h3><a href="/Blog">Latest ecommerce trend: The rise of shoppable posts</a></h3>
                                <a href="/Blog" className="details-btn">Read Story</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <a href="/Blog">
                                    <img src="assets/img/blog/img3.jpg" alt="image" />
                                </a>
                            </div>

                            <div className="post-content">
                                <span className="category">Social</span>
                                <h3><a href="/Blog">Building eCommerce wave: Social media shopping</a></h3>
                                <a href="/Blog" className="details-btn">Read Story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Blog Area --> */}

         {/* <!-- Start Instagram Area --> */}
        <Instragram />
        {/* <!-- End Instagram Area --> */}




          {/* <!-- Start Wishlist Modal --> */}
        <div className="modal right fade shoppingWishlistModal" id="shoppingWishlistModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class='bx bx-x'></i></span>
                    </button>

                    <div className="modal-body">
                        <h3>My Wish List (3)</h3>

                        <div className="products-cart-content">
                            <div className="products-cart">
                                <div className="products-image">
                                    <a href="#"><img src="assets/img/products/img1.jpg" alt="image" /></a>
                                </div>

                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$250.00</span>
                                    </div>
                                    <a href="#" className="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div className="products-cart">
                                <div className="products-image">
                                    <a href="#"><img src="assets/img/products/img2.jpg" alt="image" /></a>
                                </div>

                                <div className="products-content">
                                    <h3><a href="#">Causal V-Neck Soft Raglan</a></h3>
                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$200.00</span>
                                    </div>
                                    <a href="#" className="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div className="products-cart">
                                <div className="products-image">
                                    <a href="#"><img src="assets/img/products/img3.jpg" alt="image" /></a>
                                </div>

                                <div className="products-content">
                                    <h3><a href="#">Hanes Men's Pullover</a></h3>
                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$200.00</span>
                                    </div>
                                    <a href="#" className="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="products-cart-btn">
                            <a href="#" className="optional-btn">View Shopping Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Wishlist Modal --> */}
         {/* <!-- Start QuickView Modal Area --> */}
        <div className="modal fade productsQuickView" id="productsQuickView" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class='bx bx-x'></i></span>
                    </button>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="products-image">
                                <img src="assets/img/quick-view-img.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="products-content">
                                <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>

                                <div className="price">
                                    <span className="old-price">$210.00</span>
                                    <span className="new-price">$200.00</span>
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                    <a href="#" className="rating-count">3 reviews</a>
                                </div>

                                <ul className="products-info">
                                    <li><span>Vendor:</span> <a href="#">Lereve</a></li>
                                    <li><span>Availability:</span> <a href="#">In stock (7 items)</a></li>
                                    <li><span>Products Type:</span> <a href="#">T-Shirt</a></li>
                                </ul>

                                <div className="products-color-switch">
                                    <h4>Color:</h4>

                                    <ul>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Black" className="color-black"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="White" className="color-white"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Green" className="color-green"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Yellow Green" className="color-yellowgreen"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Teal" className="color-teal"></a></li>
                                    </ul>
                                </div>

                                <div className="products-size-wrapper">
                                    <h4>Size:</h4>

                                    <ul>
                                        <li><a href="#">XS</a></li>
                                        <li className="active"><a href="#">S</a></li>
                                        <li><a href="#">M</a></li>
                                        <li><a href="#">XL</a></li>
                                        <li><a href="#">XXL</a></li>
                                    </ul>
                                </div>

                                <div className="products-add-to-cart">
                                    <div className="input-counter">
                                        <span className="minus-btn"><i class='bx bx-minus'></i></span>
                                        <input type="text" value="1" />
                                        <span className="plus-btn"><i class='bx bx-plus'></i></span>
                                    </div>

                                    <button type="submit" className="default-btn">Add to Cart</button>
                                </div>

                                <a href="#" className="view-full-info">View Full Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End QuickView Modal Area --> */}

        <Footer />
        
    </div>
  )
}

export default Home
