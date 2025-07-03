import React, { useState } from "react";
import Navbar from "./Navbar";
import Facility from "../Components/Facility";
import Footer from "./Footer";
import Instragram from "../Components/Instragram";

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState("orders");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [user, setUser] = useState({
    name: "XYZ",
    email: "xyz@example.com",
    phone: "+91 9876543210",
    address:
      "324-327 3rd Floor, Laxmi Enclave, Katargam, Surat, Gujarat 395004",
    joined: "April 10, 2024",
    profilePic: "/assets/pics/user.png",
  });

  const [formData, setFormData] = useState(user);

  const handleEdit = () => {
    setFormData(user);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, profilePic: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    setTimeout(() => {
      setUser(formData);
      setIsEditing(false);
      alert("Profile updated successfully!");
    }, 1000);
  };

  const orders = [
    {
      id: "#10536",
      date: "January 4, 2024",
      status: "Processing",
      total: "₹3,331 for 1 item",
    },
    {
      id: "#10391",
      date: "May 30, 2023",
      status: "Processing",
      total: "₹3,331 for 1 item",
    },
    {
      id: "#10350",
      date: "May 29, 2023",
      status: "Processing",
      total: "₹3,331 for 1 item",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="account-container mt-4 mb-5">
        <div className="account-sidebar">
          <h4>My account</h4>
          <ul>
            <li
              onClick={() => setActiveTab("profile")}
              className={activeTab === "profile" ? "active" : ""}
            >
              Profile
            </li>
            <li
              onClick={() => setActiveTab("orders")}
              className={activeTab === "orders" ? "active" : ""}
            >
              Orders
            </li>
            <li
              onClick={() => setActiveTab("addresses")}
              className={activeTab === "addresses" ? "active" : ""}
            >
              Addresses
            </li>
            <li
              onClick={() => setActiveTab("details")}
              className={activeTab === "details" ? "active" : ""}
            >
              Tracking Order
            </li>
            <li
              onClick={() => setActiveTab("logout")}
              className={activeTab === "logout" ? "active" : ""}
            >
              Log Out
            </li>
          </ul>
        </div>

        <div className="account-content">
          {activeTab === "profile" && (
            <>
              <h3>Profile Overview</h3>
              {!isEditing ? (
                <div className="profile-box">
                  <img
                    src={user.profilePic}
                    alt="Profile"
                    className="profile-pic"
                  />
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {user.address}
                  </p>
                  <p>
                    <strong>Member Since:</strong> {user.joined}
                  </p>
                  <button className="view-btn" onClick={handleEdit}>
                    Edit Profile
                  </button>
                </div>
              ) : (
                <div className="profile-box">
                  <div className="profile-pic-container">
                    <img
                      src={formData.profilePic}
                      alt="Preview"
                      className="profile-pic"
                    />
                    <input
                      type="file"
                      name="profilePic"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                  />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                  <button className="view-btn" onClick={handleSave}>
                    Save
                  </button>
                </div>
              )}
            </>
          )}

          {activeTab === "orders" && (
            <>
              <h3>Orders</h3>
              <table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          color: "#f53f85",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        {order.id}
                      </td>
                      <td>{order.date}</td>
                      <td>{order.status}</td>
                      <td>{order.total}</td>
                      <td>
                        <button className="view-btn">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeTab === "addresses" && (
            <div>
              <h3>Your saved addresses</h3>
              {!isEditingAddress ? (
                <div className="address-box">
                  <p>
                    <strong>Home Address:</strong>
                  </p>
                  <p>{user.address}</p>
                  <button
                    className="view-btn"
                    onClick={() => {
                      setFormData(user);
                      setIsEditingAddress(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <div className="address-box">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter new address"
                  />
                  <button className="view-btn" onClick={handleSave}>
                    Save Address
                  </button>
                </div>
              )}
            </div>
          )}
          {activeTab === "details" && (
            <div className="tracking-box">
              <h3 className="tracking-title">All In One Package Tracking</h3>
              <form className="tracking-form">
                <label htmlFor="orderId">ORDER ID</label>
                <input
                  type="text"
                  id="orderId"
                  name="orderId"
                  placeholder="Enter your order ID"
                />

                <label htmlFor="email">BILLING E-MAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />

                <button type="submit" className="track-btn">
                  TRACK ORDER
                </button>
              </form>
            </div>
          )}
          {activeTab === "logout" && <h3>You have been logged out.</h3>}
        </div>
      </div>

      <Facility />
      <Instragram />
      <Footer />
    </div>
  );
}
