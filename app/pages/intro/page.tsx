'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./intro.css";

const IntroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const slides = [
    {
      title: "Share Your Thoughts Anonymously",
      description:
        "Post your confessions securely and anonymously with pseudonyms and unique profile icons.",
      image: "/images/slide1.png",
    },
    {
      title: "AI-Powered Recommendations",
      description:
        "Get personalized feeds based on your interactions, preferences, and trending topics.",
      image: "/images/slide2.png",
    },
    {
      title: "Engage and Connect",
      description:
        "React, comment, and connect anonymously through safe and private interactions.",
      image: "/images/slide3.png",
    },
    {
      title: "Join the Community",
      description:
        "Explore themed confession zones and contribute to a supportive community.",
      image: "/images/slide4.png",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl flex flex-col md:flex-row w-full max-w-4xl p-6 md:p-8 transition-transform duration-500 hover:scale-105">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-contain animate-slideImage floating-image"
            />
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="flex-1 flex flex-col justify-between mt-6 md:mt-0 md:ml-6 min-h-[200px] max-h-[250px]">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-600 animate-slideIn">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg animate-fadeIn">
            {slides[currentSlide].description}
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              className={`py-2 px-4 rounded-full transition-all duration-500 transform focus:ring focus:ring-purple-300 ${
                currentSlide === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-500 hover:bg-purple-600 hover:scale-110"
              } text-white`}
              onClick={handlePrevious}
              disabled={currentSlide === 0}
            >
              Previous
            </button>
            <div className="flex mt-4 space-x-2 justify-center">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full transition-all duration-500 transform ${
                    index === currentSlide
                      ? "bg-purple-500 scale-150 shadow-lg"
                      : "bg-gray-300 scale-100"
                  }`}
                ></span>
              ))}
            </div>
            {currentSlide === slides.length - 1 ? (
              <button
                className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-full transform hover:scale-110 transition-all duration-500 focus:ring focus:ring-green-300"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            ) : (
              <button
                className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full transform hover:scale-110 transition-all duration-500 focus:ring focus:ring-purple-300"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
