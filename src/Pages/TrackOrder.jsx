import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import Navbar from "./Navbar";

const OrderTracking = () => {
  const tracking = {
    orderId: "173669522841635072",
    productName: "Smart Ultrasonic Rat Repellent",
    price: 3100,
    payment: "Cash",
   
    returnPolicy: "Only wrong/defect item returns",
    image: "/assets/pics/rate.jpg", // Update path accordingly
    deliveryDate: "Thu, 17 Jul",
   
  };


  return (
    <>
    <Navbar />
    <div className="tracking-container">
      {/* Product Info */}
      <div className="product-summary">
        <img src={tracking.image} alt="product" className="product-thumb" />
        <div className="product-info">
          <p className="order-id">
            Order #{tracking.orderId}
          </p>
          <p className="product-title">{tracking.productName}</p>
          <p className="product-meta">
             {tracking.payment} ₹{tracking.price}
          </p>
          <p className="return-policy">{tracking.returnPolicy}</p>
        </div>
      </div>

      {/* Order Status */}
      <div className="order-status row">
        <div className="status-header col-1">
          <FaCheckCircle className="status-icon" />
        </div>
          <div className="col-5">
            <p className="mb-0"><strong>Order Placed</strong></p>
            <p >Delivery by {tracking.deliveryDate}</p>
          </div>
      </div>

    


      {/* Note */}
      <div className="delivery-note">
        <span>⭐</span> 95% orders delivered early in Surat
      </div>
      <div className="d-flex justify-content-end mt-2">
        <a href="/" >Back to Home</a>
      </div>
    </div>

     </>
  );
};

export default OrderTracking;
