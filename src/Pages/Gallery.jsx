import React, { useState } from "react";
import Navbar from "./Navbar";
import Facility from "../Components/Facility";
import Footer from "./Footer";

const images = [
  { src: "/assets/pics/rate.jpg", alt: "Image 01" },
  { src: "/assets/pics/speaker.jpg", alt: "Image 02" },
  { src: "/assets/pics/speaker2.jpg", alt: "Image 03" },
  { src: "/assets/pics/speaker 3.jpg", alt: "Image 04" },

];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxAltImage, setLightboxAltImage] = useState("");

  const openLightbox = (src, alt) => {
    setLightboxImage(src);
    setLightboxAltImage(alt);
  };

  const closeLightbox = () => {
    setLightboxImage("");
    setLightboxAltImage("");
  };

  return (
    <div>
      <Navbar />
       {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Gallery</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}
      <div className="gallerypage mt-5 mb-5">
        <div className="container">
          <div className="about-content text-center">
            <span className="sub-title">Photo Gallery</span>
            <h2>Explore our latest collection of stunning visuals</h2>
          </div>
          <div className="gallery">
            {images.map((image, index) => (
              <button
                type="button"
                className="gallery__item"
                key={index}
                onClick={() => openLightbox(image.src, image.alt)}
              >
                <img
                  className="gallery__image"
                  src={image.src}
                  alt={image.alt}
                />
              </button>
            ))}
          </div>

          {lightboxImage && (
            <div className="lightbox">
              <button
                type="button"
                className="lightbox__close-button"
                onClick={closeLightbox}
              >
                &times;
              </button>
              <img
                className="lightbox__image"
                src={lightboxImage}
                alt={lightboxAltImage}
              />
              <button
                type="button"
                className="lightbox__bg"
                onClick={closeLightbox}
              />
            </div>
          )}
        </div>
      </div>
      <Facility />
      <Footer />
    </div>
  );
}
