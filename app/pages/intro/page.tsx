"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./intro.css";
import Image from "next/image";
const IntroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const slides = [
    {
      title: "Welcome to Confessly",
      description:
        "Because Every Voice Deserves to Be Heard.",
      image: "/images/logo.png",
    },
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
    router.push("pages/auth/signup");
  };

  return (
    <div className="h-screen w-screen  overflow-hidden bg-gradient-to-br from-[#EADDCA] to-[#ffffff] flex items-center justify-center px-4">

      <div className="bg-gradient-to-br from-[#FFE7C7] to-purple-200 shadow-2xl rounded-3xl flex flex-col-reverse md:flex-row w-full max-w-4xl p-4 md:p-8 transition-transform duration-500 md:hover:scale-105">
        {/* Left Section - Image */}
        <div className="flex-1 flex w-full h-[250px] md:h-80 items-center justify-center overflow-hidden relative">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide.image}
              alt={slide.title}
              // fill // Automatically adjusts width/height
              width={400}
              height={400}
              className={`absolute rounded-lg w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-90 lg:h-90 floating-image object-contain transition-all duration-700 ease-in-out ${index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
                }`}
              priority
            />
          ))}
        </div>

        {/* Right Section - Info */}
        <div className="flex-1 flex flex-col justify-between mt-6 md:mt-0 min-h-[600px] max-h-[350px] md:min-h-[300px] md:max-h-[3500px]:">
        <div className="md:hidden flex-1 flex w-full h-[250px] md:h-80 items-center justify-center overflow-hidden relative">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide.image}
              alt={slide.title}
              // fill // Automatically adjusts width/height
              width={400}
              height={400}
              className={`absolute rounded-lg w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-90 lg:h-90 floating-image object-contain transition-all duration-700 ease-in-out ${index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
                }`}
              priority
            />
          ))}
        </div>
          <div className="flex-1 flex flex-col justify-between mt-6 md:mt-0 relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out md:mt-[5%] ${index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
                  }`}
              >
                <h2 className={`text-2xl {${currentSlide === 0 ? "md:text-4xl" : "text-2xl"} md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-orange-500 bg-clip-text text-transparent`}>
                  {slide.title}
                </h2>
                <p className="text-gray-700 mt-4 text-base md:text-lg">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {currentSlide === 0 ? (
            <div className="flex items-center justify-between md:mb-[13%] ">
              <button
                className="py-2 px-14 bg-green-500  text-white rounded-full"
                onClick={() => setCurrentSlide(currentSlide + 1)}
              >
                Start
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between md:mb-[3%]">
              <button
                className={`py-2 px-4 rounded-full transition-all duration-500 transform focus:ring focus:ring-purple-300 ${currentSlide === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#E97451] hover:bg-[#E97451] hover:scale-110"
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
                    className={`h-3 w-3 rounded-full transition-all duration-500 transform ${index === currentSlide
                        ? "bg-orange-500 scale-150 shadow-lg"
                        : "bg-orange-400 scale-100"
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
                  className="py-2 px-4 bg-[#E97451] hover:bg-[#E97451] text-white rounded-full transform hover:scale-110 transition-all duration-500 focus:ring focus:ring-purple-300"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
