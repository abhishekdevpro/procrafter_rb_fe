import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "./Images/procrafterimg1.png";
import image2 from "./Images/procrafterimg2.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const images = [image1, image2];
  const { t } = useTranslation();
  const prevSlide = () => {
    setDirection("left");
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setDirection("right");
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(autoPlay);
    };
  }, [currentIndex]);

  return (
    <>
      <h2 className="text-center text-4xl py-3 font-bold">
        {t("explore_resume_services")}
      </h2>
      <div className="relative flex justify-center items-center w-full max-w-6xl h-64 md:h-[600px] mx-auto px-4">
        <FaArrowLeft
          className="absolute top-1/2 left-2 md:left-8 transform -translate-y-1/2 text-purple-600 cursor-pointer z-10 hover:text-purple-700 transition-colors"
          onClick={prevSlide}
        />
        <FaArrowRight
          className="absolute top-1/2 right-2 md:right-8 transform -translate-y-1/2 text-purple-600 cursor-pointer z-10 hover:text-purple-700 transition-colors"
          onClick={nextSlide}
        />
        <div className="slider-container w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentIndex ? "active" : ""
              } ${direction}`}
            >
              <Image
                src={image}
                alt={`slide ${index}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 flex justify-center w-full">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-colors ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
