import React from 'react';
import Navbar from './Navbar';
import Facility from '../Components/Facility';
import Instragram from '../Components/Instragram';
import Footer from './Footer';

export default function OrderView() {
  return (
    <div>
      <Navbar />
      {/* Start Page Title */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>My Order View</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li>My Order View</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-black min-h-screen font-sans py-10">
          <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">

            <div className="col-12" style={{padding:'100px 0px'}}>
              <div className="row">
                <div className="col-6">
    {/* Title */}
            <h3 className="text-2xl font-bold ">High-Powered Ultrasonic Rat Repellent</h3>

            {/* Two-column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Product Image */}
              <div>
                <img
                  src="/assets/pics/rate1.jpg"
                  alt="Rat Repellent"
                  className="w-full h-auto object-contain bg-gray-100 p-4 rounded-md"
                  style={{width:'50%'}}
                />
              </div>
  </div>
                </div>
                <div className="col-6">
                  {/* Delivery Details */}
              <div>
                <p className="text-green-600 text-lg font-semibold">
                  DELIVERED ON 8 SEPTEMBER 2024
                </p>
                <p className="text-gray-500 text-sm mt-1 mb-6">Delivered - Sunday, 8 Sep</p>

                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-gray-800">Delivering to</p>
                  <p className="text-gray-700">Krina yadav</p>
                  <p className="text-gray-700">B2/404  Raj Platinum, Canal Road, Gujarat-24, 395009</p>
                  <p className="text-gray-700">Mobile: 1234567890</p>
                </div>
              </div>
                </div>
              </div>
            </div>
        
              
          
          </div>
        </div>
      </div>

      <Facility />
      <Instragram />
      <Footer />
    </div>
  );
}
