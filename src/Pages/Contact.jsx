import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'

export default function Contact() {
      const canvasRef = useRef(null);
  const [captchaCode, setCaptchaCode] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let generatedCode = "";

    const angleMin = -45;
    const angleMax = 45;
    const fontSizeMin = 20;
    const fontSizeMax = 30;

    for (let i = 0; i < 6; i++) {
      const char = chars.charAt(Math.floor(Math.random() * chars.length));
      generatedCode += char;

      const fontSize = fontSizeMin + Math.random() * (fontSizeMax - fontSizeMin);
      ctx.font = `${fontSize}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)}, 
                          ${Math.floor(Math.random() * 256)})`;

      const angle = angleMin + Math.random() * (angleMax - angleMin);
      ctx.translate(20 + i * 30, canvas.height / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.fillText(char, 0, 0);
      ctx.rotate((-angle * Math.PI) / 180);
      ctx.translate(-(20 + i * 30), -canvas.height / 2);
    }

    setCaptchaCode(generatedCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== captchaCode) {
      alert("Invalid captcha code. Please try again.");
      setInputValue("");
      generateCaptcha();
    } else {
      alert("Form submitted successfully.");
      setInputValue("");
      generateCaptcha();
    }
  };
  return (
    <div>
      <Navbar />
             {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Contact Area --> */}
        <section className="contact-area ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="contact-info">
                            <h3>Here to Help</h3>
                            <p>Have a question? You may find an answer in our <a href="/Faq">FAQs</a>. But you can also contact us.</p>

                            <ul className="contact-list">
                                <li><i class='bx bx-map'></i> Location: <a href="#">Surat , Gujarat 395004</a></li>
                                <li><i class='bx bx-phone-call'></i> Call Us: <a href="tel:+919265407449">+91 9265407449</a></li>
                                <li><i class='bx bx-mobile'></i> Mobile Number: <a href= "tel:+917622009263">+91 7622009263</a></li>
                                <li><i class='bx bx-envelope'></i> Email Us: <a href="mailto:jpexport42@gmail.com">jpexport42@gmail.com</a></li>
                            </ul>

                            <h3>Opening Hours:</h3>
                            <ul className="opening-hours">
                                <li><span>Monday:</span> 8AM - 6AM</li>
                                <li><span>Tuesday:</span> 8AM - 6AM</li>
                                <li><span>Wednesday:</span> 8AM - 6AM</li>
                                <li><span>Thursday - Friday:</span> 8AM - 6AM</li>
                                <li><span>Sunday:</span> Closed</li>
                            </ul>

                            <h3>Follow Us:</h3>
                            <ul className="social">
                                <li><a href="#" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="#" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                                <li><a href="#" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                                <li><a href="#" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                                <li><a href="#" target="_blank"><i class='bx bxl-skype'></i></a></li>
                                <li><a href="#" target="_blank"><i class='bx bxl-pinterest-alt'></i></a></li>
                                <li><a href="#" target="_blank"><i class='bx bxl-youtube'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="contact-form">
                            <h3>Drop Us A Line</h3>
                            <p>We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>

                            <form id="contactForm">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Name <span>*</span></label>
                                            <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <label>Email <span>*</span></label>
                                            <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your email address" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Phone Number <span>*</span></label>
                                            <input type="text" name="phone_number" id="phone_number" className="form-control" required data-error="Please enter your phone number" placeholder="Your phone number" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Your Message <span>*</span></label>
                                            <textarea name="message" id="message" cols="30" rows="5" required data-error="Please enter your message" className="form-control" placeholder="Write your message..."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                        <form onSubmit={handleSubmit} id="captcha-form">
    <div style={{display:'flex'}}>
<div>

      <canvas
        id="captcha"
        ref={canvasRef}
        width="200"
        height="70"
        style={{ display: "block", marginBottom: "10px" }}
      ></canvas>
</div>
      <div style={{alignItems:"center",display:'flex'}}>

      <button type="button" className="btn btn-secondary me-2" onClick={generateCaptcha} style={{height:'35px'}}>
        Refresh Captcha
      </button>
      </div>
    </div>
        <div className="mb-3">
        <label htmlFor="captcha-input" className="form-label">Enter Captcha</label>
        <input
          type="text"
          className="form-control"
          id="captcha-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </div>
      
    </form>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Contact Area --> */}

        {/* <!-- Map --> */}
        <div id="map" className='mb-5'>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.480282128934!2d72.8276855!3d21.1702406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4a25809c4f%3A0x9d94ef9991f07026!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1720114537907!5m2!1sen!2sin"></iframe>
        </div>
        {/* <!-- End Map --> */}
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
