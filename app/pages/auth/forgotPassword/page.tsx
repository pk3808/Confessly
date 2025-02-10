"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Email, Help } from "@mui/icons-material";


const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleResetPassword = () => {
    console.log("Reset password for", email);
    // Add reset password logic here
    setSubmitted(true);
  };

  const handleBackToLogin = () => {
    router.push("login");
  };

  return (
    <main className="h-screen  overflow-hidden w-screen bg-gradient-to-br from-[#f1ebe3] to-[#f3ebe2] flex items-center justify-center px-4">
      {/* <Logo /> */}
      <h1 className="absolute top-4 left-4 text-xl md:text-2xl font-serif font-bold text-[#248a8a] tracking-wide">Confessly</h1>
      <button
        className="absolute top-4 hidden justify-center md:flex right-4  items-center space-x-2 py-1.5 px-3 hover:bg-gray-800 text-black hover:text-white rounded-md shadow-md transition-all duration-500 focus:ring-2 focus:ring-blue-300 border-2 border-black w-[130px]"
       
      >
        <Help className="text-inheret" />
        <span className="text-inherit">Help</span>
      </button>
      <section className="bg-gradient-to-br from-[#fcfbfa] to-[#e2ddd7] shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl p-3 md:p-6 transition-transform duration-500">
        {/* Left Section - Image */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          <Image
            src="/images/forgot.png"
            alt="Forgot Password"
            width={400}
            height={400}
            className="rounded-lg w-64 h-64 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-90 lg:h-90"
            priority
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex flex-col justify-center mt-4 md:mt-0 px-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Forgot Password
          </h2>
          <p className="text-gray-600 mb-4">
            Enter your email address, and we'll send you a link to reset your password.
          </p>
          {!submitted ? (
            <>
              <div className="space-y-4">
                <div className="flex items-center border rounded-md shadow-sm px-2 py-1 focus-within:ring-2 focus-within:ring-orange-300">
                  <Email className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 bg-transparent outline-none text-gray-700 text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="w-full py-2 px-3 bg-orange-300 hover:bg-orange-600 text-white rounded-[10px] shadow-md transition-all duration-500 focus:ring-2 focus:ring-purple-300"
                  onClick={handleResetPassword}
                >
                  Send Reset Link
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Remembered your password? {" "}
                  <span
                    className="text-orange-700 font-bold hover:underline cursor-pointer"
                    onClick={handleBackToLogin}
                  >
                    Back to Login
                  </span>
                </p>
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                If this email exists, we've sent a password reset link to it. Please check your inbox.
              </p>
              <button
                className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-[10px] shadow-md transition-all duration-500 focus:ring-2 focus:ring-purple-300"
                onClick={handleBackToLogin}
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ForgotPasswordPage;
