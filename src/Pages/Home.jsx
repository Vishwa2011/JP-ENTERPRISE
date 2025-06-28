import { useEffect,useState  } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
// import Instragram from "../Components/Instragram"
import Facility from "../Components/Facility"



const Home = () => {
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
                                        <img src="/assets/pics/header1.jpg" alt="image" />
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
                                        <img src="/assets/pics/rat-in-kitchen.jpg" alt="image" />
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
                            <img src="/assets/pics/rate1.jpg" alt="image" />

                            <div className="content ">
                                <span>Don’t Miss Today</span>
                                <h3>50% OFF</h3>
                                <a href="/OurProducts" className="default-btn">Discover Now</a>
                            </div>
                            <a href="/OurProducts" className="link-btn"></a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-categories-box">
                            <img src="/assets/pics/rate1.jpg" alt="image" />

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
                                    <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                    <img src="/assets/pics/speaker.jpg" className="hover-image" alt="image" />
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
                                <span className="category">Rat Repellent</span>
                                <h3><a href="/Productdetails">High-Powered Ultrasonic Rat Repellent for Gardens, Factories, and Warehouses - Intense Noise for Effective Outdoor and Indoor Rat Deterrence</a></h3>
                                <span>Brand: Generic</span>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">₹9,999</span>
                                    <span className="new-price">₹3,331</span>
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
                                    <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                    <img src="/assets/pics/speaker 3.jpg" className="hover-image" alt="image" />
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
                                <span className="category">Rat Repellent</span>
                                <h3><a href="/Productdetails">Smart Ultrasonic Rat Repellent for Commercial & Home Use | Safe & Silent Rodent Defense – 1500 Sq. Ft</a></h3>
                                <span>Brand: Generic</span>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">₹9,999</span>
                                    <span className="new-price">₹3,429</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                    <img src="/assets/pics/speaker2.jpg" className="hover-image" alt="image" />
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
                                <span className="category">Rat Repellent</span>
                                <h3><a href="/Productdetails">High-Frequency Ultrasonic Rat Repeller – Dual Indoor & Outdoor Use | 1500 Sq. Ft | Plug & Play</a></h3>
                                <span>Brand: Generic</span>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                <div className="price">
                                    <span className="old-price">₹9,999</span>
                                    <span className="new-price">₹3,331</span>
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
          <h3><a href="/OurProducts">Latest Rat Repellent Devices</a></h3>
          <p>Protect your home, office, and car from rodent damage with our newly launched ultrasonic products.</p>
          <a href="/OurProducts" className="default-btn">Shop Now</a>
        </div>

        <div className="image">
          <a href="/OurProducts"><img src="/assets/pics/post.jpg" alt="JP Enterprise new collection" style={{border:"1px solid"}} /></a>
        </div>
      </div>

      <div className="single-offer-products">
        <div className="content">
          <h3><a href="/OurProducts">Best-Selling Rat Guards</a></h3>
          <p>Join thousands of satisfied customers using our best-rated ultrasonic rat repellers.</p>
          <a href="/OurProducts" className="default-btn">Explore More</a>
        </div>

        <div className="image">
          <a href="/OurProducts"><img src="/assets/pics/header2.jpg" alt="JP Enterprise popular products" style={{border:"1px solid"}}/></a>
        </div>
      </div>

      <div className="single-offer-products">
        <div className="content">
          <h3><a href="/OurProducts">Top Trending Devices</a></h3>
          <p>Smart, silent, and safe — our trending ultrasonic solutions are built for modern spaces.</p>
          <a href="/OurProducts" className="default-btn">Grab Yours</a>
        </div>

        <div className="image">
          <a href="/OurProducts"><img src="/assets/pics/header3.jpg" alt="JP Enterprise trending products" style={{border:"1px solid"}}/></a>
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
                                    <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                    <img src="/assets/pics/speaker 3.jpg" className="hover-image" alt="image" />
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
                                <span className="category">Rat Repellent</span>
                                <h3><a href="/Productdetails">High-Frequency Ultrasonic Rat Repeller – Dual Indoor & Outdoor Use | 1500 Sq. Ft | Plug & Play</a></h3>
                                <span>Brand: Generic</span>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                 <div className="price">
                                    <span className="old-price">₹9,999</span>
                                    <span className="new-price">₹3,331</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                    <img src="/assets/pics/speaker.jpg" className="hover-image" alt="image" />
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
                                <span className="category">Rat Repellent</span>
                                <h3><a href="/Productdetails">High-Powered Ultrasonic Rat Repellent for Gardens, Factories, and Warehouses - Intense Noise for Effective Outdoor and Indoor Rat Deterrence</a></h3>
                                <span>Brand: Generic</span>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                               <div className="price">
                                    <span className="old-price">₹9,999</span>
                                    <span className="new-price">₹3,331</span>
                                </div>
                                <a href="/Cart" className="add-to-cart">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                   

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-productsBox">
                            <div className="products-image">
                                <a href="/Productdetails">
                                    <img src="/assets/pics/rate.jpg" className="main-image" alt="image" />
                                    <img src="/assets/pics/speaker2.jpg" className="hover-image" alt="image" />
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
                               <span className="category">Rat Repellent</span>
                                <h3><a href="/Productdetails">Smart Ultrasonic Rat Repellent for Commercial & Home Use | Safe & Silent Rodent Defense – 1500 Sq. Ft</a></h3>
                                <span>Brand: Generic</span>
                                <div className="star-rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                                  <div className="price">
                                    <span className="old-price">₹9,999</span>
                                    <span className="new-price">₹3,429</span>
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
      <span className="sub-title">Recent Insights</span>
      <h2>From The JP Enterprise Blog</h2>
    </div>

    <div className="row justify-content-center">
      
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="post-image">
            <a href="/Blog">
              <img src="/assets/pics/Rat-in-Car.png" alt="Rat Infestation Prevention" />
            </a>
            <div className="date">
              <span>June 20, 2025</span>
            </div>
          </div>

          <div className="post-content">
            <span className="category">Awareness</span>
            <h3><a href="/Blog">Top 5 Signs You May Have a Rat Problem</a></h3>
            <a href="/Blog" className="details-btn">Read Story</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="post-image">
            <a href="/Blog">
              <img src="/assets/pics/blog2.jpg" alt="Why Rat Repellent is Important" />
            </a>
          </div>

          <div className="post-content">
            <span className="category">Tips</span>
            <h3><a href="/Blog">Why Every Office Needs a Rat Repellent Device</a></h3>
            <a href="/Blog" className="details-btn">Read Story</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div className="post-image">
            <a href="/Blog">
              <img src="/assets/pics/Rat-gnawing.png" alt="How ultrasonic repellers work" />
            </a>
          </div>

          <div className="post-content">
            <span className="category">Technology</span>
            <h3><a href="/Blog">How Ultrasonic Rat Repellent Technology Works</a></h3>
            <a href="/Blog" className="details-btn">Read Story</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* <!-- End Blog Area --> */}

         {/* <!-- Start Instagram Area --> */}
        {/* <Instragram /> */}
        {/* <!-- End Instagram Area --> */}




          {/* <!-- Start Wishlist Modal --> */}
        {/* <div className="modal right fade shoppingWishlistModal" id="shoppingWishlistModal" tabindex="-1" role="dialog">
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
        </div> */}
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
                                <img src="/assets/pics/rate1.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="products-content">
                                <h3><a href="#">High-Frequency Ultrasonic Rat Repeller – Dual Indoor & Outdoor Use | 1500 Sq. Ft | Plug & Play</a></h3>

                                   <div className="price">
                                    <span className="old-price">₹9,999</span>
                                    <span className="new-price">₹3,429</span>
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                        <i class='bx bxs-star'></i>
                                    </div>
                                    <a href="#" className="rating-count">3 ratings</a>
                                </div>

                                <ul className="products-info">
                                    <li><span>Brand:</span> <a href="#">Generic</a></li>
                                    <li><span>Style:</span> <a href="#">modern</a></li>
                                    <li><span>Material:</span> <a href="#">	Metal</a></li>
                                    <li><span>Product  <br />Dimensions:</span> <a href="">5L x 10W x 10H Centimeters</a></li>
                                    <li><span>Item Weight:</span><a href="">750 Grams</a></li>
                                    <li><span>Number of Pieces:</span><a href="">1</a></li>
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
      <input
        type="text"
        value={count}
        readOnly
      />
      <span className="plus-btn" onClick={handleIncrement}>
        <i className="bx bx-plus"></i>
      </span>
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
