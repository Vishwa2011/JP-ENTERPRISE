import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import { FaTruck, FaShareAlt } from "react-icons/fa";
import Navbar from "./Navbar";

const PlaceOrder = () => {
  const order = {
    customerName: "XYZ Mehta",
    address: `23, Mehta Nagar, Near Kinar Residency, Adajan, Surat, Gujarat - 395004`,
    phone: "1234567981",
    deliveryDate: "Thursday, 17th Jul",
    product: {
      name: "rate repellent",
      price: 3100,
      
      quantity: 1,
      image: "/assets/pics/rate.jpg", // use any local image
    },
  };

  return (
    <>
    <Navbar />
    <div className="order-container">
      {/* Header */}
      <div className="order-header">
        <FaCheckCircle className="order-icon" />
        <span className="order-title">Thank you for shopping with us!</span> <br />
        <span className="order-close">ID: #173726603925275648</span>
      </div>

    {/* Product Info */}
      <div className="product-card">
        <h5 className="product-card-h5">Product Details</h5>
        <div className="product-top">
          <span>1 Product</span>
          <a href="/TrackOrder" className="track-link">TRACK ORDER <i class="fa-solid fa-chevron-right"></i></a>
        </div>

        <div className="delivery-date">
          <FaTruck className="truck-icon" />
          <span>Delivery by <strong>{order.deliveryDate}</strong></span>
        </div>

        <div className="product-detail">
          <img src={order.product.image} alt="product" className="product-img" />
          <div className="product-info">
            <p className="price">₹{order.product.price}</p>
            <p className="m-0"> Qty: {order.product.quantity}</p>
            <p className="return-info">Only wrong/defect item returns</p>
          </div>
          {/* <FaShareAlt className="share-icon" /> Share */}
        </div>
      </div>

      {/* Delivery Info */}
      <div className="delivery-info">
        <h5 className="product-card-h5">Delivery Address</h5>
        <p><strong>Deliver to {order.customerName.toLowerCase()}</strong></p>
        <p>{order.address}</p>
        <p>Contact Number - {order.phone}</p>
      </div>

      
    </div>
    </>
  );
};

export default PlaceOrder;
