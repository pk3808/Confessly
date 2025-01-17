'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const IntroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter(); // To navigate to the signup page
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
    router.push("/signup"); // Navigate to the signup page
  };

  return (
    <div className="h-screen w-screen bg-gray-900 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-6 md:p-8">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="flex-1 flex flex-col justify-between mt-6 md:mt-0 md:ml-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500 dark:text-blue-300">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mt-4 text-base md:text-lg">
            {slides[currentSlide].description}
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              className={`py-2 px-4 rounded ${
                currentSlide === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
              onClick={handlePrevious}
              disabled={currentSlide === 0}
            >
              Previous
            </button>
            {currentSlide === slides.length - 1 ? (
              <button
                className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            ) : (
              <button
                className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>

          {/* Progress Dots */}
          <div className="flex mt-4 space-x-2 justify-center">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentSlide
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
