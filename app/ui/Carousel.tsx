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
    </div>
  );
};

export default Carousel;
