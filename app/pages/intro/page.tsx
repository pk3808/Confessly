"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./intro.css";
import {
  ArrowRight
} from "@mui/icons-material";
const IntroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  // Updated brand colors
  const colors = {
    primary: "#3E6D9C", // Deep blue
    secondary: "#5F4B8BFF", // Purple
    accent: "#00A67E", // Teal/green (Get Started button)
    background: "#F7F7F8", // Light gray background
    backgroundAlt: "#EFEFEF", // Slightly darker background
    text: "#111111", // Dark text
    textLight: "#6E6E80", // Gray text
  };

  const introSlide = {
    id: 1,
    title: "Confessly",
    description: "Because Every Voice Deserves to Be Heard.",
    image: "/images/logo.png",
  };

  const slides = [
    {
      id: 2,
      title: "Share Your Thoughts Anonymously",
      description:
        "Post your confessions securely and anonymously with pseudonyms and unique profile icons.",
      image: "/images/slide1.png",
    },
    {
      id: 3,
      title: "AI-Powered Recommendations",
      description:
        "Get personalized feeds based on your interactions, preferences, and trending topics.",
      image: "/images/slide2.png",
    },
    {
      id: 4,
      title: "Engage and Connect",
      description:
        "React, comment, and connect anonymously through safe and private interactions.",
      image: "/images/slide3.png",
    },
    {
      id: 5,
      title: "Join the Community",
      description:
        "Explore themed confession zones and contribute to a supportive community.",
      image: "/images/slide4.png",
    },
  ];

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, []);

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

  const handleSkip = () => {
    router.push("pages/auth/signup");
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#F7F7F8] to-[#FFFFFF] flex items-center justify-center px-4 relative">
      {/* Skip button */}
      <h1 className="absolute top-4 left-4 text-xl md:text-2xl font-serif font-bold text-[#000000]">
        Confessly
      </h1>
      {!showIntro && (
        <button 
          onClick={handleSkip}
          className="absolute top-4 right-4 hidden md:flex items-center space-x-2 px-6 py-1.5 text-black hover:bg-gray-800 hover:text-white border-2 border-black rounded-md shadow-md transition-all duration-300"

        >

          <ArrowRight className="text-inheret w-12 h-12" />
          Skip
        </button>
        
      )}
      
      {/* Intro Screen */}
      {showIntro ? (
        <div
          className={`flex flex-col items-center justify-center text-center transition-all duration-1000 transform ${
            fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="relative">
            <Image
              src={introSlide.image}
              alt="Confessly Logo"
              width={150}
              height={150}
              className="w-28 h-28 md:w-40 md:h-40 drop-shadow-xl animate-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3E6D9C]/20 to-[#00A67E]/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>

          {/* Title with updated colors */}
          <h2 className="text-3xl md:text-4xl font-mono font-bold mt-5 bg-gradient-to-r from-[#3E6D9C] via-[#5F4B8B] to-[#00A67E] bg-clip-text text-transparent tracking-wide">
            {introSlide.title}
          </h2>

          {/* Tagline with updated colors */}
          <p className="mt-3 text-[#6E6E80] text-sm md:text-base font-light leading-snug max-w-md">
            {introSlide.description}
          </p>
        </div>
      ) : (
        // Main Slides UI with FIXED SIZE - increased height for mobile
        <div className="bg-gradient-to-br from-[#F7F7F8] to-white shadow-xl rounded-3xl w-full max-w-4xl h-[650px] md:h-[450px] overflow-hidden transition-all duration-500 border border-[#EFEFEF]">
          {/* Flex direction column for mobile (image on top), row for desktop */}
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Section - TOP on mobile, LEFT on desktop */}
            <div className="w-full md:w-1/2 h-[250px] md:h-full flex items-center justify-center relative bg-gradient-to-br from-[#F7F7F8]/80 to-white order-first">
              {/* Background decorative elements */}
              <div className="absolute w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-[#3E6D9C]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00A67E]/20 rounded-full blur-3xl"></div>
              </div>
              
              {/* Fixed size image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                  >
                    {/* Fixed size image wrapper */}
                    <div className="w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 relative">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="contain"
                        className="drop-shadow-lg floating-image"
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section - BOTTOM on mobile, RIGHT on desktop */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white h-[400px] md:h-full order-last">
              {/* Slide Content - Fixed height container */}
              <div className="flex-1 flex flex-col justify-center relative">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0  transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <h2 className="text-2xl md:text-3xl md:mt-8 font-bold bg-gradient-to-r from-[#3E6D9C] to-[#00A67E] bg-clip-text text-transparent">
                      {slide.title}
                    </h2>
                    <p className="text-[#6E6E80] mt-4 text-base md:text-lg">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Indicator and Navigation - Fixed position */}
              <div className="mt-4 md:mb-8 space-y-6">
                {/* Progress bar */}
                <div className="w-full bg-[#F7F7F8] rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#3E6D9C] to-[#00A67E] transition-all duration-500"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                  ></div>
                </div>
                
                {/* Navigation Buttons with updated colors */}
                <div className="flex items-center justify-between">
                  <button
                    className={`py-2 px-5 rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E6D9C]/50 ${
                      currentSlide === 0
                        ? "bg-[#F7F7F8] text-[#6E6E80] cursor-not-allowed"
                        : "bg-white text-[#3E6D9C] border border-[#3E6D9C] hover:bg-[#3E6D9C]/10"
                    }`}
                    onClick={handlePrevious}
                    disabled={currentSlide === 0}
                  >
                    Back
                  </button>
                  
                  {currentSlide === slides.length - 1 ? (
                    <button
                      className="py-2 px-6 rounded-full transform transition-all duration-300 bg-[#00A67E] hover:bg-[#00956F] text-white font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A67E]/50"
                      onClick={handleSignUp}
                    >
                      Get Started
                    </button>
                  ) : (
                    <button
                      className="py-2 px-6 rounded-full transform transition-all duration-300 bg-[#3E6D9C] hover:bg-[#345D85] text-white font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3E6D9C]/50"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroPage;