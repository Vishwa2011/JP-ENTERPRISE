import React, { useState } from "react";

export default function RecentProducts() {
  const [selectedLabel, setSelectedLabel] = useState("New Arrivals");

  const products = [
    {
      id: 1,
      buttonLabel: "New Arrivals",
      mainImage: "/assets/pics/rate.jpg",
      hoverImage: "/assets/pics/speaker.jpg",
      tag: "New!",
      //   discount: "20% OFF",
      category: "Rat Repellent",
      title: "High-Powered Ultrasonic Rat Repellent",
      brand: "Generic",
      price: "₹3,331",
      oldPrice: "₹9,999",
    },
    {
      id: 2,
      buttonLabel: "On Sale",
      mainImage: "/assets/pics/rate.jpg",
      hoverImage: "/assets/pics/speaker 3.jpg",
      tag: "Sale!",
      discount: "25% OFF",
      category: "Rat Repellent",
      title: "Smart Ultrasonic Rat Repellent",
      brand: "Generic",
      price: "₹3,429",
      oldPrice: "₹9,999",
    },
    {
      id: 3,
      buttonLabel: "Limited Stock",
      mainImage: "/assets/pics/rate.jpg",
      hoverImage: "/assets/pics/speaker2.jpg",
      tag: "Hot!",
      discount: "15% OFF",
      category: "Rat Repellent",
      title: "High-Frequency Ultrasonic Rat Repeller",
      brand: "Generic",
      price: "₹3,331",
      oldPrice: "₹9,999",
    },
    {
      id: 4,
      buttonLabel: "Limited Stock",
      mainImage: "/assets/pics/rate.jpg",
      hoverImage: "/assets/pics/speaker 3.jpg",
      //   tag: "Hot!",
      discount: "18% OFF",
      category: "Rat Repellent",
      title: "Premium High-Frequency Rat Guard",
      brand: "Generic",
      price: "₹3,699",
      oldPrice: "₹9,999",
    },
    {
      id: 5,
      buttonLabel: "On Sale",
      mainImage: "/assets/pics/rate.jpg",
      hoverImage: "/assets/pics/speaker2.jpg",
      //tag: "Sale!",
      discount: "18% OFF",
      category: "Rat Repellent",
      title: "Premium High-Frequency Rat Guard",
      brand: "Generic",
      price: "₹3,699",
      oldPrice: "₹9,999",
    },
    {
      id: 6,
      buttonLabel: "New Arrivals",
      mainImage: "/assets/pics/rate.jpg",
      hoverImage: "/assets/pics/speaker2.jpg",
      tag: "New!",
      discount: "5% OFF",
      category: "Rat Repellent",
      title: "High-Powered Ultrasonic Rat Repellent",
      brand: "Generic",
      price: "₹3,331",
      oldPrice: "₹9,999",
    },
    {
      id: 7,
      buttonLabel: "New Arrivals",
      mainImage: "/assets/pics/rate.jpg",
      hoverImage: "/assets/pics/speaker 3.jpg",
      //tag: "New!",
      discount: "10% OFF",
      category: "Rat Repellent",
      title: "High-Powered Ultrasonic Rat Repellent",
      brand: "Generic",
      price: "₹3,331",
      oldPrice: "₹9,999",
    },
  ];

  // extract unique button labels
  const uniqueLabels = [...new Set(products.map((p) => p.buttonLabel))];

  // filter products based on selected button label
  const filteredProducts = products.filter(
    (p) => p.buttonLabel === selectedLabel
  );

  return (
    <section className="products-area pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">See Our Collection</span>
          <h2>Recent Products</h2>
          <div className="btn-group mt-5 d-flex flex-wrap justify-content-center">
            {uniqueLabels.map((label, index) => (
              <button
                key={index}
                className={`custom-tab-btn mx-2 mb-2 ${
                  selectedLabel === label ? "active" : ""
                }`}
                onClick={() => setSelectedLabel(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          {filteredProducts.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
              <div className="single-productsBox">
                <div className="products-image">
                  <a href="/Productdetails">
                    <img
                      src={product.mainImage}
                      className="main-image"
                      alt="main"
                    />
                    <img
                      src={product.hoverImage}
                      className="hover-image"
                      alt="hover"
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

                  {product.tag && <div className="new-tag">{product.tag}</div>}
                </div>

                <div className="products-content">
                  <span className="category">{product.category}</span>
                  <h3>
                    <a href="/Productdetails">{product.title}</a>
                  </h3>
                  <span>Brand: {product.brand}</span>
                  <div className="star-rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="price">
                    <span className="new-price">{product.price}</span>
                    <span className="old-price">{product.oldPrice}</span>
                  </div>
                  <a href="/Cart" className="add-to-cart">
                    Add to Cart
                  </a>
                </div>

                {product.discount && (
                  <span className="products-discount">
                    <span>{product.discount}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
