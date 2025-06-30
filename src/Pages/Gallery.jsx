import React, { useState } from "react";
import Navbar from "./Navbar";
import Facility from "../Components/Facility";
import Footer from "./Footer";

const images = [
  { src: "/assets/pics/rate.jpg", alt: "Image 01" },
  { src: "/assets/pics/speaker.jpg", alt: "Image 02" },
  { src: "/assets/pics/speaker2.jpg", alt: "Image 03" },
  { src: "/assets/pics/speaker 3.jpg", alt: "Image 04" },
  { src: "https://picsum.photos/id/14/1000/1000", alt: "Image 05" },
  { src: "https://picsum.photos/id/15/1000/1000", alt: "Image 06" },
  { src: "https://picsum.photos/id/16/1000/1000", alt: "Image 07" },
  { src: "https://picsum.photos/id/17/1000/1000", alt: "Image 08" },
  { src: "https://picsum.photos/id/18/1000/1000", alt: "Image 09" },
  { src: "https://picsum.photos/id/25/1000/1000", alt: "Image 10" },
  { src: "https://picsum.photos/id/29/1000/1000", alt: "Image 11" },
  { src: "https://picsum.photos/id/46/1000/1000", alt: "Image 12" },
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
