'use client';
import React from 'react';
import Slider from 'react-slick';

const images = [
  '/carousel/1.webp',
  '/carousel/2.webp',
  '/carousel/3.webp',
  '/carousel/4.webp',
  '/carousel/5.jpg',
  '/carousel/6.jpg',
  '/carousel/7.jpg',
  '/carousel/8.jpg',
  '/carousel/14.webp',
  '/carousel/15.webp',
  '/carousel/16.webp',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="w-full h-64 overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="h-64">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="relative hero-overlay">
        {/* Triangles */}
        <div className="hero-overlay-triangle hero-overlay-triangle-1 absolute -bottom-px left-0 w-full bg-white opacity-66"></div>
        <div className="hero-overlay-triangle hero-overlay-triangle-2 absolute -bottom-px left-0 w-full bg-white opacity-66"></div>
        <div className="hero-overlay-triangle hero-overlay-triangle-3 absolute -bottom-px left-0 w-full bg-white opacity-66"></div>
        <div className="hero-overlay-triangle hero-overlay-triangle-4 absolute -bottom-px left-0 w-full bg-white opacity-66"></div>

        {/* Gradient */}
        <div className="hero-overlay-gradient absolute -bottom-px left-0 w-full"></div>
      </div>
    </div>
  );
};

export default Carousel;
